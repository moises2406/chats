import { StyleSheet } from "react-native";

export let styles = StyleSheet.create({
  draperContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    paddingBottom: "3rem",
    fontFamily: "san-serif",
  },
  from: {
    flexDirection: "row",
    padding: "0.25rem",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    height: "3rem",
    boxShadow: "0px -1px 0px rgba(1, 180, 127, 0.911)",
    backgroundColor: "blur(10px)",
  },
  input: {
    border: "none",
    padding: 10,
    flexGrow: 1,
    borderRadius: "1rem",
    margin: "0.25rem",
    backgroundColor: "rgb(226, 226, 226)",
  },
  text: {
    backgroundColor: "rgb(200, 244, 252)",
  },
});
export let stylesState = StyleSheet.create({

  container: {
    backgroundColor: "#ffffff",
    borderBottomWidth: "1px",
    borderBottomColor: "#e0e0e0",

  },
  tex: {
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold",
    borderRadius: "1rem",
    padding: "0.25rem",
    backgroundColor: "rgb(200, 244, 252)",
    margin: "0.25rem",
  },
  avatar: {
    
  },

});