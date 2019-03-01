import React from "react";
import { View, Platform } from "react-native";
import { myViewStyle } from "./container_theme";
const Animatable = require("react-native-animatable");

const Container = ({ children, ...props }) => {
  let style = props.style;
  let myStyle = {};
  if (style == undefined || style.backgroundColor == undefined) {
    myStyle["backgroundColor"] = myViewStyle.$myViewBgColor;
  }
  if (Platform.OS === "android") {
    if (Platform.Version < 21) {
      if (style != undefined && style.elevation != undefined) {
        myStyle["borderColor"] = "lightgray";
        myStyle["borderWidth"] = 2;
      }
    }
  }
  if ({ ...props }.animation != undefined) {
    return (
      <Animatable.View {...props} style={[myStyle, props.style]}>
        {children}
      </Animatable.View>
    );
  } else {
    return (
      <View {...props} style={[myStyle, props.style]}>
        {children}
      </View>
    );
  }
};

export default Container;
