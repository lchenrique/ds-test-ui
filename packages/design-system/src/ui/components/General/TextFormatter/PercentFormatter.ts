export const PercentFormatter = (number: number) => {
  const option = {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const formatter = new Intl.NumberFormat("en-US", option);
  const percent = formatter.format(number);

  return percent;
};
