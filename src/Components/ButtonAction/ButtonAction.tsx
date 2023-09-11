import React, {FC} from 'react';
import styled from "styled-components";
import {IButtonAction} from "./types";

const ButtonActionComponent = styled.div<{ width: string, height: string }>`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 60px;
  font-size: 16px;
  line-height: 18.75px;
  font-weight: 400;
  cursor: pointer;
`;

const ButtonAction: FC <IButtonAction>= ({text, action, width, height}) => {
    return (
        <ButtonActionComponent onClick={action} width={width} height={height}>
            {text}
        </ButtonActionComponent>
    );
};

export default ButtonAction;