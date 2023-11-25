import { cva } from "class-variance-authority";

const disabledVariant = {
  primary: [
    "bg-@surface-disabled-dark",
    "border-@stroke-disabled",
    "text-@text-disabled-primary",
  ],
  tertiary: [
    "bg-@surface-disabled-dark/10",
    "text-@text-disabled-primary",
    "border-@stroke-disabled/30",
  ],
  secondary: [
    "bg-variation-@surface-disabled-dark--300",
    "text-@text-disabled-secondary",
    "border-@stroke-disabled",
  ],
  link: ["bg-transparent", "text-@text-disabled-secondary"],
};

export const iconVariant = {
  iconSide: {
    left: "flex-row",
    right: "flex-row-reverse",
  },
};

export const iconSideVariant = {
  iconSide: {
    left: "mr-spacing-xxs",
    right: "ml-spacing-xxs",
  },
};

const surfaceColor = {
  surfaceText: "surface-primary",
  dangerText: "surface-error-dark",
};

const Variants = {
  0: {
    secondary: "btn-secondary",
    primary: "btn-primary",
    tertiary: [
      "border-@surface-primary/10",
      "bg-@surface-primary/10",
      "text-@surface-primary",
      '[&:not([data-loading="true"])&:not([data-disabled="true"])]:hover:border-@surface-primary',
      '[&:not([data-loading="true"])&:not([data-disabled="true"])]:hover:text-@surface-primary',
    ],
    link: [
      "text-@surface-primary",
      '[&:not([data-loading="true"])&:not([data-disabled="true"])]:hover:text-@surface-hover',
      '[&:not([data-loading="true"])&:not([data-disabled="true"])]:hover:[&>svg]:fill-@surface-hover',
    ],
  },
};

export const variants = {
  type: {
    secondary: Variants[0].secondary,
    primary: Variants[0].primary,
    tertiary: Variants[0].tertiary,
    link: Variants[0].link,
  },
  size: {
    default: "btn-size-medium",
    small: "btn-size-small",
    large: "btn-size-large",
  },
  shape: {
    round: ["rounded-border-radius-l"],
    circle: ["rounded-full"],
    default: ["rounded-border-radius-s"],
  },

  disabled: {
    true: "",
  },

  loading: {
    true: "",
  },
};

export const twButtonClass = cva(
  [
    "flex",
    "border",
    "items-center",
    "justify-center",
    "transition-all",
    "text-base",
    "font-medium",
    "whitespace-nowrap",
  ],
  {
    variants,
    compoundVariants: [
      // Loading
      {
        loading: true,
        className: "opacity-70",
      },

      // DISABLED
      {
        disabled: true,
        className: "cursor-not-allowed",
      },
      {
        disabled: true,
        type: "secondary",
        className: disabledVariant.secondary,
      },
      {
        disabled: true,
        type: "primary",
        className: disabledVariant.primary,
      },
      {
        disabled: true,
        type: "tertiary",
        className: disabledVariant.tertiary,
      },

      {
        disabled: true,
        type: "link",
        className: disabledVariant.link,
      },
    ],
    defaultVariants: {
      type: "secondary",
      shape: "default",
    },
  },
);
