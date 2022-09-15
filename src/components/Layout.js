import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Header = () => {
  return (
    <View style={[styles.header, styles.container]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export const Body = () => {
  return (
    <View style={[styles.body, styles.container]}>
      <Text style={styles.text}>Body</Text>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.footer, styles.container]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  header: {
    backgroundColor: "#f1c40f",
    flex: 1,
  },
  body: {
    backgroundColor: "#1abc9c",
    flex: 2,
  },
  footer: {
    backgroundColor: "#3498db",
    flex: 1,
  },
  text: {
    fontSize: 26,
  },
});
