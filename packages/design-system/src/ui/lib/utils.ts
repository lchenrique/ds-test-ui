import { clsx, type ClassValue } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type Exclude<T, U> = T extends U ? never : T;
export type ResolvedJSXElement = Exclude<ReactNode, ReactNode[]>;
export type ResolvedChildren = ResolvedJSXElement | ResolvedJSXElement[];
export type Accessor<T> = () => T;

export type ChildrenReturn = Accessor<ResolvedChildren> & {
  toArray: () => ResolvedJSXElement[];
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getChildren(value: any[] | any, displayName: string) {
  const child: any[] = Array.isArray(value) ? value : [value];

  return child.find(
    (v) => v?.type?.displayName === displayName,
  ) as React.ReactElement;
}
