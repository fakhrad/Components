import React from "react";
import { ScrollView } from "react-native";
const ScrollViewComponent = ({ children, ...props }) => {
  return (
    <ScrollView {...props} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewComponent;
