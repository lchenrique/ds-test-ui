import { createContext, ReactNode, useState } from "react";
import { uuid } from "..";
import { Drawer, IDrawer } from "../components/Feedback/Drawer";
type DrawerType = Omit<IDrawer, "ApiService">;

export interface DrawerContextProps {
  open: { [x: string]: boolean } | null;
  closeDrawer: (key: string) => void;
  openDrawer: (props: DrawerType) => void;
}
export const DrawerContext = createContext<DrawerContextProps>(
  {} as DrawerContextProps,
);

export const DrawerProvider = ({
  children,
  config,
  ApiService,
}: {
  ApiService: any;
  children: ReactNode;
  config?: {
    cancelText?: string;
    okText?: string;
  };
}) => {
  const [mainDrawer, setMainDrawer] = useState<DrawerType[]>(
    [] as DrawerType[],
  );
  const [open, setOpen] = useState<{ [x: string]: boolean } | null>(null);

  const closeDrawer = async (key: any, callback?: () => void) => {
    setOpen({ ...open, [key]: false });
    open && delete open[key];

    const drawerFiltered = mainDrawer.filter((drawer) => drawer.key !== key);
    setMainDrawer(drawerFiltered);

    setOpen({ ...open });

    callback && callback;
  };

  const openDrawer = (props: DrawerType) => {
    const newDrawer = {
      key: props?.key || uuid(),
      title: props.title,
      subTitle: props.subTitle,
      content: props?.content,
      onCancel: props.onCancel,
      onOk: props.onOk,
      cancelText: props.cancelText,
      okText: props.okText,
      drawerProps: props.drawerProps,
      hideCancelButton: props.hideCancelButton,
      visible: true,
      form: props.form,
    };
    setMainDrawer([...mainDrawer, newDrawer]);
    setOpen({ ...open, [newDrawer.key]: true });
  };
  return (
    <DrawerContext.Provider value={{ open, closeDrawer, openDrawer }}>
      {mainDrawer.length > 0 &&
        mainDrawer.map((v) => {
          return (
            v?.content && (
              <Drawer
                ApiService={ApiService}
                key={v.key}
                visible={open && (open[v.key!] as any)}
                title={v?.title}
                subTitle={v?.subTitle}
                content={v?.content}
                onCancel={() => closeDrawer(v.key)}
                onOk={v?.onOk}
                cancelText={v.cancelText || config?.cancelText}
                okText={v.okText || config?.okText}
                drawerProps={v.drawerProps}
                hideCancelButton={v.hideCancelButton}
                form={v?.form}
              />
            )
          );
        })}
      {children}
    </DrawerContext.Provider>
  );
};
