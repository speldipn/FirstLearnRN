import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

function EventInput() {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        width: "50%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "blue",
      }}
    >
      <TextInput onChangeText={setText} />
      <Text style={{ fontSize: 30 }}>{text}</Text>
    </View>
  );
}

export default EventInput;
