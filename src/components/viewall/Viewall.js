// import React from "react";
// import { Text, View } from "react-native";
// import AntDesign from "@expo/vector-icons/AntDesign";
// const Viewall = ({ title, viewall, marginTop }) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignItems: "center",
//         width: "100%",
//         justifyContent: "space-between",
//         marginTop: marginTop,
//       }}
//     >
//       <View
//         style={{
//           justifyContent: "flex-start",
//         }}
//       >
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
//       </View>

//       <View
//         style={{ width: "45%", justifyContent: "center", alignItems: "center" }}
//       >
//         <View style={{ borderBottomWidth: 1, height: 1, width: "95%" }}></View>
//       </View>
//       <View
//         style={{
//           // width: "20%",
//           alignItems: "center",
//           flexDirection: "row",
//           justifyContent: "flex-end",
//         }}
//       >
//         <Text style={{ fontSize: 14, fontWeight: "bold", color: "#CD1C1B" }}>
//           {viewall}
//         </Text>
//         <AntDesign name="arrowright" size={17} color={"#CD1C1B"} />
//         {/* <View></View>
//       <View></View> */}
//       </View>
//     </View>
//   );
// };
// export { Viewall };

// maam code
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Viewall = ({
  text,
  text2,
  left,
  right,
  fontSize,
  fontWeight,
  lineColor,
  viewAllBtn,
  backgroundColor,
  Press,
  marginTop,
}) => {
  return (
    <>
      <View
        style={{
          alignSelf: "center",

          width: "100%",
          height: 25,
          alignItems: "center",
          justifyContent: "center",
          marginTop: marginTop,

          flexDirection: "row",
          backgroundColor: backgroundColor || "#F8F8F8",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: lineColor || "grey",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -13,
              // height: 25,
              left: left,
              // right: right,
              // overflow: "hidden",
              backgroundColor: backgroundColor || "#F8F8F8",
              // paddingHorizontal: 10,
              paddingRight: 10,

              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize || 16,
                color: "#030303",
                fontWeight: fontWeight || "600",
              }}
            >
              {text}
            </Text>
          </View>
          {viewAllBtn && (
            <TouchableOpacity
              onPress={Press}
              style={{
                position: "absolute",
                top: -13,
                height: 25,
                right: 0,
                overflow: "hidden",
                backgroundColor: "#F8F8F8",
                // paddingHorizontal: 10,
                paddingLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  fontSize: fontSize || 14,
                  color: "#CD1C1B",
                  fontWeight: fontWeight || "bold",
                }}
              >
                {text2}
              </Text>
              {/* <Icon
                name="arrow-right"
                type="FontAwesome"
                style={{
                  color: '#CD1C1B',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              /> */}
              <AntDesign name="arrowright" size={15} color={"#CD1C1B"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
export { Viewall };