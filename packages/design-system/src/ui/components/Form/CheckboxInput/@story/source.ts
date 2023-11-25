export const importCode = `#### First import Checkbox component:
~~~tsx
import { CheckboxInput, IAvatarProps } from "@/ui"`;

export const checkboxCode = `#### You can customize the component separately:
~~~tsx
<>
    <CheckboxInput {...args} >Checkbox</CheckboxInput>
    <CheckboxInput autoFocus >AutoFocus</CheckboxInput>
    <CheckboxInput disabled={true}>Disabled</CheckboxInput>
    <CheckboxInput indeterminate>Indeterminate </CheckboxInput>
    <CheckboxInput defaultChecked>DefaultChecked </CheckboxInput>
</>`;

export const importGroupCode = `#### First import Checkbox component:
~~~tsx
import { CheckboxGroup, CheckboxInputOptionType } from "@/ui"`;

export const checkboxGroupCode = `#### Exemple:
~~~tsx
const onChange = (checkedValues: CheckboxInputOptionType[]) => {
    console.log('checked = ', checkedValues);
};

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];

<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />

<CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />

<CheckboxGroup
    options={optionsWithDisabled}
    disabled
    defaultValue={['Apple']}
    onChange={onChange}
    />
    
<CheckboxGroup style={{ width: '100%' }} onChange={onChange}>
    <CheckboxInput value="A">A</CheckboxInput>
    <CheckboxInput value="B">B</CheckboxInput>
    <CheckboxInput value="C">C</CheckboxInput>
    <CheckboxInput value="D">D</CheckboxInput>
    <CheckboxInput value="E">E</CheckboxInput>
</CheckboxGroup>
`;
