import React from "react";
import { View } from "react-native";
import { appConfig } from "../../config/config";
import theme from "./../../themes/theme1";
// let theme;
// System.import("./../../themes/" + appConfig.APP_THEME).then(function (m) {
//     theme = m;
// });;
function getDefaultStyle(props) {
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
