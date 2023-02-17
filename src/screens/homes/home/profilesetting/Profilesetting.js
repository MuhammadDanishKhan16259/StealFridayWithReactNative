import { Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Settingtext } from "../../../../components";

const Profilesetting = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <Header press3={() => navigation.goBack()} header2={true} />

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Settings</Text>
        </View>
      </View>
      <View>
        <Settingtext text={"My profile"} marginTop={30} />
        <Settingtext text={"Notifications"} marginTop={15} />

        <Settingtext text={"Change Password"} marginTop={15} />
        <Settingtext text={"Terms&Conditions"} marginTop={15} />
        <Settingtext text={"Privacy Policy"} marginTop={15} />
      </View>
    </SafeAreaView>
  );
};

export default Profilesetting;
