import React from "react";
import { TouchableOpacity } from "react-native";
import { appConfig } from "./../../config/config";

// get default style .  it is respomsible to set default values from theme if user did not set them
const ButtonComponent = ({ children, ...props }) => {
  let theme = appConfig.getCurrentTheme();
  var myStyle = {};
  let style = props.style;
  if (style == undefined || style.backgroundColor == undefined) {
    myStyle["backgroundColor"] = theme["$color1"];
  }
  if (style == undefined || style.justifyContent == undefined)
    myStyle["justifyContent"] = "center";

  if (style == undefined || style.alignItems == undefined)
    myStyle["alignItems"] = "center";

  if ({ ...props }.animation != undefined) {
    const Animatable = require("react-native-animatable");
    var TouchabeOpacityAnim = Animatable.createAnimatableComponent(
      "TouchableOpacity"
    );
    return (
      <TouchableOpacity {...props} style={[myStyle, props.style]}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity {...props} style={[myStyle, props.style]}>
        {children}
      </TouchableOpacity>
    );
  }
};

export default ButtonComponent;
