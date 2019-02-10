import React from "react";
import Input from "../Input";
import { stateManager } from "@app-sdk/services";
export default class PhoneNumberInput extends React.Component {
  constructor(props) {
    super(props);
    if (props.bind) {
      stateManager.instance().bindComponentToForm(props.bind);
      if (props.defaultValue) {
        stateManager.instance().setValue(props.bind, props.defaultValue);
        stateManager.instance().setDirty(props.bind, false);
      }
    }
  }
  validatePhoneNumber = phoneNumber => {
    var re = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    return re.test(phoneNumber);
  };
  onChangeText = phone => {
    if (this.props.isRequired) {
      if (phone.length == 0) {
        stateManager.instance().setDirty(this.props.bind, true);
      } else {
        if (!this.validatePhoneNumber(phone)) {
          stateManager.instance().setDirty(this.props.bind, true);
        } else {
          stateManager.instance().setValue(this.props.bind, phone);
          stateManager.instance().setDirty(this.props.bind, false);
        }
      }
    } else {
      stateManager.instance().setValue(this.props.bind, phone);
    }
  };
  render() {
    return (
      <Input
        {...this.props}
        onChangeText={text => this.onChangeText(text)}
        keyboardType="number-pad"
      />
    );
  }
}
