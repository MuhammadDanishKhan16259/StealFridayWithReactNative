import React from "react";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const Viewall = ({ title, viewall, marginTop }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: marginTop,
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "normal" }}>{title}</Text>
      </View>

      <View
        style={{ width: "50%", justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ borderBottomWidth: 1, height: 1, width: "90%" }}></View>
      </View>
      <View
        style={{
          // width: "20%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#CD1C1B" }}>
          {viewall}
        </Text>
        <AntDesign name="arrowright" size={17} color={"#CD1C1B"} />
        {/* <View></View>
      <View></View> */}
      </View>
    </View>
  );
};
export { Viewall };
