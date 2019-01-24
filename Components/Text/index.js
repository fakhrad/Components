import React from "react";
import { Text } from "react-native";
import { appConfig } from "./../../config/config";
const TextComponent = ({ children, ...props }) => {
  var currentTheme = props.getCurrentTheme();
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
