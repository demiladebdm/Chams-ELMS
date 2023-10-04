import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./UI/PrimaryButton";

const SuccessPage = ({ children, text, note, btnText, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>{children}</View>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.note}>{note}</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={onPress} btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>{btnText}</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: "20%",
    paddingBottom: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 47,
  },
  text: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
  },
  note: {
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
    lineHeight: 25,
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    width: 334,
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
