import { Layout, theme } from "antd";
import { BasicProps } from "antd/es/layout/layout";
const { Header: AntHeader } = Layout;

interface IHeaderProps extends BasicProps {
  children?: React.ReactNode;
}

function Header({ children, ...rest }: IHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const tw = `
  top-0 w-full flex 
  justify-between
  `;
  return (
    <AntHeader
      className={tw}
      style={{ background: colorBgContainer }}
      {...rest}
    >
      {children}
    </AntHeader>
  );
}

export { Header };
