import { DrawerProps, Form, FormProps, Space } from "antd";
import { ReactNode, cloneElement, useEffect, useState } from "react";
import { useUpdateEffect } from "usehooks-ts";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { cn } from "../../../lib/utils";
import { Icon } from "../../General";
import { Button } from "../../General/Button";
import { Text } from "../../Typography";
import "./style.css";

export interface IDrawer {
  ApiService: {
    lastResults: {
      data: any;
    };
  };
  key?: string;
  title: ReactNode;
  subTitle?: ReactNode;
  content: React.ReactElement;
  onCancel?: () => void;
  onOk?: (values: any) => Promise<any> | any;
  visible?: boolean | undefined;
  cancelText?: string;
  okText?: string;
  drawerProps?: DrawerProps;
  hideCancelButton?: boolean;
  form?: boolean;
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
  hideCancelButton = false,
  form: withForm = true,
  ApiService,
}: IDrawer) {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const { md } = useBreakpoint();

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
  }, []);

  const handleOk = async (values: any) => {
    setIsLoading(true);
    const result = onOk && (await onOk(values));

    if (!result) {
      ApiService.lastResults?.data &&
        Object.entries(ApiService.lastResults.data).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            const v = value[0]?.split(`"`);
            form.setFields([
              { name: key.split("."), errors: [`${v.join("")}`] },
            ]);
          }
        });

      setIsLoading(false);
      return;
    }

    if (result) {
      toggleVisibility();
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      form.resetFields();
      setIsLoading(false);
    };
  }, [visible]);

  const _props = drawerProps;

  const HasForm = withForm ? Form : "div";

  const formProps = withForm
    ? ({
        onFinish: handleOk,
        form: form,
        layout: "vertical",
        className: "h-full px-padding-l py-padding-m ",
        name: "register",
        scrollToFirstError: true,
        validateMessages: { required: "Required field" },
        onFieldsChange: (changedFields: any) => {
          changedFields.forEach((field: any) => {
            if (
              field.errors &&
              !(field.name as Array<string>).includes("password_confirm")
            )
              if (field.value?.length > 0 && !field.warnings) {
                form.setFields([{ name: field.name, errors: [] }]);
              }
          });
        },
      } as FormProps)
    : ({ className: "h-full px-padding-l py-padding-m " } as any);

  const [display, setDisplay] = useState("none");
  const [opacity, setOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>();

  const toggleVisibility = () => {
    document.body.style.overflow = "auto";

    if (display) {
      // set scroll body hidden
      document.body.style.overflow = "hidden";
    }
    if (display === "none") {
      setDisplay("");

      setTimeout(() => {
        setOpacity(1);
        setIsOpen(true);
      }, 1);
    } else {
      setOpacity(0);
      setIsOpen(false);
      setTimeout(() => {
        setDisplay("none");
        onCancel && onCancel();
      }, 300);
    }
  };

  useEffect(() => {
    toggleVisibility();
  }, []);

  useUpdateEffect(() => {
    toggleVisibility();
  }, [visible]);

  return (
    <div className="flex">
      <div
        onClick={toggleVisibility}
        className="ado-drawer-toggle"
        style={{ display, opacity }}
      />

      <div
        style={{ display, width: !md ? "100%" : _props?.width || 392 }}
        className={cn("ado-drawer", isOpen ? "translate-x-0" : "")}
      >
        <div className="px-padding-l py-padding-m">
          <Text as="h1" size="lg" color="text-plain" className="font-semibold">
            {title}
          </Text>
          {subTitle && (
            <Text as="p" className="pt-padding-xs m-0">
              {subTitle}
            </Text>
          )}
        </div>

        <Button
          size="small"
          onClick={toggleVisibility}
          style={{ display, opacity }}
          shape="circle"
          className="ado-drawer-close-button"
          icon={<Icon name="close" />}
        />

        <div className="h-[calc(100%-6.25rem)]">
          <HasForm {...formProps}>
            <div className="w-full h-[inherit] relative">
              {content ? cloneElement(content, { form }) : null}
            </div>
            {onOk && (
              <div className="ado-drawer-footer">
                <Space className="flex justify-end items-center px-5 py-2">
                  {!hideCancelButton && (
                    <Form.Item className="p-0 m-0">
                      <Button
                        type="secondary"
                        onClick={toggleVisibility}
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
  );
}

export { Drawer };
