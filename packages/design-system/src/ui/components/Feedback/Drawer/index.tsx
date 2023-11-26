import { DrawerCloseButton } from '@/ui/components/Feedback/Drawer/DrawerCloseButton'
import { DrawerFooter } from '@/ui/components/Feedback/Drawer/DrawerFooter'
import { DrawerHeader } from '@/ui/components/Feedback/Drawer/DrawerHeader'
import { DrawerProps, Form, FormProps } from 'antd'
import { VariantProps, cva } from 'class-variance-authority'
import { CSSProperties, ReactNode, cloneElement, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { useBreakpoint } from '../../../hooks/useBreakpoint'
import { cn } from '../../../lib/utils'
import './style.css'

const placementVariant = {
    placement: {
        top: 'top-0 left-1/2 -translate-x-1/2  -translate-y-[calc(100%+56px)]  ',
        right: 'top-0 right-0 translate-x-full',
        left: 'top-0 left-0 -translate-x-full',
        bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+56px)]  rounded-t-border-radius-l',
    },
}

const placementVariantCVA = cva('', {
    variants: placementVariant,
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
    showCancelButton?: boolean
    form?: boolean
    className?: string
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
    placement = 'right',
    showCancelButton = true,
    form: withForm = true,
    ApiService,
    className,
}: IDrawer) {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm()
    const { sm } = useBreakpoint()

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

    const noFooter = !onOk

    const formProps = withForm
        ? ({
              onFinish: handleOk,
              form: form,
              layout: 'vertical',
              className: noFooter ? 'h-[calc(100%-98px)]' : 'h-[calc(100%-154px)]',
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
        : ({ className: noFooter ? 'h-[calc(100%-98px)]' : 'h-[calc(100%-154px)]' } as any)

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

    const placementOrMobile = !sm ? 'bottom' : placement

    const isOpenPlacement = {
        top: 'translate-y-0',
        right: 'translate-x-0',
        left: '-translate-x-0',
        bottom: '-translate-y-0',
    }

    const placementSize: Record<string, CSSProperties> = {
        top: { height: _props?.width || 453, width: 'calc(100% - 80px)' },
        right: { width: _props?.width || 392 },
        left: { width: _props?.width || 392 },
        bottom: { height: _props?.width || 453, width: 'calc(100% - 80px)' },
    }

    const topOrBottom = placementOrMobile === 'bottom' || placementOrMobile === 'top'

    return (
        <div className="flex">
            <div onClick={toggleVisibility} className="ado-drawer-toggle " style={{ display, opacity }} />

            <div
                style={{ display, ...placementSize[placementOrMobile!] }}
                className={cn(
                    'ado-drawer',
                    placementVariantCVA({ placement: placementOrMobile }),
                    isOpen ? isOpenPlacement[placementOrMobile!] : '',
                    placementOrMobile === 'top' ? 'rounded-b-border-radius-l bottom-0 ' : 'bottom-0',
                )}>
                <DrawerHeader title={title} subTitle={subTitle} />
                <DrawerCloseButton style={{ display, opacity }} onlyIcon={topOrBottom} onClick={toggleVisibility} placement={placementOrMobile} />

                <HasForm {...formProps}>
                    <div className={cn('w-full relative px-padding-l  h-full overflow-auto', noFooter ? 'pt-padding-m' : 'py-padding-m ', className)}>
                        {content ? cloneElement(content, { form }) : null}
                    </div>
                    <DrawerFooter
                        isLoading={isLoading}
                        cancelText={cancelText}
                        okText={okText}
                        showCancelButton={showCancelButton}
                        onClick={toggleVisibility}
                        showFooter={!noFooter}
                        placement={placementOrMobile}
                    />
                </HasForm>
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
