export const CNPJFormatter = (number: string) => {
  if (number) {
    let formattedCNPJ =
      number?.substring(0, 2) +
      "." +
      number?.substring(2, 5) +
      "." +
      number?.substring(5, 8) +
      "/" +
      number?.substring(8, 12) +
      "-" +
      number?.substring(12, 14);
    return formattedCNPJ;
  } else return null;
};
