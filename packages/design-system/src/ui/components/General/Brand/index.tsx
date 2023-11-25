import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import { useTheme } from "../../../stores/theme";
import { Adopets } from "./Adopets";
import { PetLoyalty } from "./PetLoyalty";
import { useWrapperContext } from "../../..";

export interface IBrandProps {
  logo?: "adopets" | "pet-loyalty" | "shelter-buddy";
  variant?: "icon" | "logo";
  className?: string;
}

const logosDark: Record<string, any> = {
  Adopets: Adopets,
  PetLoyalty: PetLoyalty,
  ShelterBuddy: Adopets,
};

const logos: Record<string, any> = {
  adopets: Adopets,
  "pet-loyalty": PetLoyalty,
  "shelter-buddy": Adopets,
};

export const Brand = ({ logo, variant, className }: IBrandProps) => {
  const { themeClass } = useWrapperContext();

  const v = logo || themeClass;
  return v && logos[v]({ variant, className: cn("h-10", className) });
};
