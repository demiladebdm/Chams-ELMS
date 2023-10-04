import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const Settings = ({ navigation }) => {
  return (
    <View>
      <View style={{ backgroundColor: "white", height: "60%" }}>
        <View style={styles.top}>
          <Image
            source={require("../../../assets/images/CompanyBuilding.png")}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomContent}>
            <Pressable
              onPress={() => {
                navigation.navigate("Official Holidays Home");
              }}
            >
              <Image source={require("../../../assets/images/Voyage.png")} />
              <Text style={styles.bottomContentText}>Holidays</Text>
            </Pressable>
          </View>
          <View style={styles.bottomContent}>
            <Pressable
              onPress={() => {
                navigation.navigate("Settings Page");
              }}
            >
              <Image
                source={require("../../../assets/images/GearSettings.png")}
              />
              <Text style={styles.bottomContentText}>Settings</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8DC2A9",
          height: "40%",
        }}
      >
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => navigation.navigate("Push Broadcast")}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Send Announcements</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  top: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    width: "100%",
    paddingLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContentText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 600,
  },
  btnContainer: {
    // margin: 50,
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    // height: "100%",
  },
  btnStyle: {
    width: 334,
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
