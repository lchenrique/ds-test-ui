import { padding, spacing } from "@adopets/tokens";
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

const ColCLassVariant = cva([""], {
  variants: {
    colSpan: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
      full: "col-span-full",
    },
    rowSpan: {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
      4: "row-span-4",
      5: "row-span-5",
      6: "row-span-6",
      full: "row-span-full",
    },
    gap: {
      ...gapVariants,
    },
  },
});

export interface IColProps
  extends VariantProps<typeof ColCLassVariant>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  gap?: keyof typeof gapValues;
  children?: ReactNode;
}

const ColBase = (
  { className, gap, colSpan, rowSpan, ...props }: IColProps,
  ref: any,
) => {
  return (
    <div
      ref={ref}
      className={cn(ColCLassVariant({ gap, colSpan, rowSpan }), className)}
      {...props}
    />
  );
};

export const Col = forwardRef(ColBase);

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
