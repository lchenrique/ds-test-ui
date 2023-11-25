import { Button, IButtonProps, Icon } from "@/ui";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { Meta } from "@storybook/react";
import { useEffect, useState } from "react";

const iconNames = Object.keys(fas)
  .sort((a: any, b: any): any => {
    if (a < b) return -1;
    if (a > b) return 1;
  })
  .map((name) => name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
export default {
  title: "Components/General/Button",
  component: Button,
  args: {
    iconName: "dog",
    type: "secondary",
    text: "Label",
    size: "default",
    shape: "default",
    showIcon: true,
    iconSide: "left",
  },
  argTypes: {
    iconName: {
      options: iconNames,
      control: { type: "select" },
      defaultValue: "dog",
    },
    type: {
      options: ["primary", "secondary", "link", "tertiary"],
      control: "inline-radio",
      defaultValue: "secondary",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      options: ["default", "small", "large"],
      control: "inline-radio",
      defaultValue: "default",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    shape: {
      options: ["default", "round", "circle"],
      control: "inline-radio",
      defaultValue: "default",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    loading: {
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    showIcon: {
      control: "boolean",
      if: { arg: "size", neq: "icon" },
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    iconSide: {
      options: ["left", "right"],
      control: "inline-radio",
      defaultValue: "left",
      if: { arg: "showIcon" },
      table: {
        leftValue: { summary: "left" },
      },
    },
  },
} as Meta<IButtonProps>;

export const ButtonStory = (
  args: IButtonProps & { showIcon: boolean; iconName: any; text?: string },
) => {
  const { showIcon, type, iconName, ...rest } = args;
  const [size, setSize] = useState<any>("default");

  useEffect(() => {
    setSize(args.size);
    return () => {};
  }, [args.size]);

  const icon: any =
    showIcon === undefined ? (
      <Icon name={iconName} size="padding-s" />
    ) : (
      showIcon && <Icon name={iconName} size="padding-s" />
    );

  console.log("iconName", iconName);
  return (
    <>
      <div className="flex gap-3 flex-wrap p-3">
        <Button
          size={size}
          loading={args.loading}
          icon={icon}
          type={type}
          {...rest}
        >
          {args?.text}
        </Button>
      </div>
      <div className="flex gap-3 flex-wrap p-3">
        <Button
          size={size}
          loading={args.loading}
          icon={<Icon name={iconName} size="padding-s" />}
          type={type}
          {...rest}
        />
      </div>
    </>
  );
};
