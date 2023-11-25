import {
  DatePickerInput,
  Flex,
  Form,
  IAdvancedFilterProps,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TSearchFilter,
  Text,
  uuid,
} from "@/ui";

const dogBreeds = [
  { label: "Other", value: "other" },
  { label: "Bulldog", value: "bulldog" },
  { label: "Beagle", value: "beagle" },
  { label: "Yorkshire Terrier", value: "yorkshire terrier" },
  {
    label: "Cavalier King Charles Spaniel",
    value: "cavalier king charles spaniel",
  },
  { label: "English Springer Spaniel", value: "english springer spaniel" },
  { label: "Bullmastiff", value: "bullmastiff" },
  { label: "English Cocker Spaniel", value: "english cocker spaniel" },
  { label: "Airedale Terrier", value: "airedale terrier" },
  // Adicionar mais raças de cachorro conforme desejado
];

const sex = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const AllPetsFilter: IAdvancedFilterProps["filters"] = [
  {
    title: "Breed",
    name: "breed",
    component: (
      <Select
        labelInValue={false}
        allowClear
        className="w-full"
        options={dogBreeds}
      />
    ),
  },
  {
    title: "Birthday",
    name: "birthday",
    component: <DatePickerInput format={"MM-DD-YYYY"} className="w-full" />,
    normalize: (value) => {
      return {
        label: value.format("MM-DD-YYYY"),
        value: value.toISOString(),
      };
    },
  },
  {
    title: "Sex",
    name: "sex",
    component: <RadioGroup className="w-full" options={sex} />,
    normalize: (radio) => {
      return {
        label: sex.find((v) => v.value === radio)?.label,
        value: radio,
      };
    },
  },
];

export const AllPetsFilterInline: IAdvancedFilterProps["filters"] = [
  {
    title: "Breed",
    name: "breed",
    component: (name, normalize) => {
      return (
        <Flex className="gap-2 col-start-auto flex-2">
          <Form.Item name={name} normalize={normalize} noStyle>
            <Switch />
          </Form.Item>{" "}
          <Text className="whitespace-nowrap">Test</Text>
        </Flex>
      );
    },
    normalize: (isTrue) => {
      return {
        label: isTrue && "Test",
        value: isTrue ?? undefined,
      };
    },
  },
  {
    title: "Sex",
    name: "sex",
    component: (name, normalize) => {
      return (
        <Form.Item name={name} normalize={normalize} noStyle>
          <Radio.Group size="large" className="flex">
            {sex?.map((radio) => {
              return (
                <Radio.Button
                  key={uuid()}
                  name="all"
                  className=" text-center whitespace-nowrap"
                  value={radio.value}
                >
                  {radio.label}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </Form.Item>
      );
    },
    normalize: (radio) => {
      return {
        label: sex.find((v) => v.value === radio)?.label || "",
        value: radio,
      };
    },
  },
];

export const SearchFilter: TSearchFilter = {
  name: "search",
  placeholder: "teset",
  normalize: (value: any) => {
    return {
      label: "name / code",
      value: {
        or: {
          name: {
            ilike: `%${value}%`,
          },
          custom_code: {
            ilike: `%${value}%`,
          },
        },
      },
    };
  },
};
