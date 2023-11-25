import { theme, theme as twTheme } from "@adopets/tokens";
// import 'antd/dist/reset.css'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider, NotificationContainer } from "./";
import { DrawerProvider } from "./context/DrawerContext";
// import "./global.css"

interface IThemeState {
  theme: typeof twTheme;
  themeClass: string;
}

const WrapperContext = createContext<IThemeState>({} as IThemeState);

export function useWrapperContext() {
  return useContext<IThemeState>(WrapperContext);
}

export function Wrapper({
  children,
  theme: myTheme = "adopets",
}: {
  children: ReactNode;
  theme: "adopets" | "pet-loyalty" | "shelter-buddy";
}) {
  const [themeClass, setThemeClass] = useState("");

  const rawSetTheme = (rawTheme: any) => {
    const root = window.document.documentElement;
    const localTheme = localStorage.getItem("theme") || myTheme;

    root.classList.remove(localTheme);
    root.classList.add(rawTheme as string);

    localStorage.setItem("theme", rawTheme as string);

    const classTheme = root.classList?.value
      .split(" ")
      .find((v) => v === rawTheme);

    if (classTheme) setThemeClass(classTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || myTheme;
    if (localTheme) {
      rawSetTheme(localTheme as any);
    }
  }, []);

  useEffect(() => {
    rawSetTheme(myTheme);
  }, [myTheme]);

  return (
    <WrapperContext.Provider value={{ themeClass, theme: twTheme }}>
      <ConfigProvider
        prefixCls="ado"
        theme={{
          inherit: true,
          token: {
            colorPrimary: theme.colors("surface-primary", { type: "hex" }),
            colorLink: theme.colors("surface-primary", { type: "hex" }),
            colorError: theme.colors("stroke-error-dark", { type: "hex" }),
            colorWarning: theme.colors("stroke-warning-dark", { type: "hex" }),
            colorBorder: theme.colors("stroke-light", { type: "hex" }),
            colorTextBase: theme.colors("text-light", { type: "hex" }),
          },
          components: {
            Button: {
              algorithm: false,
              controlOutline: "transparent",
            },
          },
        }}
      >
        <NotificationContainer />
        <DrawerProvider ApiService={{}}>{children}</DrawerProvider>
      </ConfigProvider>
    </WrapperContext.Provider>
  );
}
