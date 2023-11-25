export interface IConfigProps {
	'alerts-alert-dark': string
	'alerts-alert-light': string
	'alerts-informative-dark': string
	'alerts-informative-light': string
	'alerts-positive-dark': string
	'alerts-positive-light': string
	'alerts-warning-dark': string
	'alerts-warning-light': string
	'brand-axuliary': string
	'brand-primary': string
	'brand-logo-inverse': string
	'brand-logo-primary': string
	'icon-error-dark': string
	'icon-error-light': string
	'icon-informative-dark': string
	'icon-informative-light': string
	'icon-inverted': string
	'icon-neutral': string
	'icon-primary': string
	'icon-primary-disabled': string
	'icon-secondary-disabled': string
	'icon-success-dark': string
	'icon-success-light': string
	'icon-warning-dark': string
	'icon-warning-light': string
	'stroke-brand-primary': string
	'stroke-brand-secondary': string
	'stroke-disabled': string
	'stroke-error-dark': string
	'stroke-error-light': string
	'stroke-focused': string
	'stroke-informative-dark': string
	'stroke-informative-light': string
	'stroke-light': string
	'stroke-success-dark': string
	'stroke-success-light': string
	'stroke-warning-dark': string
	'stroke-warning-light': string
	'surface-auxiliary': string
	'surface-disabled-dark': string
	'surface-disabled-light': string
	'surface-error-dark': string
	'surface-error-light': string
	'surface-informative-dark': string
	'surface-informative-light': string
	'surface-light': string
	'surface-overlay': string,
	'surface-primary': string
	'surface-success-dark': string
	'surface-success-light': string
	'surface-warning-dark': string
	'surface-warning-light': string
	'text-brand-primary': string
	'text-brand-secondary': string
	'text-disabled-primary': string
	'text-disabled-secondary': string
	'text-error-dark': string
	'text-error-light': string
	'text-informative-dark': string
	'text-informative-light': string
	'text-light': string
	'text-link': string
	'text-plain': string
	'text-success-dark': string
	'text-success-light': string
	'text-warning-dark': string
	'text-warning-light': string
	'text-white': string
}


export type Concat<T extends string[]> = T["length"] extends 1
	? T[0]
	: T["length"] extends 2
	? `${T[0]}${T[1]}`
	: T["length"] extends 3
	? `${T[0]}${T[1]}${T[2]}`
	: T["length"] extends 4
	? `${T[0]}${T[1]}${T[2]}${T[3]}`
	: T["length"] extends 5
	? `${T[0]}${T[1]}${T[2]}${T[3]}${T[4]}`
	: never;