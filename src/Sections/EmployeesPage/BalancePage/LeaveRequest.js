import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { COLORS } from "../../../constants";
import SelectDropdown from "react-native-select-dropdown";

function LeaveRequest({ navigation }) {
  const leaveType = ["Casual", "Maternity", "Annual"];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../../../assets/icons/arrow_left.png")} />
        </Pressable>
        <View style={styles.headerContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/img-1.png")}
            />
          </View>
          <Text style={styles.name}>Your Request</Text>
          <Text style={styles.name}>Opeyemi</Text>
        </View>
        <Image source={require("../../../assets/images/curve-arrow.png")} />
        <View style={styles.headerContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/img-1.png")}
            />
          </View>
          <Text style={styles.name}>Approver</Text>
          <Text style={styles.name}>Emmanuel Ojo</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.inputContainer}>
          <SelectDropdown
            data={leaveType}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Select leave type"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdownStyle}
            buttonTextStyle={styles.dropdownTxtStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <View style={styles.datesContainer}>
          <View style={[styles.inputContainer, styles.dateContainer]}>
            <Text style={[styles.start, styles.dateHeading]}>Start:</Text>
            <Text style={styles.date}>Tue, 2 feb</Text>
          </View>

          <View style={[styles.inputContainer, styles.dateContainer]}>
            <Text style={[styles.end, styles.dateHeading]}>End:</Text>
            <Text style={styles.date}>Tue, 2 feb</Text>
          </View>
        </View>

        <View style={[styles.inputContainer, styles.reason]}>
          <TextInput placeholder="Reason" style={styles.reasonText} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../../../assets/icons/attach.png")} />
          <Text style={{ color: "#8B8686", fontSize: 18, fontWeight: "700" }}>
            Attach file
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <Pressable onPress={() => navigation.navigate("Request Success")}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Request day off</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default LeaveRequest;

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    paddingHorizontal: 20,
    marginTop: "15%",
  },
  inputContainer: {
    borderWidth: 3,
    borderColor: COLORS.placeholderText,
    height: 67,
    alignItems: "center",
  },
  dropdownStyle: {
    width: "80%",
    height: "100%",
  },
  dropdownTxtStyle: {
    color: COLORS.colorSecondaryLight,
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
  },
  dropdownRowStyle: {
    backgroundColor: "#F5F5F5",
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    paddingLeft: 20,
    height: 61,
  },
  dropdown1RowTxtStyle: {
    color: "#000",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
  },
  datesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "12%",
    marginBottom: "14%",
  },
  dateContainer: {
    width: "45%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: 20,
  },
  dateHeading: {
    fontSize: 19,
    fontWeight: "700",
    marginLeft: 10,
  },
  start: {
    color: COLORS.colorPrimaryDark,
  },
  end: {
    color: COLORS.dangerTextColor,
  },
  date: {
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.placeholderText,
  },
  reason: {
    height: 80,
    alignItems: "flex-start",
    padding: 25,
  },
  reasonText: {
    fontSize: 19,
    fontWeight: "700",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 37,
  },
  btn: {
    width: 300,
    height: 65,
    borderWidth: 1,
    borderRadius: 22,
    borderColor: COLORS.colorPrimaryDark,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.dangerTextColor,
  },
});
