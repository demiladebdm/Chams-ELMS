import { View, Image, StyleSheet } from "react-native";
import OnboardingLayout from "./OnboardingLayout";

const Page4 = () => {
  return (
    <View>
      <OnboardingLayout text="File a complaint">
        <Image style={styles.image} source={require("../assets/images/img_4.png")} />
      </OnboardingLayout>
    </View>
  );
};

export default Page4;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    resizeMode: "contain",
  },
});
