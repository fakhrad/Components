import React from "react";
import { themeManager } from "@app-sdk/services";
import Container from "./../Container";

const Header = ({ children, ...props }) => {
  let theme = themeManager.getAppTheme();
  let style = props.style;
  let myStyle = {};

  if (style == undefined || style.backgroundColor == undefined) {
    myStyle["backgroundColor"] = theme.$color1;
  }
  if (style == undefined || style.height == undefined) {
    myStyle["height"] = "10%";
  }
  if (style == undefined || style.flexDirection == undefined) {
    myStyle["flexDirection"] = "row";
  }
  return (
    <Container {...props} style={[myStyle, props.style]}>
      {children}
    </Container>
  );
};

export default Header;
