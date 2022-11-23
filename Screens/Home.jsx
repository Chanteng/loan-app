import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity, Image
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ProgressBar from "../components/ProgressBar"
import LottieView from "lottie-react-native";


const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <View style={styles.header}>
            <Text style={{ fontSize: 24 }}>Samjaco Mircofinance</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
              <AntDesign name="contacts" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.center}>
          <View style={styles.centerinfo}>
            <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20, color: "white" }} >Maximum Amout</Text>
            <Text style={{ fontSize: 35, paddingLeft: 20, color: "white" , fontWeight: "bold"}} >GHC 5,000.00</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between" }} >
            <Text style={{ fontSize: 14, paddingLeft: 20,  color: "white"}} >Maximum period 91 days</Text>
            <Text style={{ fontSize: 14, paddingRight: 20, color: "white" }} >Fast and easy loan</Text>
            </View>
            <View style={styles.abt}>
        <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <Text style={{ fontSize: 20, color: "white" }} >Apply Now!</Text>
            </TouchableOpacity>
        </View>
          </View>
        </View>
        
        <View style={styles.down}>
        <Image
        style={styles.tinyLogo}
        source={require('../Images/LOAN.jpg')}
      />
        </View>
        <View style={{flex: 0.1, flexDirection: "row"}}>
      <LottieView style={{width: "100%"}} source={require("../Images/loan4.json")} autoPlay />
      </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 20

  },

  head: {
    flex: 0.2,
    // backgroundColor: "red",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 20
  },


  center: {
    flex: 0.25,
    backgroundColor: "a",
    borderRadius: 30,
    justifyContent: "center",
    paddingVertical: 16
  },

  abt: {
  height: 50,
  width: 150,
    backgroundColor: "#0e56af",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20
  },

  down: {
    flex: 0.25,
    marginTop: 50
  },
  tinyLogo: {
    width: "100%",
    height: "100%", borderRadius: 25
  }
});
