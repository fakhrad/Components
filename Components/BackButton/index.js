import React from "react";
import { Navigation } from "react-native-navigation";
import Button from "./../Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { appConfig } from "./../../config/config";
import EStyleSheet from "react-native-extended-stylesheet";
const BackButton = ({ children, ...props }) => {
  backNavigate = p => {
    const navType = p["navType"];
    if (navType == undefined || navType == "stack") {
      Navigation.pop("mainAppStack");
    } else if (navType == "modal") {
      Navigation.dismissModal("modalNav");
    }
  };
  const backIconName =
    appConfig.getLang() == "fa" ? "arrow-right" : "arrow-left";
  let myStyle = {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    zIndex: 100
  };
  return (
    <Button
      {...props}
      style={[myStyle, props.style]}
      onPress={() => this.backNavigate(props)}
    >
      <Icon name={backIconName} style={styles.icon} />
    </Button>
  );
};

const styles = EStyleSheet.create({
  icon: {
    color: "$color2",
    fontSize: "$fontSize1 * 1.1",
  }
});

export default BackButton;
