import { FlatList, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../../../components";
import { term } from "../../../../../constant";

const Termscondition = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, height: "90%" }}>
      <ScrollView style={{ flex: 1, height: "90%" }}>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Header press3={() => navigation.goBack()} header2={true} />
        </View>
        <View
          style={{
            width: "90%",
            // height: "100%",
            borderRadius: 20,
            backgroundColor: "white",
            elevation: 10,
            marginTop: 60,
            alignSelf: "center",
            marginBottom: 80,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Terms of service
          </Text>
          <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
            <FlatList
              data={term}
              renderItem={(item) => {
                return (
                  <>
                    <Text style={{ fontsize: 16, fontWeight: "bold" }}>
                      {item.item.heading}
                    </Text>
                    <Text style={{ fontsize: 12 }}>{item.item.content}</Text>
                  </>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Termscondition;