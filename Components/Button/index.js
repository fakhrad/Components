import React from "react";
import { TouchableOpacity, Platform} from "react-native";
import { themeManager } from "@app-sdk/services";

// get default style .  it is respomsible to set default values from theme if user did not set them
const ButtonComponent = ({ children, ...props }) => {
  let theme = themeManager.getAppTheme();
  var myStyle = {};
  let style = props.style;
  if (style == undefined || style.backgroundColor == undefined) {
    myStyle["backgroundColor"] = theme["$color1"];
  }
  if (style == undefined || style.justifyContent == undefined)
    myStyle["justifyContent"] = "center";

  if (style == undefined || style.alignItems == undefined)
    myStyle["alignItems"] = "center";

  if (Platform.OS === "android") {
    if (Platform.Version < 21) {
      if (style != undefined && style.elevation != undefined) {
        myStyle["borderColor"] = "lightgray";
        myStyle["borderWidth"] = 2;
      }
    }
  }
  return (
    <TouchableOpacity {...props} style={[myStyle, props.style]}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
