import { View, Text, StyleSheet } from 'react-native'
import WorkingDays from '../../../CompanySetup/WorkingDays'
import PrimaryButton from '../../../../components/UI/PrimaryButton'

const SettingForWorkingDays = () => {
  return (
    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <WorkingDays />

      <View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => navigation.navigate("Add Official Holidays")}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Continue</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default SettingForWorkingDays


const styles = StyleSheet.create({
  btnContainer: {
      width: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      overflow: "hidden",
    },
    btnStyle: {
      width: 334,
      height: 46,
    },
    btnText: {
      fontSize: 20,
      fontWeight: 700,
    },
})
