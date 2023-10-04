import { View } from "react-native";
import AcountConfirmationPage from "../../../components/AcountConfirmationPage";

const PasswordReset = ({navigation}) => {
  return (
    <View>
      <AcountConfirmationPage
        header="Password Reset"
        text="If you have lost your password or wish to reset it, click on the button below."
        note="If you did not request a password, you can ifnore this email."
        btnText='Reset your password'
        onPress={() => {navigation.navigate('Reset Password Via Reset')}}
      />
    </View>
  );
};

export default PasswordReset;
