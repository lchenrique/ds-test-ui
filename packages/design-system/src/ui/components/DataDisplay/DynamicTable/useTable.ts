import { create } from "zustand";

interface BearState {
  keys: { [x: string]: any };
  filters: { [x: string]: any[] };
  setFilter: (id: any, value: any) => void;
  options: { [x: string]: any[] };
  setOptions: (id: any, options: any[]) => void;
  setDefaultOption: (id: any, value: string) => void;
  defaultOption: { [x: string]: string };
  setKeys: (id: any, keys: any) => void;
  setActive: (id: any, active: any) => void;
  active: { [x: string]: any };
  setLoading: (id: any, loading: any) => void;
  isLoading: { [x: string]: any };
}

export const tableIds: string[] = [];
function getUniqueListBy(arr: any[], key: any) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export const useDynamicTable = create<BearState>((set, get) => {
  return {
    filters: {},
    options: {},
    defaultOption: {},
    keys: {},
    active: {},
    isLoading: {},
    setFilter: (id, value) => {
      return set((state) => ({
        filters: {
          ...state.filters,
          [id]: { ...state?.filters[id], ...value },
        },
      }));
    },
    setOptions: (id, options) => {
      if (!tableIds.includes(id)) {
        tableIds.push(id);
      }

      return set((state) => {
        const uniqueArray = getUniqueListBy(
          state.options[id]?.length > 0
            ? [...state.options[id], ...options]
            : [...options],
          "name",
        );

        return {
          options: { ...state.options, [id]: uniqueArray },
        };
      });
    },
    setDefaultOption: (id, value) =>
      set((state) => ({
        defaultOption: { ...state.defaultOption, [id]: value },
      })),
    setKeys: (id, keys) =>
      set((state) => ({
        keys: { ...state.keys, [id]: keys },
      })),
    setActive: (id, active) =>
      set((state) => ({
        active: { ...state.active, [id]: active },
      })),
    setLoading: (id, loading) =>
      set((state) => ({
        isLoading: { ...state.isLoading, [id]: loading },
      })),
  };
});
