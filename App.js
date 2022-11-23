import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStarted from "./Screens/GetStarted";
import About from "./Screens/About";
import Order from "./Screens/Order";
import Contact from "./Screens/Contact";
import DOB from "./components/DOB";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "red",
      headerShown: false
    
    }}
  >
    <Tab.Screen 
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
      }}
    />

    <Tab.Screen
      name="Order"
      component={Order}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="newspaper-o" size={24} color="black" />
        ),
      }}
    />

<Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="user" size={24} color="black" />
        ),
      }}
    />
     
  </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={GetStarted}
            screenOptions={{headerShown: false}} >
      <Stack.Screen name="GetStarted" component={GetStarted}  />
        {/* <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="DOB" component={DOB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
