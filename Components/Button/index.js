import React from "react";
import { TouchableOpacity } from "react-native";

// get default style .  it is respomsible to set default values from theme if user did not set them
const ButtonComponent = ({ children, ...props }) => {
  let theme = this.props.getCurrentTheme();
  var myStyle = {};
  let style = props.style;
  if (style == undefined || style.backgroundColor == undefined) {
    myStyle["backgroundColor"] = theme["$color1"];
  }
  if (style == undefined || style.justifyContent == undefined)
    myStyle["justifyContent"] = "center";

  if (style == undefined || style.alignItems == undefined)
    myStyle["alignItems"] = "center";

  return (
    <TouchableOpacity {...props} style={[myStyle, props.style]}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
