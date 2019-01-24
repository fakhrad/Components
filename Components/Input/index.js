import React from "react";
import { TextInput } from "react-native";
const Input = ({ children, ...props }) => {
  var myStyle = {
    textAlign:"right"
  };
  return <TextInput {...props} style={[myStyle, props.style]} />;
};

export default Input;
