import React from "react";
import styled, { keyframes } from "styled-components";

const faceRotating = keyframes`
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(100deg);
  }
  25% {
    transform: rotate(90deg);
  }
  30% {
    transform: rotate(190deg);
  }
  50% {
    transform: rotate(180deg);
  }
  55% {
    transform: rotate(280deg);
  }
  75% {
    transform: rotate(270deg);
  }
  80% {
    transform: rotate(370deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const Square = styled.div`
  animation: ${faceRotating} 3s infinite;
  background-color: #eee;
  border-radius: 30%;
  width: 50px;
  height: 50px;
`;

const ChildrenStyle = styled.div`
  z-index: 900;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 30px;
  height: 30px;
  overflow: hidden;
`;

const ChildrenContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
`;

export function DynamicRotate({ children, style }) {
  if (!style) {
    style = {};
  }
  return (
    <ChildrenContainer style={{ width: style.width, height: style.height }}>
      <ChildrenStyle style={{ width: style.innerWidth, height: style.innerHeight }}>
        {children}
      </ChildrenStyle>
      <Square style={{ width: style.width, height: style.height }} />
    </ChildrenContainer>
  );
}
