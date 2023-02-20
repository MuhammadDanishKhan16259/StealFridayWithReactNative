import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Settingtext = ({ text, marginTop, press }) => {
  return (
    // <View
    //   style={{
    //     marginTop: marginTop,
    //     backgroundColor: "white",
    //     borderRadius: 15,
    //     // width: "90%",
    //     // height: "18%",
    //     width: "90%",
    //     height: 60,
    //     // marginRight: "13%",
    //     alignSelf: "center",
    //     justifyContent: "center",
    //     // alignItems: "center",
    //     paddingLeft: 20,
    //     flexDirection: "row",
    //   }}
    // >
    //   <Text style={styles.txt}>{text}</Text>

    //   {/* <Image
    //     source={require("../../assets/images/rightarrow.png")}
    //     style={{ marginLeft: 300 }}
    //   /> */}
    //   {/* <Text style={styles.txt}>My Profile</Text>
    //   <Text style={styles.txt}>My Profile</Text> */}
    //   <View style={{ justifyContent: "center" }}>
    //     <Image
    //       source={require("../../assets/images/rightarrow.png")}
    //       style={{
    //         alignItems: "center",
    //         marginBottom: 25,
    //       }}
    //     />
    //   </View>
    // </View>
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: marginTop,
        // width: 325,
        width: "90%",
        height: 60,
        // marginRight: "13%",
        alignSelf: "center",
        // justifyContent: "center",
        // alignItems: "center",
        // paddingLeft: 1,
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <Text style={styles.txt}>{text}</Text>
      {/* <View
        style={{
          // alignItems: "center",
          // alignSelf: "center",
          justifyContent: "center",
        }}
      > */}
      <TouchableOpacity onPress={press}>
        <Image
          source={require("../../assets/images/rightarrow.png")}
          style={{
            // alignItems: "center",
            // alignSelf: "center",
            // justifyContent: "center",
            alignSelf: "center",
            right: 15,
            marginTop: 15,
            // marginBottom: 25,
            // justifyContent: "space-evenly",
          }}
        />
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  // main: {
  //   // marginTop: marginTop,
  //   backgroundColor: "white",
  //   borderRadius: 15,
  //   // width: "90%",
  //   // height: "18%",
  //   width: "90%",
  //   height: 60,
  //   // marginRight: "13%",
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   // alignItems: "center",
  //   paddingLeft: 20,
  //   flexDirection: "row",
  //   // width: "90%",
  //   // height: "18%",
  // },
  txt: {
    // marginTop:10,
    flex: 1,
    left: 20,
    // marginTop: marginTop,
    marginTop: 20,
    // justifyContent: "center",
    // alignSelf: "center",
    // textAlign: "center",
    // alignItems: "center",

    // backgroundColor: "white",
  },
});
export { Settingtext };
