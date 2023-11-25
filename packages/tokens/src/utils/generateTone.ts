import tinycolor from "tinycolor2";
import { colors } from "../colors";


const colorShade = (col: any, amt: any) => {
    return tinycolor(col).lighten(amt)
}




export function getOriginalColor(theme: Record<string, string>, themeColors: Record<string, string>) {
    let originalColors: Record<string, string> = {}

    for (const key in theme) {
        if (theme.hasOwnProperty(key)) {
            const colorValue = theme[key];
            const originalColor = getOriginal(colorValue, theme);

            originalColors[key] = originalColor

        }
    }

    function getOriginal(colorValue: string, theme: any): string {
        const match = colorValue.match(/^var\(--(.+?)\)$/);

        if (match) {
            const variableName = match[1];
            if (themeColors.hasOwnProperty(variableName)) {
                return variableName
            }

            if (theme[variableName]) {
                return getOriginal(theme[variableName], theme) || "";
            }
        }

        return "";
    }


    return originalColors

}

export function generateVariations(names: Record<string, string>, prefix: string, convert: "toTailwindVariable" | "toColor") {
    const original = getOriginalColor(names, colors)

    const convertTo = {
        toTailwindVariable: (_: any, valueFormatted: string) => `rgb(var(--${valueFormatted}) / <alpha-value>)`,
        toColor: (tone: number, valueFormatted: string) => colorShade((colors as any)[valueFormatted], tone)
            .toRgbString().replace(/[^0-9,]+/g, "").replace(/,/g, " ")
    }

    for (const key in original) {

        const rangeTone = [40, 30, 25, 10, 0, -10, -20, -30, -37]

        if (original[key]) {
            let outputObject = {} as any;

            original[key] = convert === "toTailwindVariable" ? original[key].replace(/[0-9]/g, '') : original[key].replace(/[0-9]/, '3')
            if (convert)
                rangeTone.forEach((tone, index) => {
                    const indexKey = (index + 1) * 100

                    names[`${prefix}${key}--`] = Object.assign(outputObject,
                        {
                            [indexKey]: convertTo[convert](tone, convert === "toTailwindVariable"
                                ? `${key}-${indexKey}`
                                : original[key])
                        })

                })
        }
    }

    return names
}


