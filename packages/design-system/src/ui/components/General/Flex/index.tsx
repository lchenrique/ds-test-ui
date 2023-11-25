import { padding, spacing } from "@adopets/tokens";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
import { cn } from "../../../lib/utils";

const gapValues = { ...spacing, ...padding } as const;

const gapVariants = Object.keys(gapValues).reduce(
  (obj: Record<string, string>, key) => {
    obj[key] = `gap-${key}`;
    return obj;
  },
  {},
);

const FlexCLassVariant = cva(["flex items-center flex-nowrap"], {
  variants: {
    vertical: {
      true: "flex-col",
    },
    gap: {
      ...gapVariants,
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      reverse: "flex-wrap-reverse",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
  },
});

export interface IFlexProps
  extends VariantProps<typeof FlexCLassVariant>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  gap?: keyof typeof gapValues;
  children?: ReactNode;
  asChild?: boolean;
}

const FlexBase = (
  {
    className,
    gap,
    vertical,
    wrap,
    align,
    justify,
    asChild,
    ...props
  }: IFlexProps,
  ref: any,
) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        FlexCLassVariant({ gap, vertical, wrap, align, justify }),
        className,
      )}
      {...props}
    />
  );
};

export const Flex = forwardRef(FlexBase);

// Do not remove this comment

// gap-padding-none
// gap-padding-xxxs
// gap-padding-xxs
// gap-padding-xs
// gap-padding-s
// gap-padding-m
// gap-padding-l
// gap-padding-xl
// gap-padding-page
// gap-spacing-none
// gap-spacing-xxxs
// gap-spacing-xxs
// gap-spacing-xs
// gap-spacing-s
// gap-spacing-m
// gap-spacing-l
// gap-spacing-xl
// gap-spacing-xxl
// gap-spacing-xxxl
// gap-spacing-4xl
// gap-spacing-5xl
// gap-spacing-9xl
