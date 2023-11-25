import { useQueryClient } from "react-query";
import { Button, Icon, useBreakpoint } from "../../../..";
import { useDynamicTable } from "../useTable";

export default function Tools({ id }: { id: string }) {
  const { lg } = useBreakpoint();
  const { keys, setLoading } = useDynamicTable();
  const queryClient = useQueryClient();

  // const configContent = () => {
  // 	const items = cols
  // 		.filter((v) => !v?.key?.includes('data_action'))
  // 		.map((element, i) => {
  // 			return {
  // 				label: cloneElement(element.title, {
  // 					className: 'text-@soft-neutral-500 m-0 capitalize',
  // 				}),
  // 				key: i,
  // 				isVisible: element.isVisible,
  // 			}
  // 		})

  // 	const onSortEnd = ({ oldIndex, newIndex }: any) => {
  // 		setCols(arrayMoveImmutable(cols, oldIndex, newIndex))
  // 	}

  // 	return (
  // 		<>
  // 			<SortableList
  // 				items={items}
  // 				onSortEnd={onSortEnd}
  // 				lockAxis={'y'}
  // 				transitionDuration={100}
  // 				onVisibilityChange={(isVisible: boolean, key: number) => {
  // 					const _columns = cols.map((element, i) => {
  // 						if (i === key) {
  // 							element.isVisible = isVisible
  // 							if (element.sortOrder) {
  // 								// onTableChange('')
  // 							}
  // 						}
  // 						return element
  // 					})
  // 					// setCols(_columns)
  // 				}}
  // 			/>
  // 			<Button block size="small" type="secondary" onClick={() => loadCols(null)}>
  // 				Reset
  // 			</Button>
  // 		</>
  // 	)
  // }

  return (
    <div className={`items-center gap-3`}>
      <Button
        // tooltip={{
        // 	title: 'Refresh',
        // }}
        className="h-spacing-xxl w-spacing-xxl"
        type="secondary"
        onClick={async () => {
          if (keys) {
            setLoading(id, true);
            // queryClient.prefetchQuery({ queryKey: keys[id] })
            // queryClient?.refetchQueries({ queryKey: keys[id] })
            await queryClient.fetchQuery({ queryKey: keys[id] });
            setLoading(id, false);
          }
        }}
      >
        <Icon
          name="arrow-rotate-back"
          size="spacing-s"
          fill="surface-primary"
        />
      </Button>

      {/* <Popover
				content={configContent()}
				title="Table config"
				trigger="click"
				placement="bottomLeft"
			>
				<Button type="secondary">
					<GearSix size={ICON_SIZE} />
				</Button>
			</Popover> */}
      {}
    </div>
  );
}
