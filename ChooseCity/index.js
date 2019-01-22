import React from "react";
import { FlatList } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import translate from "./../../translation/translate";
import Button from "./../Button"; // public components
import Container from "./../Container"; // public components
import Text from "./../Text"; // public components
import Image from "./../Image"; // public components
import Input from "./../Input"; // public components
import { getCities } from "./../../authentication/service";
import { appConfig } from "./../../config/config";
import appStorage from "./../../lib/appStorage";
import * as types from "./../../redux/userInfo/actionTypes";
import styles from "./style";

class ChooseCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      selectedCity:
        this.props.userInfo != undefined && this.props.userInfo.city!= null 
          ? this.props.userInfo.city
          : this.props.selectedCity,
      isCitySelected: false,
      refreshing: false
    };
  }
  componentDidMount() {
    this.getAllCities();
  }
  async getAllCities() {
    var responce = await getCities();
    if (responce != undefined) {
      this.props.saveCities(responce);
      this.setState({ flatListData: responce, refreshing: false });
      this.arrayholder = responce;
    }
  }
  // filtering cities
  searchFilter = text => {
    const newData = this.arrayholder.filter(city =>
      city.name[appConfig.getLang()].startsWith(text)
    );
    this.setState({ flatListData: newData });
  };
  chooseCity = cityItem => {
    this.props.onSelectCity(cityItem);
  };
  handleRefresh() {
    appStorage.removeItem("cities");
    this.setState({ refreshing: true, flatListData: [] }, () => {
      this.getAllCities();
    });
  }
  toggleModal = () => {
    this.props.onClose();
  };
  // render each item of cities
  _renderItem = ({ item, index }) => (
    <Button
      style={styles.cityItemContainer}
      onPress={() => this.chooseCity(item)}
    >
      <Container
        style={[
          {
            backgroundColor:
              this.state.selectedCity.cityCode == item.cityCode
                ? "whitesmoke"
                : "white"
          },
          styles.cityItem
        ]}
      >
        <Image
          source={require("./../../authentication/assets/images/city.png")}
          style={styles.cityItemIcon}
        />
        <Text style={styles.cityItemText}>
          {item.name[appConfig.getLang()]}
        </Text>
      </Container>
    </Button>
  );

  render() {
    if (this.props.visibility === false) {
      return null;
    } else {
      return (
        <Modal isVisible={true} style={styles.modalContainer}>
          <Container style={styles.modal_header}>
            <Container style={styles.modal_header_iconContainer}>
              <Icon
                name="search"
                size={25}
                style={styles.modal_header_iconContainer_icon}
              />
            </Container>
            <Container style={styles.modal_header_inputContainer}>
              <Input
              placeholderTextColor={this.props.currentTheme.$color4}
              placeholder={translate.t(
                  "SIGNUP_INFO_MODAL_FILTER_PLACEHOLDER"
                )}
                style={styles.modal_header_inputContainer_input}
                onChangeText={text => this.searchFilter(text)}
              />
            </Container>
            <Button onPress={this.toggleModal} style={styles.modalClose}>
              <Icon name="close" style={styles.modalCloseIcon} />
            </Button>
          </Container>
          <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={this.state.flatListData}
            renderItem={this._renderItem}
            keyExtractor={item => item.cityCode.toString()}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
        </Modal>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  saveUserInfo: userInfo => {
    dispatch({
      type: types.SAVE_USER_INFO,
      value: userInfo
    });
  },
  saveCities: cities => {
    dispatch({
      type: types.CITIES_FETCHED,
      value: cities
    });
  }
});

function mapStateToProps(state, props) {
  return {
    userInfo: state.userReducer.userInfo,
    currentTheme:state.appReducer.currentTheme
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCity);
