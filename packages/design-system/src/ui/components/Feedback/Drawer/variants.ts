import { cva } from "class-variance-authority"

export const closeBtnVariant = {
	placement: {
		top: '-bottom-[40px] right-0 mt-spacing-s',
		right: '-left-[50px] mr-spacing-s  top-1/2 -translate-y-1/2',
		left: '-right-[50px] ml-spacing-s  top-1/2 -translate-y-1/2',
		bottom: '-top-[40px] right-0 mb-spacing-s ',
	},
}

export const closeBtnVariantCVA = cva('', {
	variants: closeBtnVariant,
})