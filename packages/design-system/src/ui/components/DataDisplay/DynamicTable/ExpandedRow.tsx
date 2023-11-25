import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { IDynamicDataColumn } from "../../../interfaces";
import { getFromMultiLevelString } from "../../../utils";

interface ExpandedRowProps {
  columns: IDynamicDataColumn[];
  record: any;
}

function ExpandedRow({ columns, record }: ExpandedRowProps) {
  const { md } = useBreakpoint();

  if (!md) {
    const _columns = columns?.filter((v) => {
      return v.key !== "data_action";
    });

    return (
      <>
        {_columns.map((v) => {
          return (
            <div
              className="flex w-full justify-between py-1 border-b "
              key={v.key}
            >
              <div className="font-bold">{v.title} :</div>
              <div>
                {v.render
                  ? v.render(null, record)
                  : v.key
                    ? getFromMultiLevelString(v.key, record)
                    : null}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return null;
}

export { ExpandedRow };
