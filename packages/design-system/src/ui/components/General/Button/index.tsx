import { Button as AntBtn, ButtonProps } from "antd";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../../lib/utils";
import { Icon } from "../Icon";
import "./style.css";
import { iconSideVariant, iconVariant, twButtonClass } from "./styles";

const iconVariantsCVA = cva("", {
  variants: iconVariant,
  defaultVariants: {
    iconSide: "left",
  },
});

const iconSideClass = cva("", {
  variants: iconSideVariant,
  defaultVariants: {
    iconSide: "left",
  },
});

export interface IButtonProps
  extends Omit<ButtonProps, "type" | "size" | "shape" | "disabled">,
  VariantProps<typeof twButtonClass>,
  VariantProps<typeof iconVariantsCVA> {
  asChild?: boolean;
  block?: boolean;
  loading?: boolean;
  danger?: boolean;
  ghost?: boolean;
  icon?: JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      type = "secondary",
      size = "default",
      asChild = false,
      danger,
      ghost,
      disabled,
      loading,
      children,
      icon,
      iconSide,
      shape,
      ...props
    },
    ref,
  ) => {
    const Comp = AntBtn;

    const iconColorDefault =
      type === "primary" || type === "link" ? "" : "text-@icon-primary";

    const iconDisabledVariantClass = disabled
      ? "text-@icon-primary-disabled"
      : iconColorDefault;

    const btnSizeClass = {
      large: children ? "" : "p-padding-s w-spacing-xxxl h-spacing-xxxl",
      default: children ? "" : "p-padding-xs w-spacing-xxl h-spacing-xxl",
      small: children ? "" : "p-padding-xxs w-spacing-xl h-spacing-xl",
    };

    return (
      <Comp
        data-loading={loading}
        data-disabled={disabled}
        ref={ref}
        disabled={disabled || loading}
        type={type === "link" ? "link" : "default"}
        className={cn(
          twButtonClass({
            type,
            size: children ? size : undefined,
            shape,
            loading,
            disabled,
          }),
          children ? "" : size ? btnSizeClass[size] : "",
          "leading-none",
          iconVariantsCVA({ iconSide }),
          className,
        )}
        {...props}
      >
        {(loading || icon) && (
          <div
            className={`inline w-spacing-s h-spacing-s  fill-inherit  ${iconDisabledVariantClass} ${(icon && children) || (loading && children)
              ? `${cn(iconSideClass({ iconSide: iconSide }))}`
              : " "
              } text-md leading-@normal `}
          >
            {loading ? (
              <Icon
                name="loader"
                fill="inherit"
                size="padding-s"
                className="animate-spin"
              />
            ) : (
              icon
            )}
          </div>
        )}
        {children && <span className="text-md text-inherit">{children}</span>}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, twButtonClass };

