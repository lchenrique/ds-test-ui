import { ReactNode } from "react";
import { getChildren } from "../../../lib/utils";
import { IAction } from "../../DataDisplay/DynamicTable/columns/ActionColumn";
import { Icon } from "../../General";
import { Flex } from "../../General/Flex";
import { HeaderActions } from "./HeaderActions";
import { HeaderSubTitle } from "./HeaderSubTitle";
import { HeaderTitle } from "./HeaderTitle";
import "./style.css";

export interface IPageHeaderProps {
  title?: ReactNode;
  subTitle?: ReactNode;
  actions?: IAction<null>[] | ReactNode;
  children?: ReactNode;
  onBack?: () => void;
}

const PageHeader = (props: IPageHeaderProps) => {
  const getTitle = () => {
    return getChildren(props?.children, "PageHeader.Title");
  };

  const getSubtitle = () => {
    return getChildren(props?.children, "PageHeader.SubTitle");
  };

  const getActions = () => {
    return getChildren(props?.children, "PageHeader.Actions");
  };

  const goBack = () => {
    props.onBack && props.onBack();
  };

  return (
    <Flex
      className="w-full"
      align={getSubtitle() || props.subTitle ? "start" : "center"}
    >
      {props.onBack && (
        <Flex
          onClick={goBack}
          className="flex items-center h-spacing-m cursor-pointer mr-spacing-xs "
        >
          <Icon
            name="chevron-left"
            size="spacing-s"
            fill="surface-primary"
            className="leading-[100%]"
          />
        </Flex>
      )}
      <div className="flex-1 overflow-hidden">
        <Flex className="flex-1 overflow-hidden">
          {getTitle() ||
            (props.title && <HeaderTitle>{props.title}</HeaderTitle>)}
        </Flex>
        {(getSubtitle() || props.subTitle) && (
          <Flex className="flex-1 overflow- mt-2">
            {getSubtitle() ||
              (props.subTitle && (
                <HeaderSubTitle>{props.subTitle}</HeaderSubTitle>
              ))}
          </Flex>
        )}
      </div>

      {getActions() ||
        (props.actions && (
          <HeaderActions
            actions={Array.isArray(props?.actions) ? props?.actions : undefined}
          >
            {!Array.isArray(props?.actions) && props.actions}
          </HeaderActions>
        ))}
    </Flex>
  );
};

PageHeader.Title = HeaderTitle;
PageHeader.SubTitle = HeaderSubTitle;
PageHeader.Actions = HeaderActions;

PageHeader.displayName = "PageHeader";

export { PageHeader };
