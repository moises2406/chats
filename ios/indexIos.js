import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "../Styles/Stylo";
import React from "react";
import { Chats } from "../Components/Chats";

export default function indexIos() {
  return (
    <View style={styles.draperContainer}>
      <Chats />
      <StatusBar style="auto" />
    </View>
  );
}
