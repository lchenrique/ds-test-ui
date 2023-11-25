import { create } from "zustand";

interface IDynamicFilterState {
  options: { label: string; key: string; value: any; onClick: () => void }[];
  filters: Record<string, any>;
  columns: any[];
  setFilters: (filters: Record<string, any>) => void;
  setOptions: (
    options: { label: string; key: string; value: any; onClick: () => void }[],
  ) => void;
  setColumns: (columns: any[]) => void;
}

export const useDynamicFilter = create<IDynamicFilterState>((set) => ({
  filters: {},
  options: [],
  columns: [],
  setFilters: (filters) =>
    set((state) => ({ filters: filters ? filters : state.filters })),
  setOptions: (options) => set((state) => ({ options })),
  setColumns: (columns) => set(() => ({ columns })),
}));
