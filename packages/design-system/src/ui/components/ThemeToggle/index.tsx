//ThemeToggle.js
import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ICON_SIZE } from "../../config/default";
import { ThemeContext } from "../../context/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun
            size={ICON_SIZE}
            weight="bold"
            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
        </div>
      ) : (
        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <Moon
            size={ICON_SIZE}
            weight="bold"
            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export { Toggle };
