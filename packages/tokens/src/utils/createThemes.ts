import Color from 'color';
import plugin from 'tailwindcss/plugin';
import forEach from 'lodash.foreach';
import flatten from 'flat';
import { generateVariations, colors as originalColors } from "../"

const SCHEME = Symbol('color-scheme');
const emptyConfig: TwcConfig = {};

type NestedColors = { [SCHEME]?: 'light' | 'dark' } & MaybeNested<string, string>;
type FlatColors = { [SCHEME]?: 'light' | 'dark' } & Record<string, string>;
type TwcObjectConfig<ThemeName extends string> = Record<ThemeName, NestedColors>;
type TwcFunctionConfig<ThemeName extends string> = (scheme: {
	light: typeof light;
	dark: typeof dark;
}) => TwcObjectConfig<ThemeName>;

type ResolvedVariants = Array<{ name: string; definition: string[] }>;
type ResolvedUtilities = { [selector: string]: Record<string, string> };
type ResolvedColors = {
	[colorName: string]: ({
		opacityValue,
		opacityVariable,
	}: {
		opacityValue: string;
		opacityVariable: string;
	}) => string;
};

export type TwcConfig<ThemeName extends string = string> =
	| TwcObjectConfig<ThemeName>
	| TwcFunctionConfig<ThemeName>;

export interface TwcOptions<ThemeName extends string = string> {
	produceCssVariable?: (colorName: string) => string;
	produceThemeClass?: (themeName: ThemeName) => string;
	produceThemeVariant?: (themeName: ThemeName) => string;
	defaultTheme?: NoInfer<ThemeName> | (string & {}); // "| (string & {})" avoids ts error in case the config is functional
	strict?: boolean;
	defaultColors?: any
}

/**
 * Resolves the variants, utilities and colors to inject in the plugin
 * Library authors might use this function instead of the createThemes function
 */
export const resolveTwcConfig = <ThemeName extends string>(
	config: TwcConfig<ThemeName> = emptyConfig,
	{
		produceCssVariable = defaultProduceCssVariable,
		produceThemeClass = defaultProduceThemeClass,
		produceThemeVariant = produceThemeClass,
		defaultTheme,
		strict = false,
		defaultColors = {}
	}: TwcOptions<ThemeName> = {},
) => {
	const resolved: {
		variants: ResolvedVariants;
		utilities: ResolvedUtilities;
		colors: ResolvedColors;
	} = {
		variants: [],
		utilities: {},
		colors: {},
	};
	let resolvedTheme: any = resolved

	const configObject = config;
	let variation = {}

	// @ts-ignore forEach types fail to assign themeName
	forEach(configObject, (colors: NestedColors, themeName: ThemeName) => {
		const themeClassName = produceThemeClass(themeName);
		const themeVariant = produceThemeVariant(themeName);
		const isDefault = themeName === defaultTheme;

		const cssSelector = [
			`.${themeClassName}`,
			`[data-theme="${themeName}"]`,
			isDefault && ':root',
		]
			.filter(Boolean)
			.join(',');

		const flatColors = flattenColors(colors);
		// set the resolved.variants
		resolved.variants.push({
			name: themeVariant,
			// tailwind will generate only the first matched definition
			definition: [
				`.${themeClassName}&`,
				`:is(.${themeClassName} > &:not([data-theme]))`,
				`:is(.${themeClassName} &:not(.${themeClassName} [data-theme]:not(.${themeClassName}) * ))`,
				`:is(.${themeClassName}:not(:has([data-theme])) &:not([data-theme]))`, // See the browser support: https://caniuse.com/css-has
				`[data-theme='${themeName}']&`,
				`:is([data-theme='${themeName}'] > &:not([data-theme]))`,
				`:is([data-theme='${themeName}'] &:not([data-theme='${themeName}'] [data-theme]:not([data-theme='${themeName}']) * ))`,
				`:is([data-theme='${themeName}']:not(:has([data-theme])) &:not([data-theme]))`, // See the browser support: https://caniuse.com/css-has
				...(isDefault
					? [
						`:root&`,
						`:is(:root > &:not([data-theme]))`,
						`:is(:root &:not([data-theme] *):not([data-theme]))`,
					]
					: []),
			],
		});

		// set the color-scheme css property
		resolved.utilities[cssSelector] = colors[SCHEME] ? { 'color-scheme': colors[SCHEME] } : {};
		let originalColor: any


		forEach(flatColors, (colorValue, colorName) => {
			// this case was handled above
			if ((colorName as any) === SCHEME) return;
			const safeColorName = escapeChars(colorName, '/');

			let [h, s, l, defaultAlphaValue]: HslaArray = [0, 0, 0, 1];
			try {

				if (colorValue) {
					originalColor = colorValue.startsWith("var(") ? colorValue.replace("var(--", "").replace(")", "") : colorValue;

					if (!originalColors.hasOwnProperty(originalColor)) {

						originalColor = (colors[originalColor] as any)?.startsWith("var(") ? (colors[originalColor] as any).replace("var(--", "").replace(")", "") : originalColor
					}

					[h, s, l, defaultAlphaValue] = toHslaArray(((originalColors as any)[originalColor] as any));

				}

			} catch (error: any) {

			}

			resolvedTheme = resolveTheme(resolvedTheme, cssSelector, safeColorName, colorName, [h, s, l, defaultAlphaValue])

		});

		if (flatColors)
			variation = generateVariations(flatColors as any, "", "toColor")

		forEach(defaultColors, (value: any, name) => {
			// this case was handled above
			if ((name as any) === SCHEME) return;

			let [h, s, l, defaultAlphaValue]: HslaArray = [0, 0, 0, 1];

			const safeColorName = escapeChars(name, '/');

			[h, s, l, defaultAlphaValue] = toHslaArray(value);

			resolvedTheme = resolveTheme(resolvedTheme, cssSelector, safeColorName, name, [h, s, l, defaultAlphaValue])


		});


		forEach(variation, (valueObj: any, name: string) => {
			// this case was handled above
			if (typeof valueObj !== "string") {

				if ((name as any) === SCHEME) return;

				let [h, s, l, defaultAlphaValue]: HslaArray = [0, 0, 0, 1];

				for (const key in valueObj) {
					const safeColorName = escapeChars(`variation-@${name}-${key}`, '/');

					const colorRgb = valueObj[key]

					resolvedTheme = resolveVariantTheme(resolvedTheme, cssSelector, safeColorName, name, key, [colorRgb, defaultAlphaValue])
				}
			}


		});
	});


	return resolvedTheme;
};

const resolveVariantTheme = (resolved: any, cssSelector: any, safeColorName: any, colorName: any, key: any, [colorRgb, defaultAlphaValue]: any) => {
	const twcColorVariable = defaultProduceCssVariable(safeColorName);
	const twcOpacityVariable = `${defaultProduceCssVariable(safeColorName)}-opacity`;

	// add the css variable in "@layer utilities"
	resolved.utilities[cssSelector]![twcColorVariable] = `${colorRgb}`;

	// if an alpha value was provided in the color definition, store it in a css variable
	if (typeof defaultAlphaValue === 'number') {
		resolved.utilities[cssSelector]![twcOpacityVariable] = defaultAlphaValue.toFixed(2);
	}
	// set the dynamic color in tailwind config theme.colors
	resolved.colors[`variation-@${colorName}${key}`] = ({ opacityVariable, opacityValue }: any) => {
		// if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
		if (!isNaN(+opacityValue)) {
			return `rgb(var(${twcColorVariable}) / ${opacityValue})`;
		}
		// if no opacityValue was provided (=it is not parsable to a number)
		// the twcOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5))
		// should have the priority over the tw class based opacity(e.g. "bg-opacity-90")
		// This is how tailwind behaves as for v3.2.4
		if (opacityVariable) {
			return `rgb(var(${twcColorVariable}) / var(${twcOpacityVariable}, var(${opacityVariable})))`;
		}
		return `rgb(var(${twcColorVariable}) / var(${twcOpacityVariable}, 1))`;
	};

	return resolved
}

