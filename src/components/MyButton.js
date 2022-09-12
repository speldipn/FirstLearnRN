import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { PropTypes } from "prop-types";

function MyButton({ title, children }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        fontSize: 24,
        padding: 16,
        margin: 10,
        borderRadius: 8,
        alignItems: "center",
      }}
      onPress={() => Alert.alert("Click !!")}
    >
      <Text style={{ color: "white", fontSize: 24 }}>{title}</Text>
      {children && (
        <Text style={{ fontSize: 20, color: "yellow" }}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

MyButton.defaultProps = { title: "Unknown" };

MyButton.propTypes = { title: PropTypes.string };

export default MyButton;
