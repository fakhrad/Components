import React from "react";
import Input from "../Input";
import { stateManager } from "@app-sdk/services";

export default class StringInput extends React.Component {
    constructor(props) {
        super(props);
        if (props.bind) {
            stateManager.instance().bindComponentToForm(props.bind);
        }
    }
    handleTextChanged = text => {
        if (this.props.isRequired) {
            if (text.length == 0) {
                stateManager.instance().setDirty(this.props.bind, true);
            } else {
                stateManager.instance().setValue(this.props.bind, text);
                stateManager.instance().setDirty(this.props.bind, false);
            }
        } else {
            stateManager.instance().setValue(this.props.bind, text);
        }
    };
    render() {
        return (
            <Input
                {...this.props}
                onChangeText={this.props.bind ? this.handleTextChanged : undefined}
            />
        );
    }
}
