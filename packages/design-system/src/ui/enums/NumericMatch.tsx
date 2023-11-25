export interface INumerMatchConfig {
  "label[=]": string;
  "label[>]": string;
  "label[<]": string;
  "label[>=]": string;
  "label[<=]": string;
  "label[!=]": string;
}
export const NumericMatch = (config?: INumerMatchConfig) => [
  {
    label: config?.["label[=]"] || "equal",
    value: "=",
  },
  {
    label: config?.["label[>]"] || "greater than",
    value: ">",
  },
  {
    label: config?.["label[<]"] || "less than",
    value: "<",
  },
  {
    label: config?.["label[>=]"] || "greater than or equal",
    value: ">=",
  },
  {
    label: config?.["label[<=]"] || "less than or equal",
    value: "<=",
  },
  {
    label: config?.["label[!=]"] || "not equal",
    value: "not",
  },
];
