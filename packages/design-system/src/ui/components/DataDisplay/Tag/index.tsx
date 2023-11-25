import { Tag as AntTag, TagProps } from "antd";
import React from "react";
import { cn } from "../../../lib/utils";

// import { Container } from './styles';

const Tag: React.FC<TagProps> = ({ className, ...props }) => {
  return (
    <AntTag
      {...props}
      className={cn(
        [
          "px-padding-xxs py-padding-xxxs text-base",
          "bg-@surface-disabled-light",
          "border-transparent",
          "rounded-border-radius-s",
          "text-@text-light",
          "[&>.ado-tag-close-icon]:text-@text-light",
          "hover:[&>.ado-tag-close-icon]:text-variation-@text-light--700",
        ],
        className,
      )}
    />
  );
};

export { Tag };
