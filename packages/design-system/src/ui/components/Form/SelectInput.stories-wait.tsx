import { ISelectInputProps, SelectInput } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Form/SelectInput",
  component: SelectInput,
  args: {
    placeholder: "Select your option",
    options: [
      { label: "Option 0", value: "0" },
      { label: "Option 1", value: "2" },
      { label: "Option 3", value: "4" },
      { label: "Option 5", value: "6" },
    ],
  },
} as Meta<ISelectInputProps>;

export const Default: StoryObj<ISelectInputProps> = {};
