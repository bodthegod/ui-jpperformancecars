// src/components/Footer.jsx

import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

const StyledFooter = styled(AntdFooter)`
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.7); // Adjust the opacity as needed
  color: #fff; // Assuming white text for better contrast
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      © 2024 JPPerformanceCars LTD. All rights reserved.
    </StyledFooter>
  );
}

export default Footer;
