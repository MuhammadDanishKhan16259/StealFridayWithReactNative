import React from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";
const Input3 = ({ type, placeholder, email, image, image2 }) => {
  // require("../../assets/images/user1.png")
  return (
    <View style={styles.inputview}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={image} />

        <TextInput
          keyboardType={type}
          placeholder={placeholder}
          style={styles.input}
          email={email}
        />
      </View>
      <Image source={image2} style={{ paddingRight: 10 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputview: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 40,
    width: "90%",
    justifyContent: "space-between",
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "600",
  },
  input: {
    width: "75%",
    marginHorizontal: 15,
  },
  // main: {
  //   textAlign: "center",
  //   marginTop: 40,
  //   alignSelf: "center",
  // },
});
export { Input3 };
