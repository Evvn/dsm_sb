import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

import CloseClear from "../Icons/close-clear-12px.svg";
import { ReactComponent as WarningIcon } from "../Icons/warning-2-20px.svg";
import { ReactComponent as InfoIcon } from "../Icons/information-20px.svg";
import { ReactComponent as SuccessIcon } from "../Icons/check-20px.svg";
import { ReactComponent as AlertIcon } from "../Icons/alert-20px.svg";

// how to hack in icons from sketch
// <div dangerouslySetInnerHTML={{ __html: add_12px }} />
// import { add_12px } from "../Icons/icons";

const InformationBoxContainer = styled.div`
  display: inline-block;
  position: relative;
  border: 2px solid;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  min-width: 600px;
  min-height: 80px;
  padding: 16px 44px 20px 44px;
`;

const Title = styled.span.attrs({ className: "font-body-2" })`
  display: block;
  font-family: "Muli-Bold";
  margin-bottom: 4px;
`;

const Body = styled.span.attrs({ className: "font-body-1" })`
  display: block;
`;

const CloseIcon = styled.img.attrs({ src: CloseClear })`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const InformationIcon = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
`;

class InformationBox extends React.Component {
  render() {
    const { type, title, body, theme } = this.props;
    const boxStyle = {};
    let iconStyle = {};
    let iconSrc = "";
    let iconFill = "#737373";

    type === "warning" &&
      (boxStyle["borderColor"] = theme.colorTurmericAttentionWarning) &&
      (iconSrc = <WarningIcon />) &&
      (iconFill = { fill: theme.colorTurmericAttentionWarning });
    type === "general" &&
      (boxStyle["borderColor"] = theme.colorJuniperInformation) &&
      (iconSrc = <InfoIcon />) &&
      (iconFill = { fill: theme.colorJuniperInformation });
    type === "success" &&
      (boxStyle["borderColor"] = theme.colorMintSuccess) &&
      (iconSrc = <SuccessIcon />) &&
      (iconFill = { fill: theme.colorMintSuccess });
    type === "alert" &&
      (boxStyle["borderColor"] = theme.colorCayenneAlertTermination) &&
      (iconSrc = <AlertIcon />) &&
      (iconFill = { fill: theme.colorCayenneAlertTermination });

    return (
      <InformationBoxContainer style={boxStyle}>
        <InformationIcon>{iconSrc}</InformationIcon>
        <CloseIcon />
        <Title>{title}</Title>
        <Body>{body}</Body>
      </InformationBoxContainer>
    );
  }
}

export default withTheme(InformationBox);
