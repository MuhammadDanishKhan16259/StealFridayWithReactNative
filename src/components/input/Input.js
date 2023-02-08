import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";
const Input = ({ placeholder, type, secureTextEntry, image }) => {
  return (
    <View style={styles.inputview}>
      <Image source={image} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputview: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: 52,
    borderRadius: 20,
    elevation: 10,
    padding: 10,
    marginTop: 35,
  },
  icon: {
    // width: 17,
    // height: 13,
    marginLeft: 20,
  },
  input: {
    width: "100%",
    fontSize: 12,
    color: "#707070",
    paddingLeft: 15,
  },
});

export { Input };
