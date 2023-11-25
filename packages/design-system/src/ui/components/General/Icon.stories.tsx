import { Icon, IIconProps } from "@/ui";
import { spacing } from "@adopets/tokens";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Meta } from "@storybook/react";

const iconNames = Object.keys(fas).map((name) =>
  name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
);
const sizeNames = Object.keys(spacing);

export default {
  title: "Components/General/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: iconNames,
      control: { type: "select" },
      defaultValue: "coffe",
    },
    size: {
      options: sizeNames,
      control: { type: "select" },
      defaultValue: "coffe",
    },
    fill: {
      control: { type: "color" },
      defaultValue: "#000000",
    },
  },
} as Meta<IIconProps>;

export const Types = (args: IIconProps) => {
  return (
    <div className="flex gap-3 w-full flex-wrap">
      <Icon {...args} />
      <Icon {...args} />
      <Icon {...args} />
      <Icon {...args} />
    </div>
  );
};
