import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import RadioButton from "../dsmComponents/SelectionControls/RadioButton";
import Checkbox from "../dsmComponents/SelectionControls/Checkbox";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const SelectionControls = () => {
  return storiesOf("Selection Controls", module)
    .add(
      "radio button",
      () => (
        <Components>
          <RadioButton />
          <RadioButton disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "checkbox",
      () => (
        <Components>
          <Checkbox />
          <Checkbox disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    );
};
