import React from "react";
import styled from "styled-components";

const CyanText = styled.p`
  color: cyan;
  font-size: 64px;
  font-family: sans-serif;

  transition: 0.3s ease all;
  :hover {
    color: pink;
  }
`;

class ExampleComponent extends React.Component {
  render() {
    return (
      <>
        <CyanText>I m p o r t e d [ 1 3 o z, V a i l , C O ]</CyanText>
      </>
    );
  }
}

export default ExampleComponent;
