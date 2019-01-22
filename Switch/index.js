import React from "react";
import { Switch } from "react-native";
const SwitchComponent = ({ children, ...props }) => {
  return <Switch {...props} />;
};

export default SwitchComponent;
