import { CollapseProps, Empty } from 'antd'
import { Spinner, uuid } from '../../..'
import { Flex, Icon } from '../../General'
import { Text } from '../../Typography'
import { Collapse } from '../Collapse'
export interface IMobileProps {
    dataSource: any[]
    tableColumns: any[]
    isLoading?: boolean
}

export const MobileTable = ({ tableColumns, dataSource, isLoading }: IMobileProps) => {
    const DATA = dataSource || ([] as any[])

    return (
        <div className="relative  w-full sm:hidden">
            <Spinner isLoading={isLoading}>
                <div className="relative w-full min-h-[226px]">
                    {DATA.map((item, index) => {
                        const key = tableColumns[0].key.split('[-]')[0]
                        const first = tableColumns[0]
                        const header = first.render ? first.render(item, item) : item[key]
                        const dataItems = tableColumns.slice(1)

                        const items: CollapseProps['items'] = [
                            {
                                key: item.uuid,
                                label: <Flex className="flex-1">{header}</Flex>,
                                children: dataItems.map((col, i, arr) => {
                                    const key = col.key.split('[-]')[0]
                                    if (key === 'data_action') {
                                        return (
                                            <Flex key={uuid()} className="w-full">
                                                {col.render ? col.render(item, item) : item[key]}
                                            </Flex>
                                        )
                                    }

                                    return (
                                        <Flex key={uuid()} className="mobile-content-accordion-wrapper">
                                            <Text color="text-plain" className="mobile-content-accordion flex items-center whitespace-nowrap">
                                                {col.title}:{' '}
                                            </Text>
                                            <div className="mobile-content-accordion-box">{col.render ? col.render(item, item) : item[key]}</div>
                                        </Flex>
                                    )
                                }),
                            },
                        ]

                        return (
                            <div className={`${index % 2 === 0 ? 'bg-@surface-light' : 'bg-@colors-neutrals-050'} border-none p-0`}>
                                <Collapse
                                    className={` border-none`}
                                    items={items}
                                    size="large"
                                    expandIcon={(isOpen) => {
                                        return (
                                            <>
                                                {' '}
                                                <Text as="a" color="text-link">
                                                    Details{' '}
                                                </Text>{' '}
                                                <Icon fill="surface-primary" name={!isOpen ? 'chevron-down' : 'chevron-up'} size="padding-s" className="ml-spacing-xxs" />
                                            </>
                                        )
                                    }}
                                />
                            </div>
                        )
                    })}
                    {DATA?.length === 0 && (
                        <Flex justify="center" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2  left-1/2">
                            <Empty />
                        </Flex>
                    )}
                </div>
            </Spinner>
        </div>
        // <List
        // 	className="sm:hidden"
        // 	size="large"
        // 	dataSource={dataSource}
        // 	renderItem={(item: any, index: number) => {
        // 		const key = tableColumns[0].key.split('[-]')[0]
        // 		const first = tableColumns[0]
        // 		const header = first.render ? first.render(item, item) : item[key]
        // 		const dataItems = tableColumns.slice(1)

        // 		const items: CollapseProps['items'] = [
        // 			{
        // 				key: item.uuid,
        // 				label: <Flex className="flex-1" >{header}</Flex>,
        // 				children: dataItems.map((col, i, arr) => {
        // 					const key = col.key.split('[-]')[0]
        // 					if (key === "data_action") {
        // 						return <Flex key={uuid()} className="w-full" >{col.render ? col.render(item, item) : item[key]}</Flex>
        // 					}

        // 					return (
        // 						<Flex key={uuid()} className="mobile-content-accordion-wrapper" >
        // 							<Text color="text-plain" className="mobile-content-accordion flex items-center whitespace-nowrap">{col.title}: </Text>
        // 							<div className="mobile-content-accordion-box">{col.render ? col.render(item, item) : item[key]}</div>
        // 						</Flex>
        // 					)

        // 				})
        // 			}

        // 		]

        // 		return <List.Item className={`${index % 2 === 0 ? 'bg-@surface-light' : "bg-@colors-neutrals-050"} border-none p-0`}>
        // 			<Collapse
        // 				className={` border-none`}
        // 				items={items}
        // 				size="large"
        // 				expandIcon={(isOpen) => {

        // 					return <> <Text as="a" color="text-link">Details  </Text> <Icon fill='surface-primary' name={!isOpen ? "chevron-down" : "chevron-up"} size='padding-s' className='ml-spacing-xxs' /></>

        // 				}}
        // 			/>

        // 		</List.Item>

        // 	}}
        // 	// loading={{
        // 	// 	spinning: isLoading,
        // 	// 	indicator: <div className="loader animate-rotate z-50 " />
        // 	// }}
        // 	pagination={pagination}
        // />
    )
}
