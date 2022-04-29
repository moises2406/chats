import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "../Styles/Stylo";
import React from "react";
import { Chats } from "../Components/Chats";
import { State } from "../Components/State";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ChatScreen = () => {
  return (
    <View style={styles.draperContainer}>
      <Chats />
      <StatusBar style="auto" />
    </View>
  );
};
const StateScreen = () => {
  return (
    <View >
      <State
      title="Maria"
      subtitle="Hola, estoy en una conversación"
      />
      <StatusBar style="auto" />
    </View>
  );
};
const LLamadaScreen = () => {
  return (
    <View >
      <State
      title="Maria"
      subtitle="LLamada perdida"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default function indexWeb() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Chat" component={ChatScreen}  />
        <Stack.Screen name="State" component={StateScreen} />
        <Stack.Screen name="Depócitos" component={ChatScreen} />
        <Stack.Screen name="LLamadas" component={LLamadaScreen} />
        <Stack.Screen name="Configuracion" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
