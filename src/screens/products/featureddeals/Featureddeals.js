import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Header, Product } from "../../../components";
import { product3 } from "../../../constant/objects";
const Featureddeals = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header
            filter={true}
            press3={() => navigation.goBack()}
            header2={true}
          />
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              Featured Deals
            </Text>
          </View>
        </View>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Product
            hori={false}
            num={2}
            product={product3}
            marginbottom={15}
            marginTop={40}
          />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              paddingBottom: 15,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#1564EB",
            }}
          >
            View More..
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Featureddeals;
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Header } from "../../../components";
// // import { Header } from "../../components";

// const Featureddeals = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
//       <View style={{ width: "90%", alignSelf: "center" }}>
//         {/* <Header
//           press3={() => navigation.goBack()}
//           header2={true}
//           // press5={true}
//         /> */}
//         <Header
//           press3={() => navigation.goBack()}
//           header3={true}
//           // press5={true}
//         />
//         <View style={{ alignItems: "center", marginTop: 20 }}>
//           <Text style={{ fontSize: 22, fontWeight: "bold" }}>
//             Featured Deals
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({});
// export default Featureddeals;
