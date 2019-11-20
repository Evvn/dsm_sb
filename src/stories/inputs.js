import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import InputField from "../dsmComponents/Inputs/InputField";
import SegmentControl from "../dsmComponents/Inputs/SegmentControl";
import SingleSelect from "../dsmComponents/Inputs/SingleSelect";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const Inputs = () => {
  return storiesOf("Inputs", module)
    .add(
      "Input Field",
      () => (
        <Components>
          <InputField
            labelText={"Label"}
            placeholder={"Value"}
            errorMessage={"error message"}
            disabled={false}
          />
          <InputField
            labelText={"Label"}
            placeholder={"Value"}
            errorMessage={"error message"}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5d638658601a707de17233fe" }
      }
    )
    .add(
      "Segment Control",
      () => (
        <Components>
          <SegmentControl
            segments={["Left", "Center", "Right"]}
            groupName={"firstGroup"}
          />
          <SegmentControl
            segments={["Left", "Right"]}
            groupName={"secondGroup"}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Single Select",
      () => (
        <Components>
          <SingleSelect
            options={["Select 1", "Select 2", "Select 3"]}
            groupName={"firstGroup"}
          />
          <SingleSelect
            options={["Select 1", "Select 2"]}
            groupName={"secondGroup"}
          />
          <SingleSelect
            options={["Select 1", "Select 2"]}
            groupName={"thirdGroup"}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    );
};
