import { theme } from "@adopets/tokens";
import { useEffect, useRef, useState } from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { cn } from "../../../lib/utils";
import { Brand, TabItemsProps, Tabs } from "../../General";
import { Flex } from "../../General/Flex";
import { HeaderActions } from "./HeaderActions";
import { HeaderSubTitle } from "./HeaderSubTitle";
import { HeaderTitle } from "./HeaderTitle";
import "./style.css";
export interface INavbarProps {
  menu?: TabItemsProps[];
}

const Navbar = (props: INavbarProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const [display, setDisplay] = useState(false);

  const { sm, md } = useBreakpoint();

  // let elementOutSide =  (ref.current && ref2.current) && ref2.current?.getBoundingClientRect().width > ref.current?.getBoundingClientRect().width
  let elementOutSide = !sm;

  useEffect(() => {
    if (ref.current && ref2.current) {
      // elementOutSide = !md || ref2.current?.getBoundingClientRect().width > ref.current?.getBoundingClientRect().width
      elementOutSide = !md;
    }

    if (elementOutSide && !display) {
      setDisplay(true);
    } else if (!elementOutSide && display) {
      setDisplay(false);
    }
  }, [
    ref?.current,
    ref2.current,
    ref2.current?.getBoundingClientRect().width,
    ref.current?.getBoundingClientRect().width,
  ]);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabItemsProps[] = [
    {
      key: "1",
      label: "Tab 1",
      icon: ["far", "dog"],
    },
    {
      key: "2",
      label: "Tab 2",
      badge: 5,
      icon: ["far", "dog"],
    },
    {
      key: "3",
      label: "Tab 3",
    },
    {
      key: "4",
      label: "Tab 4",
      badge: 1,
    },
    {
      key: "6",
      label: "Tab 5",
      badge: 1,
    },
    {
      key: "7",
      label: "Tab 6",
      badge: 1,
    },
    {
      key: "8",
      label: "Tab 7",
      badge: 1,
    },
  ];

  const Menu = ({ className }: { className?: string }) => {
    return (
      <Tabs
        defaultActiveKey="1"
        className={cn("tabs-menu", className)}
        tabs={items}
        onChange={onChange}
      />
    );
  };

  return (
    <Flex align="start" className="flex-col  w-full bg-white">
      <Flex className="flex gap-spacing-xl items-center w-full  px-spacing-l">
        <Brand variant={sm ? "logo" : "icon"} />
        <Flex ref={ref} className="gap-spacing-xs overflow-hidden  w-full">
          <div
            ref={ref2}
            className={cn(
              "w-full  flex transition-all",
              ref2.current ? "opacity-100" : "opacity-0",
            )}
          >
            <Menu />
          </div>
        </Flex>

        <div className={cn("w-min  flex ")}>teste</div>
      </Flex>

      {display && (
        <div
          className="relative  w-full h-12 overflow-hidden"
          style={{
            borderTop: "1px solid",
            borderColor: theme.colors("stroke-brand-secondary"),
            // transform: "rotate(-90deg)",
            // overflowX: "scroll"
          }}
        >
          {/* <div className='over' /> */}
          {/* 
				<div className="horizontal-scroll-wrapper squares">
					<div ><Menu className='tabs-menu-mobile flex-wrap' /></div>
				</div> */}
          <Menu className={cn("tabs-menu-mobile  w-full")} />
        </div>
      )}
    </Flex>
  );
};

Navbar.Title = HeaderTitle;
Navbar.SubTitle = HeaderSubTitle;
Navbar.Actions = HeaderActions;

Navbar.displayName = "Navbar";

export { Navbar };
