import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Header } from "../../../components";
const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          {/* <Text style={{ color: "black" }}>hommmmmeeeeeeeeeeeeeeeeee</Text> */}
          <Header header1={true} />
          <View style={{ width: "100%" }}>
            <Image
              // source={require("../../assets/images/hide.png")}
              source={require("../../../assets/images/hide.png")}
              style={{
                width: 91,
                height: 41,
                marginTop: 10,
                alignSelf: "center",
                // backgroundColor: "orange",
              }}
            />
          </View>
          <View style={styles.timer}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  timer: {
    width: "100%",
    height: 60,
    backgroundColor: "#AF0010",
    borderRadius: 18,
    marginTop: 10,
  },
});
export default Home;
