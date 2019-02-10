import React from "reactn";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import RNRestart from "react-native-restart";
import { stateManager } from "@app-sdk/services";
export default class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        stateManager.instance().setCurrentForm(this);
        Navigation.events().bindComponent(this);
    }
    componentDidAppear() {
        stateManager.instance().setCurrentForm(this);
    }
    get store() {
        return this.global;
    }
    restart() {
        RNRestart.Restart();
    }
    notifySuccess(text) {
        this.props.notify("success", text);
    }
    notifyError(text) {
        this.props.notify("error", text);
    }
    notifyWarning(text) {
        this.props.notify("warning", text);
    }
    alert(
        title = "Title",
        description = "",
        okText = "Ok",
        cancelTxt = "",
        onOk,
        onCancel
    ) {
        Alert.alert(
            title,
            description,
            [
                {
                    text: cancelTxt,
                    onPress: () => {
                        if (onCancel) onCancel();
                    },
                    style: "cancel"
                },
                {
                    text: okText,
                    onPress: () => {
                        if (onOk) onOk();
                    }
                }
            ],
            { cancelable: false }
        );
    }
}
