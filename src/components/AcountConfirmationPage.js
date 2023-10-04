import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants";
import PrimaryButton from "./UI/PrimaryButton";

const AcountConfirmationPage = ({
  header,
  text,
  note,
  btnText,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/images/img_5.png")} />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.headerText}>{header}</Text>
          <Text style={styles.body}>{text}</Text>
          <View>
            <PrimaryButton
              btnStyle={styles.btnStyle}
              onPress={onPress}
            >
              <Text style={styles.buttonText}>{btnText}</Text>
            </PrimaryButton>
          </View>
          <Text style={styles.pText}>{note}</Text>
        </View>
      </View>
    </View>
  );
};

export default AcountConfirmationPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    height: "100%",
    alignItems: "center",
  },
  imgContainer: {
    height: 140,
    // width: "54%",
    marginTop: 42,
    marginBottom: 17,
  },
  contentContainer: {
    width: "86%",
    height: "70%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 700,
    marginTop: 41,
    marginBottom: 58,
    textAlign: "center",
    width: 270,
  },
  body: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 70,
  },
  btnStyle: {
    height: 67,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
  },
  pText: {
    marginTop: 45,
    color: COLORS.dangerTextColor,
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
});
