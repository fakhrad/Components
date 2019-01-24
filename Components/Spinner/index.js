import React from "react";
import { ActivityIndicator } from "react-native";
import { themeManager } from "@app-sdk/services";
const Spinner = ({ children, ...props }) => {
  let theme = themeManager.getAppTheme();
  if ({ ...props }.show == undefined || { ...props }.show == false) {
    return null;
  }
  if ({ ...props }.color == undefined)
    if (
      { ...props }.style != undefined &&
      { ...props }.style.color != undefined
    ) {
      props["color"] = { ...props }.style.color;
    } else {
      props["color"] = theme["$color2"];
    }
  return <ActivityIndicator {...props} />;
};

export default Spinner;
