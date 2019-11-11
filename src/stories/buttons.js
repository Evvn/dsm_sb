import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import LinkButton from "../dsmComponents/Buttons/LinkButton";
import PrimaryButton from "../dsmComponents/Buttons/PrimaryButton";
import GhostButton from "../dsmComponents/Buttons/GhostButton";
import DeleteButton from "../dsmComponents/Buttons/DeleteButton";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const Buttons = () => {
  return storiesOf("Buttons", module)
    .add(
      "link",
      () => (
        <Components>
          <LinkButton btnText={"Link Button"} />
          <LinkButton btnText={"Link Disabled"} disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5d6385cf601a70a1857233ed" }
      }
    )
    .add(
      "primary",
      () => (
        <Components>
          <PrimaryButton btnText={"Primary Button"} />
          <PrimaryButton btnText={"Primary Disabled"} disabled={true} />
          <PrimaryButton btnText={"Primary Full Width"} fullWidth={true} />
          <PrimaryButton
            btnText={"Primary Full Width Disabled"}
            disabled={true}
            fullWidth={true}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "5d6382d3813e854c1bc6951b" }
      }
    )
    .add(
      "ghost",
      () => (
        <Components>
          <GhostButton btnText={"Ghost Button"} />
          <GhostButton btnText={"Ghost Disabled"} disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5d63859e722baa3d7c5b3fa8" }
      }
    )
    .add(
      "termination",
      () => (
        <Components>
          <DeleteButton btnText={"Delete Button"} />
          <DeleteButton btnText={"Delete Disabled"} disabled={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "5d6382dd8bfc2608f3f4ba1e" }
      }
    );
};
