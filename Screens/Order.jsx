import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity, Alert,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
import { FormItem, Picker } from "react-native-form-component";
import { Ionicons } from "@expo/vector-icons";
import DOB from "../components/DOB";
import DatePicker from "react-native-modern-datepicker";

const Order = ({ navigation }) => {
  const [gender, setGender] = useState(1);
  const [selectedDate, setSelectedDate] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();

  const emailInput = useRef();
  const FNameInput = useRef();
  const MNameInput = useRef();
  const LNameInput = useRef();
  const PhoneInput = useRef();

  const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  function DOB() {
    return (
      <DatePicker
        options={{
          backgroundColor: "#090C08",
          textHeaderColor: "#FFA25B",
          textDefaultColor: "#F6E7C1",
          selectedTextColor: "#fff",
          mainColor: "#F4722B",
          textSecondaryColor: "#D6C7A1",
          borderColor: "rgba(122, 146, 165, 0.1)",
        }}
        current="2020-07-13"
        selected="2020-07-23"
        mode="calendar"
        minuteInterval={30}
        style={{ borderRadius: 10 }}
      />
    );
  }

  function renderHeader() {
    return (
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            paddingHorizontal: 16,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="#47467e" />
          <Text style={{ color: "#47467e", fontSize: 20, marginLeft: 10 }}>
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {renderHeader()}
      {/* {DOB()} */}

      <View style={{ flex: 0.8, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 24 }}>Personal Information:</Text>
        <Text style={{ fontSize: 14, marginBottom: 25 }}>
          Please provide a valid information
        </Text>
        <FormItem
          label="First Name"
          isRequired
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
          asterik
          ref={FNameInput}
          placeholder="Enter First Name"
        />
        <FormItem
          label="Middle Name(Optional)"
          value={middleName}
          onChangeText={(middleName) => setMiddleName(middleName)}
          ref={MNameInput}
          placeholder="If listed on ID"
        />
        <FormItem
          label="Last Name"
          isRequired
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
          asterik
          ref={LNameInput}
          placeholder="Enter Last Name"
        />
        <FormItem
          label="Phone Number"
          isRequired
          value={phoneNumber}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          asterik
          ref={PhoneInput}
          placeholder="Enter a valid Phone Number"
        />
        <FormItem
          label="Email"
          isRequired
          value={email}
          onChangeText={(email) => setEmail(email)}
          asterik
          ref={emailInput}
          placeholder="Enter a vaild email"
        />
        <Picker
          items={[
            { label: "Click to select", value: 1 },
            { label: "Male", value: 2 },
            { label: "Female", value: 3 },
          ]}
          isRequired
          label="Gender"
          selectedValue={gender}
          asterik
          onSelection={(item) => setGender(item.value)}

        />
        <View
          style={{
            backgroundColor: "#375372",
            width: 150,
            height: 50,
            alignSelf: "center",
            justifyContent: "center", alignItems: "center", borderRadius: 24
          }}
        >
             <Button title="Show alert" onPress={showAlert} />
          {/* <TouchableOpacity onPress={() => navigation.navigate("Basic")}>
            <Text style={{fontSize: 24, color: "white"}}>Next</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
