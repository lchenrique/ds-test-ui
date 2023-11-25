export const PhoneFormatter = (number: string) => {
  if (number) {
    let length = number?.length;
    let formattedPhone;
    if (length <= 10) {
      formattedPhone =
        "(" +
        number.substring(0, 2) +
        ") " +
        number.substring(2, 6) +
        "-" +
        number.substring(6, 10);
    } else if (length <= 11) {
      formattedPhone =
        "(" +
        number.substring(0, 2) +
        ") " +
        number.substring(2, 7) +
        "-" +
        number.substring(7, 11);
    }
    return formattedPhone;
  }
};
