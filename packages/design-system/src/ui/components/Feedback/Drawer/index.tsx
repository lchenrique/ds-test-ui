import { DrawerProps, Form, FormProps, Space } from 'antd'
import { VariantProps, cva } from 'class-variance-authority'
import { CSSProperties, ReactNode, cloneElement, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import { cn } from '../../../lib/utils'
import { Icon } from '../../General'
import { Button } from '../../General/Button'
import { Text } from '../../Typography'
import './style.css'

const placementVariant = {
    placement: {
        top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full rounded-b-border-radius-l',
        right: 'top-0 right-0 translate-x-full',
        left: 'top-0 left-0 -translate-x-full',
        bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full rounded-t-border-radius-l',
    },
}

const placementVariantCVA = cva('', {
    variants: placementVariant,
})

const closeBtnVariant = {
    placement: {
        top: '-bottom-[40px] right-0 mt-spacing-s',
        right: '-left-[50px] mr-spacing-s  top-1/2 -translate-y-1/2',
        left: '-right-[50px] ml-spacing-s  top-1/2 -translate-y-1/2',
        bottom: '-top-[40px] right-0 mb-spacing-s ',
    },
}

const closeBtnVariantCVA = cva('', {
    variants: closeBtnVariant,
})
export interface IDrawer extends VariantProps<typeof placementVariantCVA> {
    ApiService: {
        lastResults: {
            data: any
        }
    }
    key?: string
    title: ReactNode
    subTitle?: ReactNode
    content: React.ReactElement
    onCancel?: () => void
    onOk?: (values: any) => Promise<any> | any
    visible?: boolean | undefined
    cancelText?: string
    okText?: string
    drawerProps?: DrawerProps
    hideCancelButton?: boolean
    form?: boolean
}

function Drawer({
    title,
    subTitle,
    content,
    onCancel,
    onOk,
    visible,
    drawerProps,
    okText,
    cancelText,
    placement,
    hideCancelButton = false,
    form: withForm = true,
    ApiService,
}: IDrawer) {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm()
    const { sm } = useBreakpoint()

    console.log('placement', placement)

    useEffect(() => {
        setIsLoading(false)
        return () => {
            setIsLoading(false)
        }
    }, [])

    const handleOk = async (values: any) => {
        setIsLoading(true)
        const result = onOk && (await onOk(values))

        if (!result) {
            ApiService.lastResults?.data &&
                Object.entries(ApiService.lastResults.data).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        const v = value[0]?.split(`"`)
                        form.setFields([{ name: key.split('.'), errors: [`${v.join('')}`] }])
                    }
                })

            setIsLoading(false)
            return
        }

        if (result) {
            toggleVisibility()
            return
        }
        setIsLoading(false)
    }

    useEffect(() => {
        return () => {
            form.resetFields()
            setIsLoading(false)
        }
    }, [visible])

    const _props = drawerProps

    const HasForm = withForm ? Form : 'div'

    const formProps = withForm
        ? ({
              onFinish: handleOk,
              form: form,
              layout: 'vertical',
              className: 'h-full px-padding-l py-padding-m ',
              name: 'register',
              scrollToFirstError: true,
              validateMessages: { required: 'Required field' },
              onFieldsChange: (changedFields: any) => {
                  changedFields.forEach((field: any) => {
                      if (field.errors && !(field.name as Array<string>).includes('password_confirm'))
                          if (field.value?.length > 0 && !field.warnings) {
                              form.setFields([{ name: field.name, errors: [] }])
                          }
                  })
              },
          } as FormProps)
        : ({ className: 'h-full px-padding-l py-padding-m ' } as any)

    const [display, setDisplay] = useState('none')
    const [opacity, setOpacity] = useState(0)
    const [isOpen, setIsOpen] = useState<boolean>()

    const toggleVisibility = () => {
        document.body.style.overflow = 'auto'

        if (display) {
            // set scroll body hidden
            document.body.style.overflow = 'hidden'
        }
        if (display === 'none') {
            setDisplay('')

            setTimeout(() => {
                setOpacity(1)
                setIsOpen(true)
            }, 1)
        } else {
            setOpacity(0)
            setIsOpen(false)
            setTimeout(() => {
                setDisplay('none')
                onCancel && onCancel()
            }, 300)
        }
    }

    useEffect(() => {
        toggleVisibility()
    }, [])

    useUpdateEffect(() => {
        toggleVisibility()
    }, [visible])

    const isOpenPlacement = {
        top: 'translate-y-0',
        right: 'translate-x-0',
        left: '-translate-x-0',
        bottom: '-translate-y-0',
    }

    const placementSize = {
        top: { height: _props?.width || 'max-content', width: 'calc(100% - 50px)', maxHeight: 'calc(100vh - 48px)' },
        right: { width: _props?.width || 392 },
        left: { width: _props?.width || 392 },
        bottom: { height: _props?.width || 'max-content', width: 'calc(100% - 50px)', maxHeight: 'calc(100vh - 48px)' } as CSSProperties,
    }

    const placementOrMobile = !sm ? 'bottom' : placement

    return (
        <div className="flex">
            <div onClick={toggleVisibility} className="ado-drawer-toggle " style={{ display, opacity }} />

            <div
                style={{ display, ...placementSize[placementOrMobile!] }}
                className={cn('ado-drawer', placementVariantCVA({ placement: placementOrMobile }), isOpen ? isOpenPlacement[placementOrMobile!] : '')}>
                <div style={{}} className="px-padding-l py-padding-m">
                    <Text as="h1" size="lg" color="text-plain" className="font-semibold">
                        {title}
                    </Text>
                    {subTitle && (
                        <Text as="p" className="pt-padding-xs m-0">
                            {subTitle}
                        </Text>
                    )}
                </div>
                {placement === 'bottom' || placement === 'top' ? (
                    <div
                        onClick={toggleVisibility}
                        style={{ display, opacity }}
                        className={cn('ado-drawer-close-button cursor-pointer bg-red-100', closeBtnVariantCVA({ placement: placementOrMobile }))}>
                        <Icon name="close" size="padding-m" />
                    </div>
                ) : (
                    <Button
                        size="small"
                        onClick={toggleVisibility}
                        style={{ display, opacity }}
                        shape="circle"
                        className={cn('ado-drawer-close-button', closeBtnVariantCVA({ placement: placementOrMobile }))}
                        icon={<Icon name="close" />}
                    />
                )}

                <div className={cn('h-[calc(100%-6.25rem)]')}>
                    <HasForm {...formProps}>
                        <div className="w-full h-[inherit] relative">{content ? cloneElement(content, { form }) : null}</div>
                        {onOk && (
                            <div className={cn('ado-drawer-footer ', placement === 'top' ? 'rounded-b-border-radius-l overflow-hidden' : '')}>
                                <Space className="flex justify-end items-center px-5 py-2">
                                    {!hideCancelButton && (
                                        <Form.Item className="p-0 m-0">
                                            <Button type="secondary" onClick={toggleVisibility} disabled={isLoading}>
                                                {cancelText || 'Cancel'}
                                            </Button>
                                        </Form.Item>
                                    )}
                                    <Form.Item className="p-0 m-0">
                                        <Button htmlType="submit" loading={isLoading}>
                                            {okText || 'Save'}
                                        </Button>
                                    </Form.Item>
                                </Space>
                            </div>
                        )}
                    </HasForm>
                </div>
            </div>
            {/* <AdoDrawer
				title={<>{title}</>}
				placement="right"
				onClose={onCancel}
				open={visible}
				closable={true}
				footer={false}
				{..._props}
				width={!md ? "100%" : _props?.width || 500}
			>
				<HasForm {...formProps}>
					<div className="w-full h-full relative">
						{content ? cloneElement(content, { formInstance: form }) : null}
					</div>
					{onOk && (
						<div className="bg-@neutral-100 w-full dark:border-@soft-neutral-dark-400  absolute bottom-0 right-0 border-t">
							<Space className="flex justify-end items-center px-5 py-2">
								{!hideCancelButton && (
									<Form.Item className="p-0 m-0">
										<Button
											type="secondary"
											onClick={onCancel}
											disabled={isLoading}
										>
											{cancelText || "Cancel"}
										</Button>
									</Form.Item>
								)}
								<Form.Item className="p-0 m-0">
									<Button htmlType="submit" loading={isLoading}>
										{okText || "Save"}
									</Button>
								</Form.Item>
							</Space>
						</div>
					)}
				</HasForm>
			</AdoDrawer> */}
        </div>
    )
}

export { Drawer }
