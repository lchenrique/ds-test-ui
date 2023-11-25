//ThemeContext.js
import React from "react";
type themeType = "light" | "dark";
interface IThemeContext {
  theme: themeType;
  setTheme: (theme: themeType) => void;
}


export const ThemeContext = React.createContext({} as IThemeContext);

const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: themeType;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = React.useState<themeType>(initialTheme);

  const rawSetTheme = (rawTheme: themeType | undefined) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme as string);

    localStorage.setItem("color-theme", rawTheme as string);
  };

  React.useEffect(() => {
    const localTheme = localStorage.getItem("color-theme") || initialTheme;
    if (localTheme) {
      setTheme(localTheme as themeType);
    }
  }, []);

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider };

