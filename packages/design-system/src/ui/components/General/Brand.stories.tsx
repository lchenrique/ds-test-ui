import { Brand, IBrandProps } from "@/ui";
import type { Meta } from "@storybook/react";

export default {
  title: "Components/General/Brand",
  component: Brand,
} as Meta<IBrandProps>;

export const BrandStrory = {
  args: {
    variant: "logo",
  },

  argTypes: {
    variant: {
      options: ["logo", "icon"],
      control: "select",
    },
    logo: {
      options: ["adopets", "pet-loyalty", "shelter-buddy", null],
      control: "select",
    },
  },

  render: (args: IBrandProps) => {
    return (
      <>
        <Brand {...args} />
      </>
    );
  },
};
