import React from "react";
import Text from "./../Text";
import moment from "moment/min/moment-with-locales";
const DateTextComponent = ({ children, ...props }) => {
    
  let date = "";
  if (props.date) {
    date = moment(props.date).fromNow();
  }
  return (
    <Text {...props} style={props.style}>
      {date}
    </Text>
  );
};

export default DateTextComponent;
