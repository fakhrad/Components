import React from "react";
import Input from "../Input";
export default class PhoneNumberInput extends React.Component {
  constructor(props) {
    super(props);
  }
  validatePhoneNumber = phoneNumber => {
    var re = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    return re.test(phoneNumber);
  };
  onChangeText = phone => {
    if (!this.validatePhoneNumber(phone)) {
      this.props.onChange(false, phone);
    } else {
      this.props.onChange(true, phone);
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
