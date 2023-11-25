import { useQueryClient } from "react-query";
import { Tag } from "../../..";
import { useDynamicTable } from "../../useTable";

export const ActiveFilters = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const { setFilter, options, filters, keys } = useDynamicTable();

  return (
    <div
      className={`flex gap-1 flex-wrap ${
        filters[id] && Object.values(filters[id]).length > 0
          ? "border-t mt-2"
          : ""
      }`}
    >
      {/* {filters[id] && JSON.stringify(filters)} */}
      {filters[id] &&
        Object.entries(filters[id])
          .filter(Boolean)
          .map(([label, value], i) => {
            if (label && value) {
              return (
                <Tag
                  key={i}
                  closable
                  onClose={() => {
                    setFilter(id, {
                      [label]: undefined,
                    });

                    queryClient.removeQueries({
                      queryKey: keys[id],
                    });
                  }}
                >
                  <span>
                    {" "}
                    {options[id]?.find((v) => v.name === label)?.label}:{" "}
                  </span>
                  {String(options[id]?.find((v) => v.name === label)?.value)}
                </Tag>
              );
            }
          })}
    </div>
  );
};
