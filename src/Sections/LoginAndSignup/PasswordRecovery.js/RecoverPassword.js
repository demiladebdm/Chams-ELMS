import { View, Text, StyleSheet } from "react-native";
import AccountPage from "../../../components/AccountPage";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const RecoverPassword = ({ navigation }) => {
  return (
    <View>
      <AccountPage title="Recover your password">
        <View>
          <View>
            <View style={{ paddingHorizontal: 17.5 }}>
              <Text style={styles.text}>
                A recovery link has been sent to obeisuntabs@gmail.com
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <PrimaryButton
                onPress={() => {
                  navigation.navigate("Login and Signup");
                }}
                btnStyle={styles.btnStyle}
              >
                <Text style={styles.btnText}>Back to Login</Text>
              </PrimaryButton>
            </View>
          </View>
        </View>
      </AccountPage>
    </View>
  );
};

export default RecoverPassword;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 123,
    marginBottom: 100
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 87,
  },
  btnStyle: {
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
