import { cva } from "class-variance-authority";

export const pagesClassNameVariant = cva(
  [
    "flex",
    "rounded-border-radius-pill",
    "items-center",
    "justify-center",
    "bg-@surface-auxiliary",
    "h-padding-l",
    "w-padding-l",
    "text-@surface-primary",
    "cursor-pointer",
    "sele",
    "font-@medium",
    "text-md",
  ],
  {
    variants: {
      active: {
        true: ["bg-@surface-primary text-@text-white"],
      },
      disabled: {
        true: [
          "bg-@surface-disabled-light",
          "text-@text-disabled-primary",
          "cursor-not-allowed",
        ],
      },
    },
  },
);
