import RF from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { appConfig } from "./../../config/config";

const { width : deviceWidth , height : deviceHeight} = Dimensions.get('window');


const styles = EStyleSheet.create({
  modalContainer: {
    backgroundColor: "$color2",
    justifyContent: "flex-start",
    borderRadius: 5,
    zIndex: 100
  },
  modal_header: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: "row",
    backgroundColor: "$color1",
    elevation: 10
  },
  modalClose: {
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingRight: 20
  },
  modalCloseIcon: {
    fontSize: "$fontSize2",
    color: "$color2"
  },
  modal_header_iconContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  modal_header_iconContainer_icon: {
    fontSize: "$fontSize4",
    color: "$color2"
  },
  modal_header_iconContainer_input: {
      fontSize: "$fontSize6",
    marginRight: 10
  },
  modal_header_inputContainer: {
    flex: 1,
    backgroundColor: "transparent"
  },
  modal_header_inputContainer_input: {
      fontSize: "$fontSize4",
    marginRight: 10,
    textAlign: "left",
    color: "$color2"
  },
  flatListContainer: {
    backgroundColor: "$color2"
  },
  cityItemContainer: {
    backgroundColor: "transparent"
  },
  cityItem: {
    width: "100%",
    flexDirection: "row",
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: "center",
    borderBottomColor: "$color3",
    borderBottomWidth: 1
  },
  cityItemIcon: {
    marginRight: 20,
    width: (deviceWidth * 10) / 100,
    height: (deviceWidth * 10) / 100
  },
  cityItemText: {
    marginTop: "5%",
    marginBottom: "5%",
    fontWeight: "bold",
      fontSize: "$fontSize5",
    fontFamily: "$fontFamily1"
  }
});

export default styles;
