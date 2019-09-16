import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const Icon = styled.svg`
  fill: none;
  stroke-width: 4px;
  stroke: ${props => props.theme.colorPaprika};
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #737373;
  border-radius: 2px;
  transition: 200ms ease-in-out all;

  ${HiddenCheckbox}:focus + & {
    border-color: ${props => props.theme.colorCayenneSelected};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

class Checkbox extends React.Component {
  state = {
    checked: false
  };

  handleCheckboxChange = e => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    const { checked } = this.state;
    const { disabled } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <CheckboxContainer>
        <HiddenCheckbox
          checked={checked}
          onChange={this.handleCheckboxChange}
        />
        <StyledCheckbox checked={checked} style={style}>
          <Icon viewBox="0 0 22 38">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
}

export default Checkbox;
