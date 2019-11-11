import React from "react";
import styled from "styled-components";
import Icon from "../../components/Icon";

const SingleSelectContainer = styled.div``;

const Select = styled.select`
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
    border-color: ${props => props.theme.colorPaprikaSelected};
  }
`;

class SingleSelect extends React.Component {
  render() {
    const { disabled, options } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <SingleSelectContainer style={style}>
        <Select disabled={disabled}>
          {options.map(option => {
            return <option value={option}>{option}</option>;
          })}
        </Select>
        <Icon icon={"chevron-down"} size="12" color={"red"} />
      </SingleSelectContainer>
    );
  }
}

export default SingleSelect;
