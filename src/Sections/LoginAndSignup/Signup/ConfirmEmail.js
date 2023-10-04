import { View } from "react-native";
import AcountConfirmationPage from "../../../components/AcountConfirmationPage";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../../config/firebase";

const ConfirmEmail = ({ navigation }) => {
  const handleVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
      navigation.navigate("Verified");
    });
  };

  return (
    <View>
      <AcountConfirmationPage
        header="Confirm your email address to get started."
        text="Click on the button below to confirm email."
        note="If you did not request this email, Kindly ignore"
        btnText="Confirm Email"
        onPress={handleVerification}
      />
    </View>
  );
};

export default ConfirmEmail;
