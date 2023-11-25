import { INavbarProps, Navbar } from "@/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Navigation/Navbar",
  component: Navbar,
} as Meta<INavbarProps>;

export const NavbarStory: StoryObj<INavbarProps> = {
  render: (args) => {
    return (
      <div className="p-3 bg-slate-100 h-[calc(100vh-100px)]">
        <Navbar />
      </div>
    );
  },
};
