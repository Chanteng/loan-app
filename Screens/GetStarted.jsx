import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello! Welcome to Samjaco Microfinance</Text>

      <View style={{flex: 0.6}}>
      <LottieView source={require("../Images/loan.json")} autoPlay />
      </View>
    
   
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
          <Text style={styles.btntxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    flex: 0.2,
    fontSize: 20,
    alignSelf: "center",
   marginTop: 70
  },
  btn: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingTop: 20
  },
  btntxt: {
    fontSize: 20,
    backgroundColor: "red",
    height: 70,
    width: 150,
    padding: 20,
    color: "white",
    borderRadius: 20,
    fontWeight: "bold"
  }
});