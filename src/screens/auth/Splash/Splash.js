import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
const Splash = ({ navigation }) => {
  // useEffect(() => {
  //   setInterval(() => {
  //     navigation.navigate("Login");
  //   }, 3000);
  // }, []);

  return (
    <ImageBackground
      source={require("../../../assets/images/Splash.png")}
      style={{
        // width: Dimensions.get("screen").width,
        // height: Dimensions.get("screen").height,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.splash}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={{ width: 224, height: 43 }}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  splash: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
