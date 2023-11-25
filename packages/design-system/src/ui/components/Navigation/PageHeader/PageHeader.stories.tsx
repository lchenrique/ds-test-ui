import { Avatar, Flex, IPageHeaderProps, PageHeader, Tooltip } from "@/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Navigation/PageHeader",
  component: PageHeader,
} as Meta<IPageHeaderProps>;

export const PageHeaderStory: StoryObj<IPageHeaderProps> = {
  render: (args) => {
    return (
      <Flex vertical gap="padding-xl" className="w-full">
        <PageHeader
          title="Adopt information"
          actions={[{ label: "teste" }]}
          onBack={() => {}}
        />

        <PageHeader title="Adopt information" onBack={() => {}}>
          <PageHeader.SubTitle className="gap-3">
            <Tooltip
              overlayClassName="whitespace-nowrap"
              rootClassName="max-w-none"
              title="Payment collected by: Carlos Santos"
            >
              <Flex gap="padding-xs" className="flex-1 overflow-hidden w-min">
                <div className="truncate">Payment collected by: </div>
                <Avatar size="xSmall" shape="circle">
                  <Avatar.Name className="font-semibold text-sm absolute sm:static sm:visible invisible">
                    Carlos Santos
                  </Avatar.Name>
                </Avatar>
              </Flex>
            </Tooltip>
          </PageHeader.SubTitle>
          <PageHeader.Actions
            maxActions={2}
            actions={[
              { label: "option 1" },
              { label: "option 2" },
              { label: "option 2" },
            ]}
          />
        </PageHeader>
      </Flex>
    );
  },
};
