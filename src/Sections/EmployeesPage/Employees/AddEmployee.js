import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AccountPage from "../../../components/AccountPage";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const AddEmployee = ({ navigation }) => {


  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  return (
    <View style={{ position: "relative" }}>
      <Pressable
        style={[styles.icon, styles.icon1]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={require("../../../assets/icons/arrow_left.png")} />
      </Pressable>
      <Image
        source={require("../../../assets/icons/user.png")}
        style={[styles.icon, styles.icon2]}
      />
      <AccountPage title="Add Employee">
        <KeyboardAwareScrollView>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Firstname"
                style={styles.inputField}
                value={firstname}
                onChangeText={setFirstname}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Lastname"
                style={styles.inputField}
                value={lastname}
                onChangeText={setLastname}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Phone Number"
                style={styles.inputField}
                value={phoneNo}
                onChangeText={setPhoneNo}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Email"
                style={styles.inputField}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Position"
                style={styles.inputField}
                value={position}
                onChangeText={setPosition}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Joining Date"
                style={styles.inputField}
                value={joiningDate}
                onChangeText={setJoiningDate}
              />
            </View>
            <View style={styles.btnContainer}>
              <PrimaryButton
                onPress={() => navigation.navigate("Added Success")}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Invite Employee</Text>
                </View>
              </PrimaryButton>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </AccountPage>
    </View>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    zIndex: 10000,
  },
  icon1: {
    top: "5%",
    left: 15,
  },
  icon2: {
    top: "16%",
    right: 0,
  },
  formContainer: {
    flex: 1,
    paddingVertical: "10%",
  },
  inputContainer: {
    marginBottom: "8%",
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
});
