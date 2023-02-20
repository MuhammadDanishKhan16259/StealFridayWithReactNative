import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, Header, Input, Modall } from "../../../../components";
const Changepassword = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  // const userimage = require("../../../../assets/images/user.png");
  // const phoneimage = require("../../../../assets/images/phone.png");
  // const phoneimage = require("../../../assets/images/phone.png");
  // const emailimage = require("../../../assets/images/emi.png");
  // const lockimage = require("../../../assets/images/lock.png");
  const lockimage = require("../../../../assets/images/lock.png");
  return (
    <View>
      <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
        <Header press3={() => navigation.goBack()} header2={true} />
      </View>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          color: "#000000",
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        Change Password
      </Text>
      <View
        style={{
          marginTop: 30,
          width: "80%",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Input
          margin={15}
          image={lockimage}
          placeholder={"Change Password"}
          secureTextEntry={true}
          pass={true}
        />
        <Input
          margin={15}
          image={lockimage}
          placeholder={"New Password"}
          secureTextEntry={true}
          pass={true}
        />
        <Input
          margin={15}
          image={lockimage}
          placeholder={"Confirm Password"}
          type={"number-pad"}
          secureTextEntry={true}
          pass={true}
        />
        {/* <Input margin={35} placeholder={" New Password"} type={"number-pad"} /> */}
        {/* <Input
          margin={35}
          placeholder={" Confrim Password"}
          type={"number-pad"}
        /> */}
      </View>
      <View style={{ marginTop: 50 }}>
        <Button
          press={() => {
            setVisible2(true);
          }}
          color={"white"}
          title={"Update"}
          width={"55%"}
          height={55}
          back={"#a41716"}
          size={22}
        />
        <Modall
          visible={visible2}
          text={"Pasword updated"}
          backbtn={() => navigation.goBack()}
        />
        {/* <Modall
              visible={visible2}
              text={"Payment Processed Successfully"}
              backbtn={() => setVisible2(false)}
            /> */}
      </View>
    </View>
  );
};

export default Changepassword;
