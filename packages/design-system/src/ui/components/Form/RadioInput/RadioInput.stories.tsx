import {
  IRadioInputProps,
  Icon,
  RadioChangeEvent,
  RadioGroup,
  RadioInput,
} from "@/ui";
import { theme } from "@adopets/tokens";
import type { Meta } from "@storybook/react";

export default {
  title: "Components/Form/RadioInput",
  component: RadioInput,
  argTypes: {},
} as Meta<IRadioInputProps>;

export const RadioInputStory = {
  argTypes: {
    autoFocus: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioInput",
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioInput",
        defaultValue: { summary: false },
      },
    },
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioInput",
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioInput",
        defaultValue: { summary: false },
      },
    },
  },
  render: (args: IRadioInputProps) => {
    return (
      <div className="flex gap-3 w-full flex-wrap items-center">
        <RadioInput {...args}>Radio</RadioInput>
        <RadioInput autoFocus>AutoFocus</RadioInput>
        <RadioInput disabled={true}>Disabled</RadioInput>
        <RadioInput defaultChecked>DefaultChecked </RadioInput>

        <RadioInput
          suffix={
            <Icon
              name={["far", "circle-info"]}
              fill={theme.colors("icon-primary")}
              size="spacing-s"
            />
          }
          prefix={
            <Icon
              name={["far", "dog"]}
              fill={theme.colors("icon-primary")}
              size="spacing-s"
            />
          }
        >
          Checkbox
        </RadioInput>

        <RadioInput
          message={
            <span
              style={{
                fontSize: 14,
                lineHeight: "100%",
              }}
            >
              Mark if necessary
            </span>
          }
          suffix={
            <Icon
              name={["far", "circle-info"]}
              fill={theme.colors("icon-primary")}
              size="spacing-s"
            />
          }
          prefix={
            <Icon
              name={["far", "dog"]}
              fill={theme.colors("icon-primary")}
              size="spacing-s"
            />
          }
        >
          Checkbox
        </RadioInput>

        <RadioInput
          message={
            <span
              style={{
                fontSize: 14,
                lineHeight: "100%",
              }}
            >
              Mark if necessary
            </span>
          }
          prefix={
            <Icon
              name={["far", "dog"]}
              fill={theme.colors("icon-primary")}
              size="spacing-s"
            />
          }
        >
          Checkbox
        </RadioInput>

        <RadioInput
          message={
            <span
              style={{
                fontSize: 14,
                lineHeight: "100%",
              }}
            >
              Mark if necessary
            </span>
          }
        >
          Checkbox
        </RadioInput>
      </div>
    );
  },
};

const onChange = (checkedValues: RadioChangeEvent[]) => {
  console.log("checked = ", checkedValues);
};

const plainOptions = ["Apple", "Pear", "Orange"];

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false },
];

export const RadioGroupStory = {
  argTypes: {
    autoFocus: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioGroup",
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioGroup",
        defaultValue: { summary: false },
      },
    },
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioGroup",
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "RadioGroup",
        defaultValue: { summary: false },
      },
    },
  },
  render: (args: IRadioInputProps) => {
    return (
      <div className="flex gap-3 w-full flex-col">
        <RadioGroup options={plainOptions} defaultValue={"Apple"} />
        <br />
        <RadioGroup
          options={options}
          defaultValue={"Pear"}
          onChange={(e) => console.log(e)}
        />
        <br />

        <RadioGroup
          options={optionsWithDisabled}
          disabled
          defaultValue={"Apple"}
          onChange={(e) => console.log(e)}
        />
        <br />
        <RadioGroup style={{ width: "100%" }} onChange={(e) => console.log(e)}>
          <RadioInput value="A">A</RadioInput>
          <RadioInput value="B">B</RadioInput>
          <RadioInput value="C">C</RadioInput>
          <RadioInput value="D">D</RadioInput>
          <RadioInput value="E">E</RadioInput>
        </RadioGroup>
      </div>
    );
  },
};
