import { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider, Wrapper } from "../src/ui";
import "../src/ui/global.css";

const preview: Preview = {
  args: {
    theme: "adopets",
  },
  argTypes: {
    theme: {
      options: ["adopets", "pet-loyalty"],
      control: "select",
    },
  },
  decorators: [
    (Story, t) => {
      return (
        <ThemeProvider initialTheme="light">
          <Wrapper theme={t.args?.theme}>
            <Story />
          </Wrapper>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
