import { screens } from "@adopets/tokens";
import { useEffect, useState } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
  });

  const ret: any = {};
  const handleResize = () => {
    Object.keys(screens).forEach((key: any) => {
      ret[key] = (screens as any)[key].replace("px", "");
    });

    setBreakpoint({
      xs: window.innerWidth > 0 || window.innerWidth >= ret["xs"],
      sm: window.innerWidth >= ret["sm"],
      md: window.innerWidth > ret["sm"] || window.innerWidth >= ret["md"],
      lg: window.innerWidth > ret["md"] || window.innerWidth >= ret["lg"],
      xl: window.innerWidth > ret["lg"] || window.innerWidth >= ret["xl"],
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
}

export { useBreakpoint };

