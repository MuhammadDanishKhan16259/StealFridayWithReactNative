// import * as React from "react";
// import { Button, View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button
//         onPress={() => navigation.navigate("Notifications")}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// // In App.js in a new project

// import * as React from "react";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// // import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import MyStack from "./src/Navigation/Mystack";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <MyStack />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
// import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
// import { AppState, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
// import MyStack from "./src/Navigation/Mystack";
import MyStack from "./src/navigation/Mystack";
const App = () => {
  return (
    <SafeAreaProvider>
      <MyStack />
    </SafeAreaProvider>
  );
};
export default App;
