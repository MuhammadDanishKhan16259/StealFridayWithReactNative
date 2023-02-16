import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
const Header = ({ header1, press }) => {
  return (
    <>
      {header1 && (
        <View style={styles.top}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              //   backgroundColor: "red",
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                width: "10%",
                // backgroundColor: "yellow",
              }}
            >
              <TouchableOpacity onPress={press}>
                <Image
                  source={require("../../assets/images/menu.png")}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
            </View>

            {/* <View style={{ alignItems: "center", backgroundColor: "green",width: }}> */}
            <View
              style={{
                // alignSelf: "flex-start",
                width: "80%",
                // backgroundColor: "grey",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/images/Logo2.png")}
                style={{ width: 120, height: 30 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>By</Text>
            </View>

            <View
              style={{
                alignSelf: "flex-start",
                width: "10%",
                // backgroundColor: "blue",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {/* <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "blue",
              }}
            > */}
              <Image
                source={require("../../assets/images/notify.png")}
                style={{ width: 16, height: 24, marginRight: 10 }}
              />
              <Image
                source={require("../../assets/images/profile.png")}
                style={{ width: 45, height: 45 }}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};
{
  /* <Text>Steal Friday</Text>
<Text style={{ textAlign: "center" }}>By</Text>
<View>
  <Image
    source={require("../../assets/images/hide.png")}
    style={{ width: 104, height: 44, marginTop: 40 }}
  />
</View> */
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    marginTop: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "pink",
    // textAlign: "center",
    // alignSelf: "center",
    // marginTop: 50,
    // marginEnd: 80,
  },
});
export { Header };
