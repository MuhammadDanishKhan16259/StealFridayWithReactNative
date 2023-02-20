import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Settingtext } from "../../../../components";
import Notificationtext from "../../../../components/notificationtext/Notificationtext";
import Switchcomp from "../../../../components/switchcomp/Switch";

const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header press3={() => navigation.goBack()} header2={true} />
        </View>
        <View>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text
              style={{ fontSize: 24, color: "#000000", fontWeight: "bold" }}
            >
              New Deal
            </Text>
          </View>
          <View style={{ marginTop: 7 }}>
            <Switchcomp text={"In App Notifications"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Switchcomp text={"Push Notifications"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Switchcomp text={"Email Notifications"} />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 7 }}>
            <Text
              style={{ fontSize: 24, color: "#000000", fontWeight: "bold" }}
            >
              Order Status Update
            </Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Switchcomp text={"In App Notifications"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Switchcomp text={"Push Notifications"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Switchcomp text={"Email Notifications"} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
