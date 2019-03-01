import React, { memo } from "react";
import { SectionList } from "react-native";
import { Text, Container } from "@app-sdk/components";
const SectionListComponent = ({ children, ...props }) => {
  const Widget = props.widget;
  const Header = props.header;
  renderHeader = section => {
    return section.data && section.data.length > 0 ? (
      <Header section={section} />
    ) : (
      undefined
    );
  };

  onItemPressed = selected => {
    let sectionData;
    if (props.onItemPressed) {
      for (let i = 0; i < props.sections.length; i++) {
        if (sectionData) {
          break;
        }
        const section = props.sections[i];
        for (let j = 0; j < section.data.length; j++) {
          const data = section.data[j];
          if (data.id === selected.id) {
            sectionData = section.data;
            break;
          }
        }
      }
      props.onItemPressed(selected, sectionData);
    }
  };
  onItemLongPressed = selected => {
    let sectionData;
    if (props.onItemLongPressed) {
      // for (let i = 0; i < props.sections.length; i++) {
      //   if (sectionData) {
      //     break;
      //   }
      //   const section = props.sections[i];
      //   for (let j = 0; j < section.data.length; j++) {
      //     const data = section.data[j];
      //     if (data.id === selected.id) {
      //       sectionData = section.data;
      //       break;
      //     }
      //   }
      // }
      props.onItemLongPressed(selected);
    }
  };

  _renderItem = (section, index, item) => {
    if (props.numColumns == undefined || props.numColumns == 1) {
      return <Widget key={item.id} data={item} index={index} />;
    } else {
      if (section.data && section.data.length > 0) {
        const { numColumns } = props;

        if (index % numColumns !== 0) return null;

        const items = [];

        for (let i = index; i < index + numColumns; i++) {
          if (section.data.length > 0) {
            if (i >= section.data.length) {
              break;
            }
            items.push(
              <Widget
                onPressed={selected => onItemPressed(selected)} 
                onLongPressed={selected => onItemLongPressed(selected)} 
                key={section.data[i].id + section.data[i].name}
                data={section.data[i]}
                index={index}
              />
            );
          }
        }

        return (
          <Container
            key={section.title + index}
            animation="zoomIn"
            style={{
              backgroundColor: "transparent",
              flex: 1,
              flexDirection: "row"
            }}
          >
            {items}
          </Container>
        );
      }
    }
  };
  return (
    <SectionList
      style={props.style}
      renderSectionHeader={({ section }) => this.renderHeader(section)}
      renderItem={({ item, index, section }) =>
        this._renderItem(section, index, item)
      }
      sections={props.sections}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default memo(SectionListComponent);
