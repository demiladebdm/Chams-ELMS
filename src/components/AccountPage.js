import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const AccountPage = ({ children, title, pageContainer }) => {
  const defaultAccountContainer = [styles.container, pageContainer];
  return (
    <View style={defaultAccountContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.formContainer}>{children}</View>
    </View>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accountBackground,
    height: "100%",
  },
  topContainer: {
    backgroundColor: COLORS.colorPrimaryDark,
    height: "44.8%",
    paddingLeft: 10,
  },
  text: {
    width: 271,
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: 700,
    marginTop: "40%",
  },
  formContainer: {
    backgroundColor: "white",
    color: "white",
    marginLeft: 20.5,
    marginRight: 20.5,
    marginTop: -107,
    height: "60%",
    borderRadius: 19,
    paddingLeft: 26.5,
    paddingRight: 26.5,
    overflow: "hidden",
  },
});
