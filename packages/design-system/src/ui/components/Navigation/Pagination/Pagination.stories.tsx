import { IPaginationProps, Pagination } from "@/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  args: {
    pageSize: 10,
    total: 100,
  },
} as Meta<IPaginationProps>;

export const PaginationStory: StoryObj<IPaginationProps> = {
  render: (args) => {
    const [page, setPage] = useState(args.current);

    return (
      <>
        <Pagination
          current={page}
          total={args.total}
          currentTotal={0}
          pageSize={args.pageSize}
          onChange={(page, pageSize) => {
            if (page) {
              setPage(page);
            }
          }}
        />
      </>
    );
  },
};
