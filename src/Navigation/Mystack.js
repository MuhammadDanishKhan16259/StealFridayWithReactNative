import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Splash from "../screens/auth/splash/Splash";
import Login from "../screens/auth/login/Login";
import Splash from "../screens/auth/Splash/Splash";
import Signup from "../screens/auth/signup/Signup";
import Payment from "../screens/auth/payment/Payment";
import Home from "../screens/homes/home/Home";
import Mydrawer from "./Mydrawer";
import Profilesetting from "../screens/homes/home/profilesetting/Profilesetting";
// import Mydrawer from "./Mydrawer";

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profilesetting"
        component={Profilesetting}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Mydrawer"
        component={Mydrawer}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
  //   <Stack.Screen
  //   name="Splash"
  //   component={Splash}
  //   options={{ headerShown: false }}
  // />
  // export const Homes = () => {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Home1"
  //         component={Login}
  //         options={{ headerShown: false }}
  //       />
  //     </Stack.Navigator>
  //   );
};
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Homes"
          component={Homes}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Mydrawer"
          component={Mydrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
