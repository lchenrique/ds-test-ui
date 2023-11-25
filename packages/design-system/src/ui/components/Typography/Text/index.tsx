import { IThemeColorsReturn, fontSizes, theme } from "@adopets/tokens";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

type PickIntrinsicElements = Pick<
  JSX.IntrinsicElements,
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "pre"
  | "span"
  | "strong"
>;

export type ITextProps<K extends keyof PickIntrinsicElements> = Partial<
  PickIntrinsicElements[K]
> & {
  as?: K;
  size?: keyof typeof fontSizes;
  color?: keyof IThemeColorsReturn | "inherit";
  asChild?: boolean;
};

export function Text<K extends keyof PickIntrinsicElements>({
  as,
  children,
  className,
  color,
  size,
  asChild,
  ...props
}: ITextProps<K>) {
  const As = asChild ? Slot : as || "span";
  const textColor = color
    ? color !== "inherit"
      ? theme.colors(color)
      : "inherit"
    : undefined;
  const textSize = size ? fontSizes[size] : undefined;

  return (
    <As
      className={cn(
        "",
        !textColor ? "text-@text-light" : "",
        !textSize ? "text-md" : "",
        className,
      )}
      style={{
        color: textColor,
        fontSize: textSize,
      }}
      {...(props as any)}
    >
      {children}
    </As>
  );
}
