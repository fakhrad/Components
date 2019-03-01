import React from "react";
import { TextInput } from "react-native";
import { languageManager } from "@app-sdk/services";
const Input = ({ children, ...props }) => {
  var myStyle = {
    textAlign: languageManager.isRTL ? "right" : "left"
  };
  return <TextInput {...props} style={[myStyle, props.style]} />;
};

export default Input;
