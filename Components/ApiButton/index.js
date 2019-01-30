import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import Spinner from "./../Spinner";
import { themeManager, stateManager } from "@app-sdk/services";

export default class ApiButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { spinner: false };
    this.callApi = this.callApi.bind(this);
  }
  callApi = () => {
    if (!stateManager.instance.isDirty()) {
      this.setState({ spinner: true });
      var formContent = stateManager.instance.lastState;
      this.props
        .action(formContent)
        .then(result => {
          this.setState({ spinner: false });
          const status = result.status;
          if (status == 200) {
            if (this.props.onOk) {
              result.json().then(res => {
                this.props.onOk(res);
              });
            }
          }
          if (status == 201) {
            if (this.props.onCreated) {
              result.json().then(res => {
                this.props.onCreated(res);
              });
            }
          } else if (status == 400) {
            if (this.props.onBadRequest) {
              result.json().then(res => {
                this.props.onBadRequest(res);
              });
            }
          } else if (status == 500) {
            if (this.props.onServerError) {
              result.json().then(res => {
                this.props.onServerError(res);
              });
            }
          } else if (status == 404) {
            if (this.props.notFound) {
              result.json().then(res => {
                this.props.notFound(res);
              });
            }
          } else if (status == 401) {
            if (this.props.unAuthorized) {
              result.json().then(res => {
                this.props.unAuthorized(res);
              });
            }
          }
        })
        .catch(error => { });
    }
  };
  render() {
    let theme = themeManager.getAppTheme();
    var myStyle = {};
    let style = this.props.style;
    if (style == undefined || style.backgroundColor == undefined) {
      myStyle["backgroundColor"] = theme["$color1"];
    }
    if (style == undefined || style.justifyContent == undefined)
      myStyle["justifyContent"] = "center";

    if (style == undefined || style.alignItems == undefined)
      myStyle["alignItems"] = "center";
    return (
      <TouchableOpacity
        {...this.props}
        style={[myStyle, this.props.style]}
        onPress={this.callApi}
      >
        <Spinner
          size="small"
          show={this.state.spinner}
          style={{
            position: "absolute",
            right: "5%"
          }}
        />
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
