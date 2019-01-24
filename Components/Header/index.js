import React from "react";
import { View } from "react-native";
import { themeManager } from "@app-sdk/services";
function getDefaultStyle(props) {
    let theme= themeManager.getAppTheme();
    let style = props.style;
    let myStyle = {};
    if (style != undefined) {
        for (const key in style) {
            myStyle[key] = style[key];
        }
    }
    if (style == undefined || style.backgroundColor == undefined) {
        myStyle["backgroundColor"] = theme.$color1;
    }
    if (style == undefined || style.height == undefined) {
        myStyle["height"] = "10%";
    }
     if (style == undefined || style.flexDirection == undefined) {
         myStyle["flexDirection"] = 'row';
    }
    return myStyle;
}
const Header = ({ children, ...props }) => {
    return <View {...props} style={getDefaultStyle(props)}>
        {children}
    </View>;
};

export default Header;
