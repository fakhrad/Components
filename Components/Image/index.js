import React from "react";
import { Image } from "react-native";

export default class ImageComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Image {...this.props} />
    }
}
