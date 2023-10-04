import { View, Image } from 'react-native'
import SuccessPage from '../../../../components/SuccessPage';

const ChangePasswordSuccess = ({ navigation }) => {
  return (
    <View>
        <SuccessPage
            text="Password Change Successful"
            btnText="Okay"
            onPress={() => {
            navigation.navigate("Settings Page");
            }}
        >
            <Image source={require("../../../../assets/images/img_7.png")} />
        </SuccessPage>
    </View>
  )
}

export default ChangePasswordSuccess
