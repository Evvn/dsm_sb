import React from "react";
import styled from "styled-components";

const Radio = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:focus {
  }

  &:active {
  }

  &:hover {
  }
`;

class RadioButton extends React.Component {
  render() {
    const { disabled } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <>
        <label>
          <Radio type="radio" style={style} />
        </label>
      </>
    );
  }
}

export default RadioButton;
