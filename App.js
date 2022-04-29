import { Platform } from "react-native";
import ChatsWeb from "./web/indexWeb";
import ChatsAndroid from "./android/indexAndroid";
import ChatsIos from "./ios/indexIos";

export default function App() {
  switch (Platform.OS) {
    case "ios":
      return <ChatsIos />;
    case "android":
      return <ChatsAndroid />;
    default:
      return <ChatsWeb />;
  }
}
