import { Box } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/DataDisplay/Box",
  component: Box,
  args: {
    children: "Eu sou um Card",
  },
} as Meta<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

export const Default: StoryObj<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = {};
