import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const FloatButton = ({ tooltip }) => (
  <FloatButton type="primary" shape="circle" icon={tooltip} />
);

export default FloatButton;
