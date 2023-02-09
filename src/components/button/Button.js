import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, size, press, back, color }) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[styles.btn, { backgroundColor: back }]}
    >
      <Text style={{ fontSize: size, color: color, fontWeight: "600" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
// backgroundColor: "#a41716",
const styles = StyleSheet.create({
  btn: {
    width: "60%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 35,
    elevation: 10,
  },
});

export { Button };
