import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import Spinner from "./../Spinner";
import { themeManager, stateManager, apiManager } from "@app-sdk/services";

export default class ApiButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { spinner: false };
    this.callApi = this.callApi.bind(this);
  }
  callApi = () => {
    if (!stateManager.instance().isDirty() && this.props.action) {
      var formContent = stateManager.instance().lastState();
      const func = apiManager.instance.get(
        this.props.action["api"],
        this.props.action["func"]
      );
      if (!func) {
        console.log(
          "Fucntion Not Found!",
          this.props.action["api"],
          this.props.action["func"]
        );
        return;
      }
      this.setState({ spinner: true });
      let f = func();
      if (f.onOk)
        f.onOk(result => {
          this.setState({ spinner: false });
          if (this.props.onOk) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.onOk(obj);
          }
        });
      if (f.onCreated)
        f.onCreated(result => {
          this.setState({ spinner: false });
          if (this.props.onCreated) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.onCreated(obj);
          }
        });
      if (f.onBadRequest)
        f.onBadRequest(result => {
          this.setState({ spinner: false });
          if (this.props.onBadRequest) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.onBadRequest(obj);
          }
        });
      if (f.notFound)
        f.notFound(result => {
          this.setState({ spinner: false });
          if (this.props.notFound) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.notFound(obj);
          }
        });
      if (f.onServerError)
        f.onServerError(result => {
          this.setState({ spinner: false });
          if (this.props.onServerError) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.onServerError(obj);
          }
        });
      if (f.unAuthorized)
        f.unAuthorized(result => {
          this.setState({ spinner: false });
          if (this.props.unAuthorized) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.unAuthorized(obj);
          }
        });
      if (f.onConnectionError)
        f.onConnectionError(result => {
          this.setState({ spinner: false });
          if (this.props.onConnectionError) {
            const obj = {
              inputs: stateManager.instance().lastState(),
              outputs: result
            };
            this.props.onConnectionError(obj);
          }
        });
      if (f.call) f.call(formContent);
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
