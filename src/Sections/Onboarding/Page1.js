import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const Page1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/img_1.png")}
          style={{ resizeMode: "contain", width: "90%" }}
        />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          onPress={() => {
            navigation.navigate("Onboarding");
          }}
          btnStyle={styles.btnStyle}
        >
          <Text style={{ fontSize: 40, fontWeight: 400 }}>Get Started</Text>
        </PrimaryButton>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Reset Password");
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 400 }}>
          Forgot password? Reset.
        </Text>
      </Pressable>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: '30%',
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },
  btnContainer: {
    borderRadius: 19,
    marginBottom: 32,
    overflow: "hidden",
  },
  btnStyle: {
    width: 236,
    height: 75,
  },
});
