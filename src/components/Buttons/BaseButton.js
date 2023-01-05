import React from "react";
import styled from "styled-components";
import { config } from "../../uiconfig";
import { Utils } from "../../Utils";

export const initButton = (props) => {
  if (!props.backgroundColor) {
    return `
  &:hover {
      background-color: ${Utils.setColor(config.color.default, 30)}
  }
  &:active{
      background-color: ${Utils.setColor(config.color.default, 10)}
  }
`;
  }
  if (props.backgroundColor) {
    return `
  &:hover {
      background-color: ${Utils.setColor(props.backgroundColor, 30)}
  }
  &:active {
      background-color: ${Utils.setColor(props.backgroundColor, 10)}
  }
`;
  }
};

const BASE_BUTTON = styled.button`
  cursor: pointer;
  width: 100%;
  display: block;
  border-radius: 6px;
  background-color: ${(props) =>
    props.color ? props.color : config.color.default};

  height: 40px;
  ${(props) => initButton(props)}
`;

export default React.memo(BASE_BUTTON);
