import { Form, MoneyInput, MoneyInputProps } from "@/ui";
import type { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "Components/Form/MoneyInput",
  component: MoneyInput,
  args: {
    placeholder: "Enter your money",
    defaultValue: 1000.45,
  },
} as Meta<MoneyInputProps>;

const Template: ComponentStory<typeof MoneyInput> = (args) => {
  return (
    <Form>
      <Form.Item name="search">
        <MoneyInput />
      </Form.Item>
    </Form>
  );
};

export const Default = Template.bind({});
// export const Default: StoryObj<MoneyInputProps> = {}
