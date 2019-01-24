import React from "react";
import { FlatList } from "react-native";
const FlatListComponent = ({ children, ...props }) => {
    return <FlatList {...props} / >
};

export default FlatListComponent;
