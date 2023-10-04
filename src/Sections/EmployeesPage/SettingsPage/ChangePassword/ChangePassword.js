import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AccountPage from "../../../../components/AccountPage";
import PrimaryButton from "../../../../components/UI/PrimaryButton";
import { useState } from "react";
import { COLORS } from "../../../../constants";

const ChangePassword = ({ navigation }) => {
  const [oldPwd, setOldPwd] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd !== confirmPwd) {
      setErr("Passwords do not Match!");
      setTimeout(() => {
        setErr("");
      }, 3000);
    } else if ((pwd === confirmPwd) & (pwd.length >= 5)) {
      navigation.navigate("Password Change Successful");
    } else {
      setErr("Passwords must be greater than 4");
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  };
  return (
    <View style={styles.container}>      
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >   
        <View style={styles.inner}>
            <View style={styles.innerHeader}>
                <Text style={styles.innerHeaderText}>Password</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    cursorColor="#000000"
                    placeholder="Enter Current Password"
                    keyboardType="password"
                    value={oldPwd}
                    onChangeText={setOldPwd}
                />
            </View>
        </View>
        <View style={styles.inner}>
            <View style={styles.innerHeader}>
                <Text style={styles.innerHeaderText}>New Password</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    cursorColor="#000000"
                    placeholder="Enter New Password"
                    keyboardType="password"
                    value={pwd}
                    onChangeText={setPwd}
                />
            </View>
        </View>
        <View style={styles.inner}>
            <View style={styles.innerHeader}>
                <Text style={styles.innerHeaderText}>Confirm Password</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    cursorColor="#000000"
                    placeholder="Confirm New Password"
                    keyboardType="password"
                    value={confirmPwd}
                    onChangeText={setConfirmPwd}
                />
            </View>
        </View> 
        <View style={styles.errMsgContainer}>
          <Text style={styles.errMsg}>{err}</Text>
        </View>       
      </KeyboardAvoidingView>

      <View style={styles.btnContainer}>
          <PrimaryButton onPress={handleSubmit} btnStyle={styles.btnStyle}>
              <Text style={styles.btnText}>Change Password</Text>
          </PrimaryButton>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: "4%",
    paddingTop: "10%",
  },
  inner: { 
    display: 'flex',    
    justifyContent: 'center',
    marginBottom: 35,
   },
  innerHeader: {
    textAlign: "center",
    // marginTop: 123,
    marginBottom: 27,
  }, 
  innerHeaderText: {
    fontSize: 25,
    fontWeight: "700",
  },
  input: {
    fontSize: 20,
    fontWeight: "700",
    borderBottomWidth: 1,
    paddingBottom: "2%",
    borderBottomColor: "#E1DCDC",
  },
  btnContainer: {    
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
  errMsg: {
    color: COLORS.dangerTextColor,
    fontSize: 20,
    fontWeight: 600,
    // textAlign: 'center'
  },
  errMsgContainer: {
    position: "absolute",
    bottom: "-60%",
    left: "10%",
  },
});
