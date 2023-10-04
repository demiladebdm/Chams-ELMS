import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { COLORS } from "../../../../constants";
import SelectDropdown from "react-native-select-dropdown";

function ProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../../../../assets/icons/arrow_left.png")} />
        </Pressable>
        <View style={styles.headerContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={require("../../../../assets/images/img-1.png")}
            />
          </View>
          <Text style={styles.name}>James</Text>
          <Text style={styles.name}>Human Resource Manager</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTiitle}>Name</Text>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputText}>James</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTiitle}>Email</Text>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputText}>Olaniyijames@chamswitch.com</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTiitle}>Position</Text>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputText}>Human Resource Manager</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTiitle}>Phone number</Text>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputText}>08157283393</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Pressable onPress={() => navigation.navigate("Request Success")}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Save Changes</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: "35%",
    backgroundColor: COLORS.colorPrimaryDark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "10%",
    paddingBottom: 2,
    paddingHorizontal: "5%",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 15,
  },
  headerContainer: {
    alignItems: "center",
    gap: 12,
  },
  imgContainer: {
    height: 110,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "70%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },
  content: {
    marginTop: "15%",
  },
  inputContainer: {
    marginBottom: "8%",
  },
  inputTiitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#8B8686",
    marginBottom: 10,
    paddingLeft: 10,
  },
  inputTextContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    height: 60,
    justifyContent: "center",
  },
  inputText: {
    fontSize: 18,
    fontWeight: "700",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 37,
  },
  btn: {
    height: 65,
    borderRadius: 22,
    backgroundColor: COLORS.colorPrimaryDark,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
  },
});
