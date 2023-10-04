import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import Input from "../../../components/UI/input";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import { COLORS } from "../../../constants";
import { AuthContext } from "../../../context/AuthContext";

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAwareScrollView>
      <View style={styles.inner}>
        <View>
          <View>
            <Input
              placeholder="Email"
              containerInput={styles.containerInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Input
              placeholder="Password"
              // keyboardType="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => {
              login(email, password);
            }}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Login</Text>
          </PrimaryButton>
        </View>
        <View style={{ marginTop: "10%" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Forgot Password");
            }}
          >
            <Text style={styles.reset}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
  },
  containerInput: {
    marginTop: "5%",
    marginBottom: "12%",
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "20%",
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
  reset: {
    color: COLORS.dangerBtnColor,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
});
