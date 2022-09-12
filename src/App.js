import React from "react";
import { StyleSheet, View } from "react-native";
import EventInput from "./components/EventInput";
import MyButton from "./components/MyButton";

function App() {
  const name = "Neo";
  return (
    <View style={styles.container}>
      <MyButton title="My button" />
      <MyButton title="My button">{name}</MyButton>
      <MyButton />
      <EventInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 50 },
});

export default App;
