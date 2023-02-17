import { Text, View, StyleSheet, Image } from "react-native";

import React from "react";

const Settingtext = ({ text, marginTop, margin }) => {
  return (
    <View
      style={{
        marginTop: marginTop,
        backgroundColor: "white",
        borderRadius: 15,
        // width: "90%",
        // height: "18%",
        width: "90%",
        height: 60,
        // marginRight: "13%",
        alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center",
        paddingLeft: 20,
      }}
    >
      <Text style={styles.txt}>{text}</Text>

      {/* <Image
        source={require("../../assets/images/rightarrow.png")}
        style={{ marginLeft: 300 }}
      /> */}
      {/* <Text style={styles.txt}>My Profile</Text>
      <Text style={styles.txt}>My Profile</Text> */}
      <View style={{ justifyContent: "center" }}>
        <Image
          source={require("../../assets/images/rightarrow.png")}
          style={{ marginLeft: 280, alignItems: "center", marginBottom: 25 }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    // marginTop:10,
    // flex: 1,
    marginTop: 35,
    justifyContent: "center",
    // alignSelf: "center",
    // textAlign: "center",
    alignItems: "center",

    // backgroundColor: "white",
  },
});
export { Settingtext };
