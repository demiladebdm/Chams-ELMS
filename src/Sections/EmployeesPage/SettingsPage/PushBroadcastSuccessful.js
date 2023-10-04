import { View, Image } from "react-native";
import SuccessPage from "../../../components/SuccessPage";

const PushBroadcastSuccessful = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        text="SENT SUCCESSFULLY"
        btnText="Okay. Got it!"
        note="we sent a notification to all your employees"
        onPress={() => {
          navigation.navigate("Settings Page");
        }}
      >
        <Image
          source={require("../../../assets/images/SentSuccessfully.png")}
        />
      </SuccessPage>
    </View>
  );
};

export default PushBroadcastSuccessful;
