import { View, Pressable, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const PrimaryButton = ({
  children,
  onPress,
  textStyle,
  btnStyle,
  btnContainer,
}) => {
  const defaultButtonContainer = [styles.buttonContainer, btnContainer];
  const defaultButtonStyle = [styles.buttonStyle, btnStyle];
  const defaultTextStyle = [styles.buttonText, textStyle];
  return (
    <View style={defaultButtonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={defaultButtonStyle}>
          <Text style={defaultTextStyle}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.colorPrimaryDark,
  },
  buttonStyle: {
    backgroundColor: COLORS.primaryDark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
