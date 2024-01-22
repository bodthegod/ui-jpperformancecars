// src/components/Header.jsx

import React from "react";
import { Layout, Menu, Typography, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const StyledHeader = styled(AntdHeader)`
  background-color: transparent;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledMenu = styled(Menu)`
  background-color: transparent;
  border-bottom: none;
  .ant-menu-item {
    color: #fff; // assuming white text color for the menu items
    margin-right: 40px; // adjust as needed
    border-bottom: none;
  }
  && .ant-menu-item:hover {
    color: #fff !important; // assuming a lighter color on hover
  }
  .ant-menu-item-active,
  .ant-menu-item-selected,
  .ant-menu-item-open {
    color: #fff !important;
    border-bottom: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: #000; // assuming a black background for the button
  color: #fff;
  border: none;
  &:hover {
    background-color: #333; // a slightly lighter black on hover
    color: #fff;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Title style={{ color: "#fff", margin: "20px 0" }} level={1}>
        JP Performance Cars
      </Title>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledMenu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact">Contact Me</Link>
          </Menu.Item>
          <Menu.Item key="4">Book</Menu.Item>
        </StyledMenu>
        <StyledButton>Login</StyledButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
