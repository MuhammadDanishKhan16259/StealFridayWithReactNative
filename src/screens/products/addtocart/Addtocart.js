import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Button, Button2, Sizes } from "../../../components";
const Addtocart = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <ImageBackground
          source={require("../../../assets/images/Splash.png")}
          resizeMode={"stretch"}
          style={{
            // width: Dimensions.get("window").width,
            // height: Dimensions.get("window").height,
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              paddingBottom: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/whiteleftarrow.png")}
              style={{ width: 28, height: 28 }}
            />
            <View style={styles.topright}>
              <Image source={require("../../../assets/images/star.png")} />
            </View>
          </View>

          <View style={{ alignItems: "center", marginTop: -55 }}>
            <Image source={require("../../../assets/images/headphone5.png")} />
          </View>

          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginBottom: 10,
              marginTop: -65,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Product Name
            </Text>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              Product Code:42303
            </Text>
          </View>
          <View style={styles.orderdetails}>
            <View style={{ width: "80%", alignSelf: "center", marginTop: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Price:</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>$15.00</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop: 5,
                    // textAlign: "center",
                    // justifyContent: "center",
                    // textAlign: "center",
                  }}
                >
                  Size:
                </Text>
                {/* <Text style={{ fontSize: 15, fontWeight: "bold" }}>$15.00</Text> */}

                <View style={{ flexDirection: "row" }}>
                  {/* <Sizes/> */}
                  <Sizes
                    back={"#E4201E"}
                    color={"white"}
                    text={"L"}
                    border={"#CD1C1B"}
                  />
                  <Sizes
                    back={"white"}
                    color={"black"}
                    text={"M"}
                    border={"#CD1C1B"}
                  />
                  <Sizes
                    back={"white"}
                    color={"black"}
                    text={"S"}
                    border={"#CD1C1B"}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Conditon:
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>New</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Brand:</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Hidden Sole
                </Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Description:
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  justifyContent: "space-between",
                }}
              >
                <Button
                  width={"72%"}
                  height={55}
                  title={"Buy Now"}
                  size={22}
                  color={"white"}
                  back={"#a41716"}
                />

                <Button2 />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topright: {
    height: 34,
    width: 34,
    borderRadius: 18,
    backgroundColor: "white",
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  orderdetails: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignSelf: "center",
    // marginTop: 5,
  },
});
export default Addtocart;
