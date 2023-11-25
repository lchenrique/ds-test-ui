import { IThemeColorsReturn, padding, spacing, theme } from "@adopets/tokens";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../../lib/utils";
import { Flex } from "../Flex";
import { twIconClass } from "./styles";

const sizeValues = { ...spacing, ...padding } as const;

const sizeVariants = Object.keys(sizeValues).reduce(
  (obj: Record<string, string>, key) => {
    obj[key] = `h-${key} w-${key}`;
    return obj;
  },
  {},
);

const IconCLassVariant = cva([""], {
  variants: {
    size: {
      ...sizeVariants,
    },
  },
});

export interface IIconProps extends VariantProps<typeof IconCLassVariant> {
  className?: string;
  name: IconProp;
  fill?: keyof IThemeColorsReturn | "inherit";
  size?: keyof typeof sizeValues;
}

const Icon = React.forwardRef<HTMLDivElement, IIconProps>(
  ({ className, fill, size = "spacing-s", name, ...props }, ref) => {
    const sizeValue = size ? sizeValues[size] : "1rem";

    const fillColor = fill
      ? fill !== "inherit"
        ? theme.colors(fill)
        : "inherit"
      : undefined;

    const iconStyle = {
      color: fillColor,
    };

    return (
      <Flex
        className={cn(IconCLassVariant({ size }), className)}
        justify="center"
        // style={iconStyle}
        style={iconStyle}
        {...props}
      >
        <FontAwesomeIcon
          icon={name}
          className="h-full  w-full"
          fontSize={sizeValue}
        />
      </Flex>
    );
  },
);

Icon.displayName = "Icon";

export { Icon, twIconClass };

// Do not remove this comment

// h-padding-none
// h-padding-xxxs
// h-padding-xxs
// h-padding-xs
// h-padding-s
// h-padding-m
// h-padding-l
// h-padding-xl
// h-padding-page
// h-spacing-none
// h-spacing-xxxs
// h-spacing-xxs
// h-spacing-xs
// h-spacing-s
// h-spacing-m
// h-spacing-l
// h-spacing-xl
// h-spacing-xxl
// h-spacing-xxxl
// h-spacing-4xl
// h-spacing-5xl
// h-spacing-9xl

// w-padding-none
// w-padding-xxxs
// w-padding-xxs
// w-padding-xs
// w-padding-s
// w-padding-m
// w-padding-l
// w-padding-xl
// w-padding-page
// w-spacing-none
// w-spacing-xxxs
// w-spacing-xxs
// w-spacing-xs
// w-spacing-s
// w-spacing-m
// w-spacing-l
// w-spacing-xl
// w-spacing-xxl
// w-spacing-xxxl
// w-spacing-4xl
// w-spacing-5xl
// w-spacing-9xl
