import { Avatar, Card, IconButton } from "react-native-paper";
import { Text } from "react-native";
import React from "react";
import { stylesState } from "../Styles/Stylo";

export function State(prop) {
  return (
    <Card.Title
      style={stylesState.container}
      title={prop.title}
      subtitle={prop.subtitle}
      left={(props) => (
        <Avatar.Image size={50} source={require("../img/mujer.jpg")}
        style={stylesState.avatar}
        />
      )}
      right={(props) => <Text style={prop.styleF}>{prop.text}</Text>}
    />
  );
}
