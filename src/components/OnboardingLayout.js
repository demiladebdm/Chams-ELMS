import { View, Text, StyleSheet } from "react-native";

const OnboardingLayout = ({ children, text }) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{children}</View>
      <Text style={styles.text}>{text}</Text>      
    </View>
  );
};

export default OnboardingLayout;

const styles = StyleSheet.create({
  container: {
    height: '70%',
    marginTop: '10%'
  },
  imageContainer: {
    height: '75%',
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: 400,
    marginTop: 46,
  },
});
