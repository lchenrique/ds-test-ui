export const importCode = `#### First import Radio component:
~~~tsx
import { RadioInput, IAvatarProps } from "@/ui"`;

export const radioCode = `#### You can customize the component separately:
~~~tsx
<>
    <RadioInput {...args} >Radio</RadioInput>
    <RadioInput autoFocus >AutoFocus</RadioInput>
    <RadioInput disabled={true}>Disabled</RadioInput>
    <RadioInput defaultChecked>DefaultChecked </RadioInput>
</>`;

export const importGroupCode = `#### First import Radio component:
~~~tsx
import { RadioGroup, RadioInputOptionType } from "@/ui"`;

export const radioGroupCode = `#### Exemple:
~~~tsx
const onChange = (e) => {
    console.log('e = ', e);
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

<RadioGroup options={plainOptions} defaultValue={'Apple'} onChange={onChange} />

<RadioGroup options={options} defaultValue={'Pear'} onChange={onChange} />

<RadioGroup
    options={optionsWithDisabled}
    disabled
    defaultValue={'Apple'}
    onChange={onChange}
    />
    
<RadioGroup style={{ width: '100%' }} onChange={onChange}>
    <RadioInput value="A">A</RadioInput>
    <RadioInput value="B">B</RadioInput>
    <RadioInput value="C">C</RadioInput>
    <RadioInput value="D">D</RadioInput>
    <RadioInput value="E">E</RadioInput>
</RadioGroup>
`;
