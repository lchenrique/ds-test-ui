import { IFilterProps } from "..";
import { cn } from "../../../../../lib/utils";
import { TextInput } from "../../../../Form";
import { Button, Flex, Icon } from "../../../../General";

export const SearchInputFilter = ({
  search,
  className = "",
  type,
}: {
  type?: string;
  className?: string;
  search?: IFilterProps["search"];
}) => {
  return (
    <Flex className={cn("gap-3 w-full flex-2 min-w-[150px]", className)}>
      {type === "primary" ? (
        <TextInput
          placeholder={search?.placeholder}
          className="w-full"
          withFormItem={{
            name: search?.name,
            className: "p-0 m-0 w-full",
          }}
        />
      ) : (
        <>
          <TextInput
            placeholder={search?.placeholder}
            className="w-full text-xl [&>input]:text-@text-light [&>input]:placeholder:text-@text-light/60   border-0 shadow-none m-0 pl-0 focus:[&.ado-input-affix-wrapper-focused]:border-0  focus:[&.ado-input-affix-wrapper-focused]:shadow-none "
            prefix={
              <Icon
                name="magnifying-glass"
                size="spacing-s"
                fill="surface-primary"
              />
            }
            classNames={{
              prefix: "mr-spacing-s",
            }}
            withFormItem={{
              name: search?.name,
              className: "p-0 m-0 w-full",
            }}
          />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </>
      )}
    </Flex>
  );
};
