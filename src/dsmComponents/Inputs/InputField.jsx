import React from "react";
import styled from "styled-components";

const InputContainer = styled.div``;

const TextInput = styled.input`
  height: 36px;
  width: 300px;
  border: 1px solid #737373;
  border-radius: 3px;
  outline: none;
  padding: 8px 12px;
  margin: 4px 0;
  transition: 200ms ease-in-out all;

  &:hover:not(:disabled) {
    background-color: #fdf5f2;
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.colorCayenneActive};
  }
`;

const InputLabel = styled.label`
  display: block;
  color: ${props => props.theme.colorCardomomText};
`;

const Error = styled.span`
  display: block;
  color: ${props => props.theme.colorCayenneAlertTermination};
`;

class InputField extends React.Component {
  render() {
    const { disabled, labelText, errorMessage, placeholder } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <InputContainer style={style}>
        <InputLabel className="font-caption-1">{labelText}</InputLabel>
        <TextInput placeholder={placeholder} disabled={disabled} />
        <Error className="font-caption-1">{errorMessage}</Error>
      </InputContainer>
    );
  }
}

export default InputField;
