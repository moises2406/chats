import { StatusBar } from "expo-status-bar";
import { View, TextInput } from "react-native";
import React, { useEffect } from "react";
import { Chip, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import io from "socket.io-client";
import { styles } from "../Styles/Stylo";

// initialize socket
const socket = io("http://localhost:3000/", {
  transports: ["websocket"],
});


export function Chats() {
  const [ID, setID] = React.useState("");
  const [text, setText] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  try {
    socket.on("connect", () => {
      console.log("connected");

      socket.on("id", (id) => {
        setID(id);
      });
    });
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    socket.on("chat", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const EventEmit = () => {
    socket.emit("chat", {text: text, id: ID, time: Date.now()});
    setText("");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {messages.map(({text,id,time}) => {
      console.log(text);

         if (id === ID) {
          return (
            <View key={time}>
            <Chip style={styles.text} >{text}</Chip>
          </View>
          );
        } else {
          return (
            <View key={time}>
            <Chip >{text}</Chip>
          </View>
          );}

      })}
      <View style={styles.from}>
        <TextInput
         style={styles.input}
          onChangeText={(e) => setText(e)} 
          value={text}
           autoFocus={true} 
            placeholder="Type a message"
            onSubmitEditing={EventEmit}
           />

        <Button onPress={EventEmit}>
          <Icon name="ios-send" size={30} color="black" />
        </Button>
      </View>
    </View>
  );
}
