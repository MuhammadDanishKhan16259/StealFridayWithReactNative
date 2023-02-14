import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// import { LinearGradient } from "expo";

import { Header, Product, Viewall } from "../../../components";

const Home = () => {
  const product = [
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assets/images/Shirt.png"),
      title: "Gym T-shirt",
      backcolor: "#00000029",
      iconcolor: "#00000029",
      // iconcolor: "#114C8A",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assets/images/Shoes.png"),
      title: "Nike Collection",
      backcolor: "#998BC8AD",

      iconcolor: "#453B62",
      // iconcolor: "#BFFB41",
    },
    {
      tag: "New",
      price: "$15.00",
      image: require("../../../assets/images/Headphone.png"),
      title: "Beats up headSet",
      // backcolor: "#115794",
      backcolor: "#114C8A",
      // iconcolor: "#114C8A",
      iconcolor: "#114C8A",
    },
    {
      tag: "New",
      price: "$15.00",
      image: require("../../../assets/images/Shoes2.png"),
      title: "Nike Collection",
      backcolor: "#CDF37B",

      iconcolor: "#BFFB41",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assets/images/Shirt1.png"),
      title: "Gym T-shirt",
      backcolor: "#00000029",
      iconcolor: "#00000029",
      // iconcolor: "#114C8A",
    },
  ];

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
          <LinearGradient
            colors={["#650E0D", "#CA1C1A"]}
            start={{ x: 0.1, y: 0.2 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.timer}
          >
            <View
              style={{
                alignSelf: "center",
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                >
                  00
                </Text>
                <Text style={{ color: "white", fontSize: 10, marginTop: -5 }}>
                  Days
                </Text>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  height: 40,
                  borderLeftColor: "#030303",
                }}
              ></View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                >
                  14
                </Text>
                <Text style={{ color: "white", fontSize: 10, marginTop: -5 }}>
                  Hours
                </Text>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  height: 40,
                  borderLeftColor: "#030303",
                }}
              ></View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                >
                  30
                </Text>
                <Text style={{ color: "white", fontSize: 10, marginTop: -5 }}>
                  Minutes
                </Text>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  height: 40,
                  borderLeftColor: "#030303",
                }}
              ></View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                >
                  09
                </Text>
                <Text style={{ color: "white", fontSize: 10, marginTop: -5 }}>
                  Seconds
                </Text>
              </View>
            </View>
          </LinearGradient>
          <Viewall
            title={"Feature Deals"}
            viewall={"View All"}
            marginTop={15}
          />
          <Product product={product} marginTop={20} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  timer: {
    width: "100%",
    height: 60,
    // backgroundColor: "#AF0010",
    borderRadius: 18,
    marginTop: 10,
    justifyContent: "center",
  },
});
export default Home;
