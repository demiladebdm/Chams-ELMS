import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const AddLeaveType = () => {
  const [input, setInput] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View keyboardDismissMode="on-drag" style={styles.inner}>
        <Text style={styles.heading}>Add Leave Type</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputField, styles.input1]}
            placeholder="Leave type"
            value={input}
            onChangeText={(e) => setInput(e.target.value)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="days"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Continue</Text>
            </View>
          </PrimaryButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddLeaveType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 15,
    position: "relative",
    height: "100%",
    paddingTop: "10%",
  },
  heading: {
    fontSize: 25,
    fontWeight: 600,
    color: "#1B4760",
    marginTop: 80,
    marginBottom: 31,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    paddingTop: "10%",
    gap: 12,
  },
  input1: {
    width: "70%",
    height: 72,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#F80E0E",
    borderRadius: 17,
    width: "20%",
    textAlign: "center",
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    width: "84%",
    height: 46,
    marginTop: "4%",
    position: "absolute",
    bottom: "10%",
    left: "12%",
  },
  btn: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
});
