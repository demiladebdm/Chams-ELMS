import { Image, View } from "react-native";
import SuccessPage from "../../../components/SuccessPage";

const ResetSuccess = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        text="Password Reset Successful"
        btnText="Continue"
        onPress={() => {
          navigation.navigate("Login and Signup");
        }}
      >
        <Image source={require("../../../assets/images/img_7.png")} />
      </SuccessPage>
    </View>
  );
};

export default ResetSuccess;
