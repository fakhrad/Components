import React from "react";
import { Text } from "react-native";
import { themeManager } from "@app-sdk/services";
const TextComponent = ({ children, ...props }) => {
  var myStyle = {
    fontFamily: themeManager.getAppTheme().$fontFamily1
  };
  if (props.style == undefined || props.style.fontSize == undefined) {
    myStyle["fontSize"] = themeManager.getAppTheme().$fontSize5;
  }
  if (props.style == undefined || props.style.textAlign == undefined) {
    myStyle["textAlign"] = "left";
  }
  return (
    <Text {...props} style={[myStyle, props.style]}>
      {children}
    </Text>
  );
};

export default TextComponent;
