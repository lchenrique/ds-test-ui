import { Dropdown, DropdownProps, Menu, MenuProps } from "antd";
import { CaretDown, SignOut } from "phosphor-react";
import { Fragment } from "react";
import { ICON_SIZE } from "../../../config/default";
import { Avatar } from "../../DataDisplay";
import { Button } from "../../General";

type MenuItem = Required<MenuProps>["items"][number];

interface HeaderMenuProps {
  avatar: any & {
    menuItems?: MenuItem[];
  };
  onLogout?: () => void;
  logoutText?: string;
  custom?: React.ReactNode;
}

function HeaderMenu({ onLogout, avatar, custom, logoutText }: HeaderMenuProps) {
  const { menuItems, ...avatarRest } = avatar;

  const hasMenu = menuItems && menuItems?.length > 0;
  const menu = hasMenu ? <Menu items={avatar?.menuItems || []} /> : null;
  const DropdownMenu = hasMenu ? Dropdown : Fragment;
  const dropdownProps = hasMenu
    ? ({
        overlay: menu,
        trigger: ["click"],
      } as DropdownProps)
    : ({} as any);

  return (
    <div className="flex items-center">
      {custom}
      <div className="border-r px-4">
        <DropdownMenu {...dropdownProps}>
          <div className="flex items-center gap-4 cursor-pointer">
            <Avatar {...avatarRest} />
            {hasMenu && <CaretDown size={ICON_SIZE} weight="bold" />}
          </div>
        </DropdownMenu>
      </div>
      {onLogout && (
        <Button
          className="text-gray-400 dark:text-gray-300"
          icon={<SignOut size={24} />}
          onClick={onLogout}
        >
          {logoutText || "Exit"}
        </Button>
      )}
    </div>
  );
}

export { HeaderMenu };
