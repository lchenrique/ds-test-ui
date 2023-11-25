const filterOptionsSearch = (input: string, option: any) => {
  return (
    option.label
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .indexOf(
        input
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""),
      ) >= 0
  );
};

export { filterOptionsSearch };
