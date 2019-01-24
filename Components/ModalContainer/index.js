import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Container from "./../Container";
import styles from "./style";

const ModalContainer = ({ children, ...props }) => {
  closePicker = () => {
    props.onClose();
  };
  return (
    <TouchableWithoutFeedback
      style={[styles.modalWrapper, { flex: 1 }]}
      onPress={this.closePicker}>
      <Container style={{ flex: 1, backgroundColor: "transparent" }}>
        <TouchableWithoutFeedback style={styles.modalWrapper}>
          {children}
        </TouchableWithoutFeedback>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default ModalContainer;
