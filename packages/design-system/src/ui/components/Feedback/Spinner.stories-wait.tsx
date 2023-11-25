import { Spinner, SpinnerProps } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  args: {
    children: "Eu sou um Spinner",
    isLoading: true,
  },
} as Meta<SpinnerProps>;

export const Default: StoryObj<SpinnerProps> = {};
