import React from "react";
import styled, { keyframes } from "styled-components";

const Face = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: 5px solid #000;
  border-radius: 50%;
`;

const Eye = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
`;

const Mouse = styled.div`
  display: inline-block;
  width: 12px;
  height: 6px;
  border-radius: 0 0 7.5px 7.5px;
  border: 3px solid #000;
  border-top: 0;
  position: absolute;
  bottom: 3px;
  left: 6px;
`;

export default function SpinnerFace() {
  return (
    <Face>
      <Eye style={{ position: "absolute", top: "7px", left: "5px" }} />
      <Eye style={{ position: "absolute", top: "7px", right: "5px" }} />
      <Mouse />
    </Face>
  );
}
