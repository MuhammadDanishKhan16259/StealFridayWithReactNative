import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Button, Header, Input3 } from "../../../../components";
// import React, { Component } from "react";
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
          <Header press3={() => navigation.goBack()} header2={true} />
          <View style={{ marginTop: 25, alignSelf: "center" }}>
            <Image
              source={require("../../../../assets/images/profile1.png")}
              style={{
                width: 120,
                height: 120,
              }}
            />
            <Image
              source={require("../../../../assets/images/camera.png")}
              style={{
                position: "absolute",
                right: -35,
                // width: 120,
                // height: 120,
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Input3
              placeholder={"JANE"}
              image={require("../../../../assets/images/user1.png")}
              image2={require("../../../../assets/images/edit.png")}
              // marginVertical={9}
              // marginHorizontal={150}
            />
          </View>
          <View style={{ marginTop: 25 }}>
            <Input3
              placeholder={"SMITH"}
              image={require("../../../../assets/images/user1.png")}
              image2={require("../../../../assets/images/edit.png")}
            />
          </View>
          <View style={{ marginTop: 25 }}>
            <Input3
              type={"email-address"}
              placeholder={"johnsmith@gmail.com"}
              image={require("../../../../assets/images/emi.png")}
              image2={require("../../../../assets/images/edit.png")}
            />
          </View>
          <View style={{ marginTop: 25 }}>
            <Input3
              type={"phone-pad"}
              placeholder={"+1463839738093"}
              image={require("../../../../assets/images/phone.png")}
              image2={require("../../../../assets/images/edit.png")}
            />
          </View>
          <View style={{ marginTop: 45 }}>
            <Button
              color={"white"}
              title={"Update"}
              width={"55%"}
              height={55}
              back={"#a41716"}
              size={22}
            />
            {/* <Button
            press={() => setVisible(true)}
            color={"white"}
            title={"Pay Now"}
            width={"55%"}
            height={55}
            back={"#a41716"}
            size={22}
          /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // main: {
  //   textAlign: "center",
  //   marginTop: 40,
  //   alignSelf: "center",
  // },
});

export default Profile;
