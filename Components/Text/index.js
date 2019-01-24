import React from "react";
import { Text } from "react-native";
import { themeManager } from "@app-sdk/services";
const TextComponent = ({ children, ...props }) => {
  var currentTheme = themeManager.getAppTheme();
  var myStyle = {
    fontFamily: currentTheme.$fontFamily1
  };
  if (
    { ...props }.style == undefined ||
    { ...props }.style.fontSize == undefined
  ) {
    myStyle["fontSize"] = currentTheme.$fontSize5;
  }
  return (
    <Text {...props} style={[myStyle, props.style]}>
      {children}
    </Text>
  );
};

export default TextComponent;
