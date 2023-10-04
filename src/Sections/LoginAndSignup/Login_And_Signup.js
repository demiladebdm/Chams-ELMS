import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AccountPage from "../../components/AccountPage";
import { COLORS } from "../../constants";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";

const Login_And_Signup = ({ navigation }) => {
  const [signUp, setSignUp] = useState(1);
  return (
    <View>
      <AccountPage
        title={signUp === 0 ? "Create an account" : "Login to your account"}
      >
        <View style={{ height: "100%" }}>
          <View style={styles.navLinks}>
            <View>
              <Pressable
                style={styles.navLinkContainer}
                onPress={() => setSignUp(0)}
              >
                <Text
                  style={
                    signUp === 0 ? styles.navLinkActive : styles.navLinkInactive
                  }
                >
                  Sign Up
                </Text>
                {signUp === 0 && <View style={styles.borderBtm}></View>}
              </Pressable>
            </View>
            <View>
              <Pressable
                style={styles.navLinkContainer}
                onPress={() => setSignUp(1)}
              >
                <Text
                  style={
                    signUp === 1 ? styles.navLinkActive : styles.navLinkInactive
                  }
                >
                  Sign In
                </Text>
                {signUp === 1 && <View style={styles.borderBtm}></View>}
              </Pressable>
            </View>
          </View>
          <View>
            {signUp === 0 ? (
              <SignUp navigation={navigation} />
            ) : (
              <Login navigation={navigation} />
            )}
          </View>
        </View>
      </AccountPage>
    </View>
  );
};

export default Login_And_Signup;

const styles = StyleSheet.create({
  navLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 21.5,
    paddingTop: "18%",
    paddingBottom: "12%",
  },
  navLinkContainer: {
    gap: 10,
    alignItems: "center",
  },
  navLinkActive: {
    fontSize: 24,
    fontWeight: 700,
    color: "#000",
  },
  navLinkInactive: {
    fontSize: 24,
    fontWeight: 700,
    color: "#808080",
  },
  borderBtm: {
    height: 6,
    width: "70%",
    backgroundColor: COLORS.dangerBtnColor,
  },
});
