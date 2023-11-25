import {
  Modal as AntModal,
  Form,
  ModalFuncProps,
  ModalProps,
  Space,
} from "antd";
import { cloneElement, useEffect, useState } from "react";
import { Button } from "../../General";

export interface IModal {
  active?: boolean;
  title: string;
  content: React.ReactElement;
  onCancel?: () => void;
  onOk?: (values: any) => Promise<any> | any;
  open?: boolean;
  cancelText?: string;
  okText?: string;
  modalProps?: ModalProps & {
    size?: "small" | "medium" | "large" | "xlarge";
  };
  ApiService?: any;
  cancelButton?: boolean;
}

function Modal({
  title,
  content,
  onCancel,
  onOk,
  open,
  ApiService,
  modalProps,
  cancelButton = true,
}: IModal) {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async (values: any) => {
    setIsLoading(true);
    const result = onOk && (await onOk(values));

    if (!result) {
      if (ApiService.lastResults.error)
        Object.entries(ApiService.lastResults.error).forEach(([key, value]) => {
          form.setFields([{ name: key, errors: [value as string] }]);
        });

      setIsLoading(false);
      return;
    }

    if (result && onCancel) {
      onCancel();
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      form.resetFields();
      setIsLoading(false);
    };
  }, [open]);

  const _props = modalProps;

  return (
    <AntModal
      {..._props}
      title={title}
      open={open}
      closable
      destroyOnClose
      footer={false}
    >
      <Form
        onFinish={handleOk}
        form={form}
        layout="vertical"
        className="h-[inherit]"
        onFieldsChange={(changedFields) => {
          changedFields.forEach((field) => {
            form.setFields([{ name: field.name, errors: [] }]);
          });
        }}
      >
        <div className="w-full h-full overflow-hidden relative">
          {content ? cloneElement(content, { formInstance: form }) : null}
        </div>
        {onOk && (
          <div className="w-full">
            <Space className="flex justify-end items-center px-0 py-5">
              {cancelButton && (
                <Form.Item className="p-0 m-0">
                  <Button
                    type="secondary"
                    onClick={onCancel}
                    disabled={isLoading}
                  >
                    Cancelar
                  </Button>
                </Form.Item>
              )}
              <Form.Item className="p-0 m-0">
                <Button htmlType="submit" loading={isLoading}>
                  Salvar
                </Button>
              </Form.Item>
            </Space>
          </div>
        )}
      </Form>
    </AntModal>
  );
}

Modal.confirm = (props: ModalFuncProps) => {
  return AntModal.confirm({ ...props });
};

Modal.error = (props: ModalFuncProps) => {
  return AntModal.error(props);
};

Modal.info = (props: ModalFuncProps) => {
  return AntModal.info(props);
};

export { Modal };

export default Modal;
