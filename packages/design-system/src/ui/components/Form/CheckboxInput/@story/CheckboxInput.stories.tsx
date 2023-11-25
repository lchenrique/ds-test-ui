import { CheckboxGroup, CheckboxInput, ICheckboxInputProps, Icon } from "@/ui";
import type { Meta } from "@storybook/react";
import { CheckboxValueType } from "antd/es/checkbox/Group";

export default {
  title: "Components/Form/CheckboxInput",
  component: CheckboxInput,
  argTypes: {},
} as Meta<ICheckboxInputProps>;

export const CheckboxInputStory = {
  argTypes: {
    autoFocus: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: { summary: false },
      },
    },
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: { summary: false },
      },
    },
  },
  render: (args: ICheckboxInputProps) => {
    return (
      <div className="flex gap-3 w-full flex-wrap items-center">
        <CheckboxInput {...args}>Checkbox</CheckboxInput>
        <CheckboxInput autoFocus>AutoFocus</CheckboxInput>
        <CheckboxInput disabled={true}>Disabled</CheckboxInput>
        <CheckboxInput disabled={true} checked={true} defaultChecked>
          Disabled
        </CheckboxInput>
        <CheckboxInput indeterminate>Indeterminate </CheckboxInput>
        <CheckboxInput defaultChecked>DefaultChecked </CheckboxInput>

        <CheckboxInput
          suffix={
            <Icon
              name={["far", "circle-info"]}
              fill={"icon-primary"}
              size="spacing-s"
            />
          }
          prefix={
            <Icon
              name={["far", "dog"]}
              fill={"icon-primary"}
              size="spacing-s"
            />
          }
        >
          Checkbox
        </CheckboxInput>

        <CheckboxInput
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
              fill={"icon-primary"}
              size="spacing-s"
            />
          }
          prefix={
            <Icon
              name={["far", "dog"]}
              fill={"icon-primary"}
              size="spacing-s"
            />
          }
        >
          Checkbox
        </CheckboxInput>

        <CheckboxInput
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
              fill={"icon-primary"}
              size="spacing-s"
            />
          }
        >
          Checkbox
        </CheckboxInput>

        <CheckboxInput
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
        </CheckboxInput>
      </div>
    );
  },
};

const onChange = (checkedValues: Array<CheckboxValueType>) => {
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

export const CheckboxGroupStory = {
  argTypes: {
    autoFocus: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: { summary: false },
      },
    },
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: { summary: false },
      },
    },
  },
  render: (args: ICheckboxInputProps) => {
    return (
      <div className="flex gap-3 w-full flex-col">
        <CheckboxGroup
          options={plainOptions}
          defaultValue={["Apple"]}
          onChange={onChange}
        />
        <br />
        <CheckboxGroup
          options={options}
          defaultValue={["Pear"]}
          onChange={onChange}
        />
        <br />

        <CheckboxGroup
          options={optionsWithDisabled}
          disabled
          defaultValue={["Apple"]}
          onChange={onChange}
        />
        <br />
        <CheckboxGroup style={{ width: "100%" }} onChange={onChange}>
          <CheckboxInput value="A">A</CheckboxInput>
          <CheckboxInput value="B">B</CheckboxInput>
          <CheckboxInput value="C">C</CheckboxInput>
          <CheckboxInput value="D">D</CheckboxInput>
          <CheckboxInput value="E">E</CheckboxInput>
        </CheckboxGroup>
      </div>
    );
  },
};
