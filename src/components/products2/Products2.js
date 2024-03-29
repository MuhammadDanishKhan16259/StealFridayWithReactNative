// import React from "react";
// import { FlatList, Text, View, StyleSheet } from "react-native";
// const Products2 = (products2) => {
//   return (
//     <View style={{ backgroundColor: "red", height: 100 }}>
//       <FlatList
//         data={products2}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={(product, index) => {
//           return <View style={styles.mainview} key={index}></View>;
//         }}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   mainview: {
//     width: 266,
//     height: 100,
//     backgroundColor: "green",
//     elevation: 10,
//   },
// });
// export { Products2 };

//  import React from 'react'
// import { FlatList, StyleSheet, Text, View } from 'react-native'
// const Products2 = ({products2}) => {
//   return (
//     <View style={{backgroundColor: "green",height: 100,}}>
//         <FlatList
//         data={products2}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={(product, index) =>{
//             return (
//                 <View style={styles.mainview} key={index}>
//                     <Text>react native</Text>
//                 </View>
//             )
//         }}
//         />
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     mainview: {
//         width: 266,
//         height: 283,
//         backgroundColor: "red",
//         elevation: 10
//     },
// })
// export  {Products2}
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
const Products2 = ({ product, press }) => {
  return (
    <FlatList
      initialScrollIndex={1}
      style={{ borderRadius: 30, width: "100%" }}
      horizontal={true}
      data={product}
      showsHorizontalScrollIndicator={false}
      renderItem={(item) => {
        return (
          <TouchableOpacity
            style={styles.mainview}
            onPress={() =>
              press.navigate("Products", {
                screen: "Categories",
                params: {
                  name: item.item.title,
                },
              })
            }
          >
            <View>
              {/* <Text>react native components</Text> */}

              <View
                style={{
                  // position: "relative",
                  // top: -30,
                  marginTop: -10,
                  width: 196,
                  height: 250,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                    resizeMode: "cover",
                  }}
                  source={item.item.image}
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.item.title}
                </Text>
                <Text style={{ fontSize: 14 }}> {item.item.total}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export { Products2 };
const styles = StyleSheet.create({
  mainview: {
    width: 266,
    height: 283,
    backgroundColor: "white",
    elevation: 4,
    marginRight: 20,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 10,
    // overflow: "visible",
    // position: "absolute",
    // marginRight20,
  },
});
