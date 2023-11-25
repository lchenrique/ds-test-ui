import { IThemeColorsReturn, theme as twTheme } from "@adopets/tokens";
import { create } from "zustand";

interface IThemeState {
  theme: typeof twTheme;
  themeClass: string;
  setThemeClass: (className: string) => void;
}

export const useTheme = create<IThemeState>((set) => ({
  theme: twTheme,
  themeClass: "",
  setThemeClass: (className) => {
    set({ themeClass: className });
  },
}));
