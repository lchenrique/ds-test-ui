import { PercentInput, PercentInputProps } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Form/PercentInput",
  component: PercentInput,
  args: {
    defaultValue: 1000.45,
  },
} as Meta<PercentInputProps>;

export const Default: StoryObj<PercentInputProps> = {};
