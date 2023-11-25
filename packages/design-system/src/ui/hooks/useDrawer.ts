import { useContext } from "react";
import { DrawerContext, DrawerContextProps } from "../context/DrawerContext";

export default function useDrawer(): DrawerContextProps {
  return useContext(DrawerContext);
}
