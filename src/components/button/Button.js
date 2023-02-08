import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={{ fontSize: 22, color: "white", fontWeight: "500%" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: "60%",
    height: 55,
    backgroundColor: "#a41716",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 35,
    elevation: 10,
  },
});

export { Button };
