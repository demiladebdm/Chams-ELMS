import { View, Image, StyleSheet } from "react-native";
import OnboardingLayout from "./OnboardingLayout";

const Page2 = () => {
  return (
    <View>
      <OnboardingLayout text="Request and track your leave.">
        <Image
          style={styles.image}
          source={require("../assets/images/img_2.png")}
        />
      </OnboardingLayout>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    resizeMode: "contain",
  },
});
