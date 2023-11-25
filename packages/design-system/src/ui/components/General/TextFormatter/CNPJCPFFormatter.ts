export const CNPJCPFFormatter = (number: string) => {
  if (number?.length <= 11 && number?.length > 5) {
    return (
      number.substring(0, 3) +
      "." +
      number.substring(3, 6) +
      "." +
      number.substring(6, 9) +
      "-" +
      number.substring(9, 11)
    );
  } else if (number?.length > 11 && number?.length <= 14) {
    return (
      number?.substring(0, 2) +
      "." +
      number?.substring(2, 5) +
      "." +
      number?.substring(5, 8) +
      "/" +
      number?.substring(8, 12) +
      "-" +
      number?.substring(12, 14)
    );
  }

  return number;
};
