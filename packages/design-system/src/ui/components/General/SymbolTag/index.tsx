import { cloneElement, ReactElement } from "react";

interface SymbolTagProps {
  icon: ReactElement;
  className?: string;
  fillColor?: string;
}

function SymbolTag({ icon, className, fillColor }: SymbolTagProps) {
  const defaultClassName = `bg-@soft-primary-color-opacity flex justify-center items-center p-2 w-10 h-10 rounded-@radius-md`;

  const newClassName = defaultClassName.split(" ").map((item, i) => {
    const before = item.substring(0, item.lastIndexOf("-"));
    const element = className?.split(" ")[i];
    const suffix = element?.split("-")[0];

    if (before === suffix) {
      return `${element} ${item}`;
    } else {
      return element ? `${element} flex` : item;
    }
  });

  const fillIcon =
    (className &&
      className
        .split(" ")
        .find((className) => className.startsWith("text-"))) ||
    "text-@soft-primary-color";
  return (
    <div className={newClassName?.join(" ") || defaultClassName}>
      {cloneElement(icon, {
        className: fillIcon,
      })}
    </div>
  );
}

export { SymbolTag };