const resolveTheme = (resolved: any, cssSelector: any, safeColorName: any, colorName: any, [h, s, l, defaultAlphaValue]: any) => {
	const twcColorVariable = defaultProduceCssVariable(safeColorName);
	const twcOpacityVariable = `${defaultProduceCssVariable(safeColorName)}-opacity`;

	// add the css variable in "@layer utilities"
	resolved.utilities[cssSelector]![twcColorVariable] = `${h} ${s}% ${l}%`;

	// if an alpha value was provided in the color definition, store it in a css variable
	if (typeof defaultAlphaValue === 'number') {
		resolved.utilities[cssSelector]![twcOpacityVariable] = defaultAlphaValue.toFixed(2);
	}
	// set the dynamic color in tailwind config theme.colors
	resolved.colors[`@${colorName}`] = ({ opacityVariable, opacityValue }: any) => {
		// if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
		if (!isNaN(+opacityValue)) {
			return `hsl(var(${twcColorVariable}) / ${opacityValue})`;
		}
		// if no opacityValue was provided (=it is not parsable to a number)
		// the twcOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5))
		// should have the priority over the tw class based opacity(e.g. "bg-opacity-90")
		// This is how tailwind behaves as for v3.2.4
		if (opacityVariable) {
			return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, var(${opacityVariable})))`;
		}
		return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, 1))`;
	};

	return resolved
}

export const createThemes = <ThemeName extends string>(
	config: TwcConfig<ThemeName> = emptyConfig,
	options: TwcOptions<ThemeName> = {},
) => {
	const resolved = resolveTwcConfig(config, options);

	return plugin(
		({ addUtilities, addVariant }) => {
			// add the css variables to "@layer utilities"
			addUtilities(resolved.utilities);
			// add the theme as variant e.g. "theme-[name]:text-2xl"
			resolved.variants.forEach(({ name, definition }: any) => addVariant(name, definition));
		},
		// extend the colors config
		{
			theme: {
				extend: {
					// @ts-ignore tailwind types are broken
					colors: resolved.colors,
				},
			},
		},
	);
};

function escapeChars(str: string, ...chars: string[]) {
	let result = str;
	for (let char of chars) {
		const regexp = new RegExp(char, 'g');
		result = str.replace(regexp, '\\' + char).replace("@", "");
	}
	return result;
}

function flattenColors(colors: NestedColors) {
	const flatColorsWithDEFAULT: any = flatten(colors, {
		safe: true,
		delimiter: '-',
	});

	return Object.entries(flatColorsWithDEFAULT).reduce((acc, [key, value]: any) => {
		acc[key.replace(/\-DEFAULT$/, '')] = value;
		return acc;
	}, {} as FlatColors);
}

function toHslaArray(colorValue?: string) {
	return Color(colorValue).hsl().round(1).array() as HslaArray;
}

function defaultProduceCssVariable(themeName: string) {
	return `--${themeName}`;
}

function defaultProduceThemeClass(themeName: string) {
	return themeName;
}

function dark(colors: NestedColors): { [SCHEME]: 'dark' } & MaybeNested<string, string> {
	return {
		...colors,
		[SCHEME]: 'dark',
	};
}

function light(colors: NestedColors): { [SCHEME]: 'light' } & MaybeNested<string, string> {
	return {
		...colors,
		[SCHEME]: 'light',
	};
}




interface MaybeNested<K extends keyof any = string, V extends string = string> {
	[key: string]: V | MaybeNested<K, V>;
}

type NoInfer<T> = [T][T extends any ? 0 : never];

type HslaArray = [number, number, number, number | undefined];