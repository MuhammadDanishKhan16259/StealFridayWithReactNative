import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Input2 } from "../../../components";
import { Button } from "../../../components";
const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 0 }}
        >
          <Image
            source={require("../../../assets/images/arrow.png")}
            style={{ width: 24, height: 24, marginTop: 40 }}
          />
        </TouchableOpacity>

        <View style={styles.topview}>
          <Text style={styles.head1}>Payment Method</Text>
          <Text style={styles.head2}>
            Subscription Fee $19.99/month and it will auto re-subscribed. You
            can turn off auto re-subscription from setting
          </Text>
        </View>
        <View style={styles.middleview}>
          <Input2 label={"Name on Card"} width={"90%"} />
          <Input2 label={"Card Number"} margin={40} width={"90%"} pass={true} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              alignSelf: "center",
            }}
          >
            <Input2
              type={"phone-pad"}
              label={"Expiry Date"}
              margin={40}
              width={"30%"}
            />
            <Input2
              type={"phone-pad"}
              label={"CVV"}
              margin={40}
              width={"30%"}
            />
          </View>
          {/* <Text style={styles.text}>Name on Card</Text> */}
        </View>

        <View style={styles.bottomview}>
          <Button
            color={"white"}
            title={"Pay Now"}
            back={"#a41716"}
            size={22}
          />
          <Text style={styles.or}>- OR -</Text>
          <Button
            back={"white"}
            title={"Pay Pal"}
            color={"#a41716"}
            size={22}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topview: {
    alignItems: "center",
    marginTop: 5,
    // textAlign: "center",
    // alignSelf: "center",
  },
  head1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  head2: {
    // alignItems: "center",
    textAlign: "center",
    fontSize: 14,
    width: "80%",
    fontWeight: "bold",
    lineHeight: 17,
    marginTop: 20,
    opacity: 0.7,
  },
  middleview: {
    marginTop: 30,
    // alignSelf: "center",
  },
  or: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600%",
    opacity: 0.3,
    // marginTop: 20,
    marginVertical: 10,
  },
  bottomview: {
    marginTop: 40,
  },
});
export default Payment;
