import { cva } from "class-variance-authority";

export const variants = {
  shape: {
    circle: "rounded-full",
    square: "rounded-md",
  },
  size: {
    default: "ado-avatar-size-md",
    small: "ado-avatar-size-sm",
    xSmall: "ado-avatar-size-xs",
    large: "ado-avatar-size-lg",
    xLarge: "ado-avatar-size-xlg",
  },
  disabled: {
    true: "grayscale brightness-90",
  },
};

export const variantsText = {
  text: {
    default: "text-base",
    small: "text-sm",
    xSmall: "text-xs",
    large: "text-xl",
    xLarge: "text-xl",
  },
  disabled: {
    true: "text-@text-disabled-secondary",
  },
};

export const loaderOptionsCss = {
  size: {
    default: "ado-avatar-size-md",
    small: "ado-avatar-size-sm",
    xSmall: "ado-avatar-size-xs",
    large: "ado-avatar-size-lg",
    xLarge: "ado-avatar-size-xlg",
  },
  shape: {
    circle: "rounded-full",
    square: "rounded-md",
  },
};

export const flexRow = {
  left: "flex-row-reverse",
  right: "flex-row",
};

export const flexSide = {
  left: "items-end",
  right: "items-start",
};

export const textVariant = cva("text-@text-light font-@medium", {
  variants: variantsText,
  defaultVariants: { text: "default" },
});
export const twDefault = "ado-avatar object-cover";
export const avatarVariants = cva(twDefault, {
  variants,
  defaultVariants: { size: "default" },
});
export const loaderVariants = cva("relative block  text-center", {
  variants: loaderOptionsCss,
  defaultVariants: { size: "default" },
});
