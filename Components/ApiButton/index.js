import React from "react";
import { TouchableOpacity } from "react-native";
import Spinner from "./../Spinner";
import { themeManager, stateManager, apiManager } from "@app-sdk/services";

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
      func(formContent)
        .then(result => {
          this.setState({ spinner: false });
          const status = result.status;
          if (status == 200) {
            if (this.props.onOk) {
              result.json().then(res => {
                const obj = {
                  inputs: stateManager.instance.lastState,
                  outputs: res
                };
                this.props.onOk(obj);
              });
            }
          }
          if (status == 201) {
            if (this.props.onCreated) {
              result.json().then(res => {
                const obj = {
                  inputs: stateManager.instance.lastState,
                  outputs: res
                };
                this.props.onCreated(obj);
              });
            }
          } else if (status == 400) {
            if (this.props.onBadRequest) {
              result.json().then(res => {
                const obj = {
                  inputs: stateManager.instance.lastState,
                  outputs: res
                };
                this.props.onBadRequest(obj);
              });
            }
          } else if (status == 500) {
            if (this.props.onServerError) {
              result.json().then(res => {
                const obj = {
                  inputs: stateManager.instance.lastState,
                  outputs: res
                };
                this.props.onServerError(obj);
              });
            }
          } else if (status == 404) {
            if (this.props.notFound) {
              result.json().then(res => {
                const obj = {
                  inputs: stateManager.instance.lastState,
                  outputs: res
                };
                this.props.notFound(obj);
              });
            }
          } else if (status == 401) {
            if (this.props.unAuthorized) {
              result.json().then(res => {
                const obj = {
                  inputs: stateManager.instance.lastState,
                  outputs: res
                };
                this.props.unAuthorized(obj);
              });
            }
          }
        })
        .catch(error => {});
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
