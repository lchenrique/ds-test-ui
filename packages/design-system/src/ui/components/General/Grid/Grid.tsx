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

const GridCLassVariant = cva(["grid"], {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
      0: "grid-cols-none",
    },
    rows: {
      1: "grid-rows-1",
      2: "grid-rows-2",
      3: "grid-rows-3",
      4: "grid-rows-4",
      5: "grid-rows-5",
      6: "grid-rows-6",
      0: "grid-rows-none",
    },
    flow: {
      row: "grid-flow-row",
      col: "grid-flow-col",
      dense: "grid-flow-dense",
      "row-dense": "grid-flow-row-dense",
      "col-dense": "grid-flow-col-dense",
    },
    autoCols: {
      auto: "auto-cols-auto",
      min: "auto-cols-min",
      max: "auto-cols-max",
      fr: "auto-cols-fr",
    },
    autoRows: {
      auto: "auto-rows-auto",
      min: "auto-rows-min",
      max: "auto-rows-max",
      fr: "auto-rows-fr",
    },
    gap: {
      ...gapVariants,
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

export interface IGridProps
  extends VariantProps<typeof GridCLassVariant>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  gap?: keyof typeof gapValues;
  children?: ReactNode;
}

const GridBase = (
  {
    className,
    gap,
    align,
    justify,
    autoCols,
    autoRows,
    cols,
    flow,
    rows,
    ...props
  }: IGridProps,
  ref: any,
) => {
  return (
    <div
      ref={ref}
      className={cn(
        GridCLassVariant({
          gap,
          align,
          justify,
          autoCols,
          autoRows,
          cols,
          flow,
          rows,
        }),
        className,
      )}
      {...props}
    />
  );
};

export const Grid = forwardRef(GridBase);

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
