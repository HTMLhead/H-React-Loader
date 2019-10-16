import React from "react";
import styled, { keyframes } from "styled-components";

const faceRotating = keyframes`
  0% {
    transform: rotate(0deg);
  }
  2% {
    transform: rotate(90deg);
  }
  27% {
    transform: rotate(180deg);
  }
  52% {
    transform: rotate(270deg);
  }
}`;

const Square = styled.div`
  background-color: #eee;
  border-radius: 30%;
  width: 30px;
  height: 30px;
`;

export function DynamicRotate({ children }) {
  return <Square>{children}</Square>;
}
