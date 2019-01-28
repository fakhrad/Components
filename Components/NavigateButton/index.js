import React from "react";
import { TouchableOpacity } from "react-native";
import { themeManager, navManager } from "@app-sdk/services";

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
    navigateTo = () => {
        if (props.source) {
            let navType = props.navType ? props.navType.toLowerCase() : "screen";
            if (navType == "screen") {
                navManager.openScreen(props.source, props);
            } else if (navType == "modal") {
                navManager.showModal(props.source, props);
            } else {
                console.log("invalid type of navigation");
            }
        }
    };
    return (
        <TouchableOpacity
            {...props}
            style={[myStyle, props.style]}
            onPress={this.navigateTo}
        >
            {children}
        </TouchableOpacity>
    );
};

export default ButtonComponent;
