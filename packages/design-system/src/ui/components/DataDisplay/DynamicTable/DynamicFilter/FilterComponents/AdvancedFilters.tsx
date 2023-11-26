import { Form } from 'antd'
import { Store, StoreValue } from 'antd/es/form/interface'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import utc from 'dayjs/plugin/utc'
import weekday from 'dayjs/plugin/weekday'
import { useEffect } from 'react'
import { uuid } from '../../../../..'
import useDrawer from '../../../../../hooks/useDrawer'
import { Button, Flex, Icon } from '../../../../General'
import { Text } from '../../../../Typography'
import { Collapse, ICollapseProps } from '../../../Collapse'
import { useDynamicTable } from '../../useTable'

dayjs.extend(utc)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('en')

export type NormalizeType = (value: StoreValue, prevValue: StoreValue, allValues: Store) => { value: any; label: string }
export interface IAdvancedFilterProps {
    id: any
    filters: {
        title: string
        name: string | string[]
        component: ((name: string | string[], normalize: NormalizeType) => JSX.Element) | JSX.Element
        normalize?: NormalizeType
    }[]
}

let labels: any[] = []
let newLabels: any[] = []

const AdvancedFilters = (props: IAdvancedFilterProps) => {
    const { setOptions, options, setFilter, filters } = useDynamicTable()

    const { openDrawer } = useDrawer()
    const [form] = Form.useForm()

    const onClearAll = () => {
        form.resetFields()
    }

    const handleSubmit = (values: any) => {
        setOptions(props.id, newLabels)

        setFilter(props.id, values)
    }

    useEffect(() => {
        if (filters[props.id]) {
            for (let key in filters[props.id]) {
                let value = filters[props.id][key]
                if (!value) {
                    form.resetFields([key])
                }
            }
        }
    }, [filters])

    useEffect(() => {
        if (options[props.id]) {
            for (let key in options[props.id]) {
                let value = options[props.id][key]
                if (!value) {
                    setOptions(props.id, [...new Set(newLabels.filter((v) => v.value !== key))])
                }
            }
        }
    }, [options])

    const onChange = () => {
        const Child = (config: Omit<IAdvancedFilterProps['filters'][number], 'title'>) => {
            console.log('values', config.name)

            const HasFormItem = typeof config.component === 'function' ? 'div' : Form.Item
            const normalizeFunction = (value: StoreValue, prevValue: StoreValue, allValues: Store) => {
                const values = (config.normalize && config.normalize(value, prevValue, allValues)) || value

                labels.forEach((v) => {
                    if (v.name === config.name) {
                        newLabels.push({ ...v, value: values?.label || values })
                    }
                })
                return values?.value ?? values
            }
            const formItemProps =
                typeof config.component !== 'function'
                    ? {
                          normalize: normalizeFunction,
                          name: config.name,
                          className: 'w-full',
                          noStyle: true,
                      }
                    : undefined

            return (
                <HasFormItem {...formItemProps}>
                    {config.component && (typeof config.component === 'function' ? config.component(config.name, normalizeFunction) : config.component)}
                </HasFormItem>
            )
        }

        const item = (config: IAdvancedFilterProps['filters'][number]): ICollapseProps['items'] => {
            return [
                {
                    key: uuid(),
                    label: (
                        <Text as="h1" color="text-plain" size="sm" className="font-semibold">
                            {config.title}
                        </Text>
                    ),

                    children: <Child component={config.component} name={config.name} normalize={config.normalize} />,
                },
                {
                    key: uuid(),
                    label: (
                        <Text as="h1" color="text-plain" size="sm" className="font-semibold">
                            {config.title}
                        </Text>
                    ),

                    children: <Child component={config.component} name={config.name} normalize={config.normalize} />,
                },
                {
                    key: uuid(),
                    label: (
                        <Text as="h1" color="text-plain" size="sm" className="font-semibold">
                            {config.title}
                        </Text>
                    ),

                    children: <Child component={config.component} name={config.name} normalize={config.normalize} />,
                },
                {
                    key: uuid(),
                    label: (
                        <Text as="h1" color="text-plain" size="sm" className="font-semibold">
                            {config.title}
                        </Text>
                    ),

                    children: <Child component={config.component} name={config.name} normalize={config.normalize} />,
                },
            ]
        }

        openDrawer({
            title: 'Filters',
            subTitle: 'Find pets by filtering specific data.',
            className: 'px-padding-none overflow-hidden',
            content: (
                <Flex vertical align="start" className="h-[inherit] w-full relative px-0">
                    <Form className="flex flex-col w-full h-[inherit]" form={form} onFinish={handleSubmit}>
                        <div className="flex-1 flex flex-col gap-padding-xs w-full  overflow-auto  px-padding-l">
                            {props?.filters &&
                                props?.filters?.map(({ title, name, component, normalize }) => {
                                    labels.push({ name, label: title })

                                    return <Collapse size="small" key={uuid()} items={item({ title, name, component, normalize })} className=" bg-white" />
                                })}
                        </div>
                        <footer className="flex flex-col gap-padding-s my-spacing-l w-ful px-padding-l">
                            <Form.Item className="p-0 m-0 w-full">
                                <Button htmlType="submit" size="large" block type="primary" icon={<Icon name="sliders" />}>
                                    Filter
                                </Button>
                            </Form.Item>

                            <Button onClick={onClearAll} size="large" block icon={<Icon name="trash-can" />}>
                                Clear all
                            </Button>
                        </footer>
                    </Form>
                </Flex>
            ),
            form: false,
        })
    }

    return (
        <div className="w-full">
            <Button className="w-full sm:w-min" type="secondary" icon={<Icon fill="icon-primary" name="sliders" size="spacing-s" />} onClick={onChange}>
                <div className="flex justify-between align-center w-full">
                    <Text as="span" className="text-left text-md leading-4 text-@text-light">
                        Filter
                    </Text>
                </div>
            </Button>
        </div>
    )
}

export { AdvancedFilters }
