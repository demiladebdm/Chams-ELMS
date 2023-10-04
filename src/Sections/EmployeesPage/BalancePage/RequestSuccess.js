import { Image, View } from "react-native";
import SuccessPage from "../../../components/SuccessPage";

const RequestSuccess = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        text="REQUEST SUCCESSFUL"
        btnText="Ok!"
        onPress={() => {
          navigation.navigate("Login and Signup");
        }}
        note="Waiting for Manager's approval"
      >
        <Image source={require("../../../assets/images/request.png")} />
      </SuccessPage>
    </View>
  );
};

export default RequestSuccess;
