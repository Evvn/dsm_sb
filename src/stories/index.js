import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";

// component imports
import Colors from "../dsmComponents/Colors";
import TextStyles from "../dsmComponents/TextStyles";
import Icons from "../dsmComponents/Icons";
// component group imports
import { Buttons } from "./buttons.js";
import { SelectionControls } from "./selectionControls";
import { Inputs } from "./inputs";
import DemoForm from "../dsmComponents/Demo";

storiesOf("Vault DSM", module)
  .add("Colors", () => <Colors />)
  .add("Text Styles", () => <TextStyles />)
  .add("Icons", () => <Icons />)
  .add("Demo Form", () => <DemoForm />);

Buttons();
SelectionControls();
Inputs();
