import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import MyButton from "./components/MyButton";

function App() {
  const name = "Neo";
  return (
    <>
      <View style={styles.container}>
        <MyButton title="My button" />
        <MyButton title="My button">Children Props</MyButton>
        <MyButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: { fontSize: 50 },
});

export default App;
