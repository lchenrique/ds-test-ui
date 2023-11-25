export const CPFFormatter = (number: string) => {
  let formattedPhone;
  if (number) {
    formattedPhone =
      number.substring(0, 3) +
      "." +
      number.substring(3, 6) +
      "." +
      number.substring(6, 9) +
      "-" +
      number.substring(9, 11);
  }

  return formattedPhone;
};
