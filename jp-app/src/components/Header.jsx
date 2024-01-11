import React from "react";
import { Layout, Menu, Typography } from "antd";

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

function Header() {
  return (
    <AntdHeader
      style={{
        padding: "0 40px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Title style={{ color: "#fff", margin: "20px 0" }} level={1}>
        JP Performance Cars
      </Title>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
        <Menu.Item key="4">Book</Menu.Item>
      </Menu>
    </AntdHeader>
  );
}

export default Header;
