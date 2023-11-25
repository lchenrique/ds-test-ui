import { Button, IButtonProps, Toggle } from "@/ui";
import { theme } from "@adopets/tokens";
import type { Meta } from "@storybook/react";

export default {
  title: "Components/General/Theme",
  component: Button,
} as Meta<IButtonProps>;

export const Colors = (args: IButtonProps) => {
  return (
    <>
      <div className="flex gap-2  flex-col">
        <div>
          <div className="p-1">
            <Toggle />
          </div>
        </div>
        <div>
          <div
            className="p-1 text-white"
            style={{ background: theme.colors("brand-primary") }}
          >
            brand-primary
          </div>
          <div
            className="p-1 text-white"
            style={{ background: theme.colors("surface-primary") }}
          >
            surface-primary
          </div>
        </div>
        <p className="dark:text-white">surface-primary variations</p>
        <div>
          <div
            className="px-2"
            style={{
              background: theme.colors("surface-primary", {
                variation: "100",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "100", type: "hex" })}
          </div>
          <div
            className="px-2"
            style={{
              background: theme.colors("surface-primary", {
                variation: "200",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "200", type: "hex" })}
          </div>
          <div
            className="px-2"
            style={{
              background: theme.colors("surface-primary", {
                variation: "300",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "300", type: "hex" })}
          </div>
          <div
            className="px-2"
            style={{
              background: theme.colors("surface-primary", {
                variation: "400",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "400", type: "hex" })}
          </div>
          <div
            className="px-2 text-white"
            style={{
              background: theme.colors("surface-primary", {
                variation: "500",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "500", type: "hex" })}
          </div>
          <div
            className="px-2 text-white"
            style={{
              background: theme.colors("surface-primary", {
                variation: "600",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "600", type: "hex" })}
          </div>
          <div
            className="px-2 text-white"
            style={{
              background: theme.colors("surface-primary", {
                variation: "700",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "700", type: "hex" })}
          </div>
          <div
            className="px-2 text-white"
            style={{
              background: theme.colors("surface-primary", {
                variation: "800",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "800", type: "hex" })}
          </div>
          <div
            className="px-2 text-white"
            style={{
              background: theme.colors("surface-primary", {
                variation: "900",
                type: "hex",
              }),
            }}
          >
            {theme.colors("surface-primary", { variation: "900", type: "hex" })}
          </div>
        </div>
      </div>
    </>
  );
};
