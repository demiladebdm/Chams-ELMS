import { View, Image, StyleSheet } from "react-native";
import OnboardingLayout from "./OnboardingLayout";

const Page3 = () => {
  return (
    <View>
      <OnboardingLayout text="Communicate with Management">
        <Image style={styles.image} source={require("../assets/images/img_3.png")} />
      </OnboardingLayout>
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    resizeMode: "contain",
  },
});
