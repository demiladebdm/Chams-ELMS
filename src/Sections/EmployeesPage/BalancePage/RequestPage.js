import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import { COLORS } from "../../../constants/theme";

const RequestPage = () => {
  const navigation = useNavigation();
  const request = [];
  return (
    <View style={styles.container}>
      {request.length ? (
        <ScrollView>
          <Text>Request</Text>
        </ScrollView>
      ) : (
        <View style={styles.noRequest}>
          <Image source={require("../../../assets/images/pleading.png")} />
          <Text style={styles.note}>No Pending Requests</Text>
        </View>
      )}
      <View style={styles.btnContainer}>
        <PrimaryButton
          onPress={() => navigation.navigate("Leave Request")}
          btnContainer={styles.btn}
        >
          <Text style={styles.btnText}>Request day off</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default RequestPage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "10%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
  },
  active: {
    color: COLORS.dangerBtnColor,
  },
  inactive: {
    color: COLORS.colorSecondaryLight,
  },
  noRequest: {
    alignItems: "center",
    gap: 46,
    paddingTop: "15%",
    height: "75%",
  },
  note: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.placeholderText,
  },
  btnContainer: {
    alignItems: "center",
    height: 65,
    overflow: "hidden",
  },
  btn: {
    height: "100%",
    width: 300,
    borderRadius: 22,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
  },
});
