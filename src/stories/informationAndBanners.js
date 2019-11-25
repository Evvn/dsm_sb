import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import InformationBox from "../dsmComponents/InformationBox/InformationBox";
import Banner from "../dsmComponents/Banner/Banner";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const InformationAndBanners = () => {
  return storiesOf("Information Boxes & Banners", module)
    .add(
      "Information Boxes",
      () => (
        <Components>
          <InformationBox
            type={"warning"}
            title={"Warning Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            type={"general"}
            title={"General Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            type={"success"}
            title={"Success Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            type={"alert"}
            title={"Alert Information Box Title"}
            body={"This is the body copy for the information box."}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Banners",
      () => (
        <Components>
          <Banner />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    );
};
