import React from "react";
import { TextInput } from "react-native";
import { appConfig } from "../../config/config";
const Input = ({ children, ...props }) => {
  var myStyle = {
    textAlign: props.getCurrentLayout() == "ltr" ? "left" : "right"
  };
  return <TextInput {...props} style={[myStyle, props.style]} />;
};

export default Input;
