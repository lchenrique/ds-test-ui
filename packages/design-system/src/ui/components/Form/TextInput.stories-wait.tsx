import { TextInput, TextInputProps } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Form/TextInput",
  component: TextInput,
  args: {
    placeholder: "Enter your name",
    value: "$ 1,000.45",
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};
