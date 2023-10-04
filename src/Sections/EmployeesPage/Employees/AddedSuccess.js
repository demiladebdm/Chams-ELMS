import { Image, View } from "react-native";
import SuccessPage from "../../../components/SuccessPage";

const AddedSuccess = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        text="Employee added Successfully"
        btnText="Done"
        note="A confirmation link has been sent to employee's email"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image source={require("../../../assets/images/checked.png")} />
      </SuccessPage>
    </View>
  );
};

export default AddedSuccess;
