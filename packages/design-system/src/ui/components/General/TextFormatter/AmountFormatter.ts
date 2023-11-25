export const AmountFormatter = (number: number, currency?: string) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
  });

  return formatter.format(number);
};
