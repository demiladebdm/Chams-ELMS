import { View, Image } from "react-native";
import SuccessPage from "../../../../components/SuccessPage";

const OfficialHolidaysSuccessful = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        text="SUCCESSFUL!"
        btnText="Okay. Got it!"
        note="Holiday added successfully"
        onPress={() => {
          navigation.navigate("Official Holidays Home");
        }}
      >
        <Image
          source={require("../../../../assets/images/OfficialHolidays.png")}
        />
      </SuccessPage>
    </View>
  );
};

export default OfficialHolidaysSuccessful;
