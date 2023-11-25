import { DataSourceItemObject } from "antd/lib/auto-complete";
import * as React from "react";
import { DATE_FORMAT } from "../../../config/default";
import { IDynamicDataColumnFilter } from "../../../interfaces";
import { AmountFormatter, CNPJFormatter, CPFFormatter } from "../../General";

export const IlikeFilter = (
  _label: React.ReactElement,
  _primary = false,
): IDynamicDataColumnFilter => {
  return (
    _label && {
      type: "text",
      label: _label,
      primary: _primary,
      handle: (_value) => {
        return ["ilike", _value];
      },
    }
  );
};
export const SimpleFilter = (
  _label: React.ReactElement,
  _primary = false,
  format: "text" | "number",
): IDynamicDataColumnFilter => {
  return (
    _label && {
      type: "text",
      label: _label,
      primary: _primary,
      handle: (_value) => {
        return format === "number" ? Number(_value) : _value;
      },
    }
  );
};

export const IlikeFilterCPFCNPJ = (
  _label: React.ReactElement,
  _primary = false,
): IDynamicDataColumnFilter => {
  return (
    _label && {
      type: "cpf_cnpj",
      label: _label,
      primary: _primary,
      handle: (_value) => {
        return ["ilike", _value];
      },
      displayHandle: (v: string) => {
        if (v.length <= 11) {
          return CPFFormatter(String(v));
        } else {
          return CNPJFormatter(String(v));
        }
      },
    }
  );
};
export const IlikeFilterCPF = (
  _label: React.ReactElement,
  _primary = false,
): IDynamicDataColumnFilter => {
  return (
    _label && {
      type: "cpf",
      label: _label,
      primary: _primary,
      handle: (_value) => {
        return ["ilike", _value];
      },
      displayHandle: (v) => CPFFormatter(String(v)),
    }
  );
};
export const IlikeFilterCNPJ = (
  _label: React.ReactElement,
  _primary = false,
): IDynamicDataColumnFilter => {
  return (
    _label && {
      type: "cnpj",
      label: _label,
      primary: _primary,
      handle: (_value) => {
        return ["ilike", _value];
      },
      displayHandle: (v) => CNPJFormatter(String(v)),
    }
  );
};

export const CustomRequestDropdownFilter = (
  _label: React.ReactElement,
  loadMethod: (search: string) => Promise<any[]>,
  handle: (v: any) => any,
  itemText: string = "name",
  itemValue: string = "uuid",
  _primary = false,
): IDynamicDataColumnFilter => {
  const options = RequestDropdownFilter(
    _label,
    loadMethod,
    itemText,
    itemValue,
    _primary,
  );
  options.handle = handle;
  return options;
};

export const RequestDropdownFilter = (
  _label: React.ReactElement,
  loadMethod: (search: string) => Promise<any[]>,
  itemText: string = "name",
  itemValue: string = "uuid",
  _primary = false,
): IDynamicDataColumnFilter => {
  return {
    type: "select",
    label: _label,
    primary: _primary,
    displayHandle: (v) => v.name,
    handle: (v) => v.value,
    getListOptions: async (search) => {
      const list = await loadMethod(search);
      return list.map((v) => {
        return {
          text: v[itemText],
          value: v[itemValue],
        };
      }) as DataSourceItemObject[];
    },
  };
};

export const DropdownFilter = (
  _label: React.ReactElement,
  data: DataSourceItemObject[],
  _primary = false,
): IDynamicDataColumnFilter => {
  return {
    type: "select",
    label: _label,
    primary: _primary,
    displayHandle: (v) => v.name,
    handle: (v) => v.value,
    getListOptions: async (search) => {
      return data;
    },
  };
};

export const NumberFilter = (
  _label: React.ReactElement,
  primary = false,
  wrapper = undefined,
): IDynamicDataColumnFilter => {
  return {
    type: "number",
    label: _label,
    primary,
    wrapper,
    handle: (v) => {
      return v.match === "="
        ? parseFloat(v.value)
        : [v.match, parseFloat(v.value ?? 0)];
    },
    displayHandle: (v) => `${v.match} ${v.value}`,
  };
};

export const MoneyFilter = (
  _label: React.ReactElement,
  primary = false,
  wrapper = undefined,
): IDynamicDataColumnFilter => {
  return {
    type: "money",
    label: _label,
    primary,
    wrapper,
    handle: (v) => {
      return v.match === "="
        ? parseFloat(v.value)
        : [v.match, parseFloat(v.value)];
    },
    displayHandle: (v) => (
      <>
        {v.match} {AmountFormatter(v.value)}{" "}
      </>
    ),
  };
};

export const DateFilter = (
  _label: React.ReactElement,
  _primary = false,
  or_group?: string,
): IDynamicDataColumnFilter => {
  return {
    type: "date",
    label: _label,
    primary: _primary,
    handle: (v) => {
      return ["between", v[0].toISOString(), v[1].toISOString()];
    },
    displayHandle: (v) => {
      return `${v[0]?.format(DATE_FORMAT)} - ${v[1]?.format(DATE_FORMAT)}`;
    },
  };
};

export const CountWrapper = (v: any) => `count(${v})`;
export const SumWrapper = (v: any) => `sum(${v})`;
