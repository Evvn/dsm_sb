import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import InputField from "../dsmComponents/Inputs/InputField";
import SegmentControl from "../dsmComponents/Inputs/SegmentControl";
import SingleSelect from "../dsmComponents/Inputs/SingleSelect";
import MultiSelect from "../dsmComponents/Inputs/MultiSelect";
import DateTimeInput from "../dsmComponents/Inputs/DateTimeInput";

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
            id={"i1"}
            disabled={false}
          />
          <InputField
            labelText={"Label"}
            placeholder={"Value"}
            id={"i2"}
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
            labelText={"Label"}
            options={["Select 1", "Select 2", "Select 3"]}
            id={"ss1"}
            groupName={"firstGroup"}
          />
          <SingleSelect
            labelText={"Label"}
            options={["Select 1", "Select 2"]}
            id={"ss2"}
            groupName={"secondGroup"}
          />
          <SingleSelect
            labelText={"Label"}
            options={["Select 1", "Select 2"]}
            id={"ss3"}
            groupName={"thirdGroup"}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Multi Select",
      () => (
        <Components>
          <MultiSelect
            labelText={"Label"}
            options={[
              "A Seed",
              "Two Seeds",
              "Tres Seeds",
              "Four And",
              "Five Seeds"
            ]}
            id={"ss1"}
            groupName={"firstGroup"}
          />
          <MultiSelect
            labelText={"Label"}
            options={[
              "A Seed",
              "Two Seeds",
              "Tres Seeds",
              "Four And",
              "Five Seeds"
            ]}
            id={"ss3"}
            groupName={"thirdGroup"}
            disabled={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Date/Time Picker",
      () => (
        <Components>
          <DateTimeInput
            labelText={"Label"}
            // options={[
            //   "A Seed",
            //   "Two Seeds",
            //   "Tres Seeds",
            //   "Four And",
            //   "Five Seeds"
            // ]}
            id={"ss1"}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    );
};
