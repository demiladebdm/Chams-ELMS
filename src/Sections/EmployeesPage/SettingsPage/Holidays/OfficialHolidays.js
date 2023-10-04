import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../../../../components/UI/PrimaryButton";
import SwitchToggle from "../../../../components/UI/switch";

const OfficialHolidays = ({ navigation }) => {
  const holidays = [
    {
      id: 1,
      name: "New Year’s day",
      date: "Sun 01 Jan - 1 Day off",
    },
    {
      id: 2,
      name: "Day Off for New Year’s day",
      date: "Mon 02  Jan - 1 Day off",
    },
    {
      id: 3,
      name: "Valentine’s Day",
      date: "Tue 14 Feb - 1 Day off",
    },
    {
      id: 4,
      name: "Ash Wednesday",
      date: "Wed 28 Feb - 1 Day off",
    },
  ];

  return (
    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ width: "100%" }}>
        <View style={styles.content}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.day}>Import official holidays from</Text>
            <Text style={styles.day}>Google calendar.</Text>
          </View>
          <View style={styles.switch}>
            <SwitchToggle />
          </View>
        </View>
      </View>

      {holidays.length ? (
        holidays.map((holiday) => {
          return (
            <View
              style={{
                width: "100%",
                borderBottomWidth: 2,
                borderBottomColor: "gray",
                margin: 20,
              }}
            >
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 25, fontWeight: 700, marginBottom: 10 }}
                >
                  {holiday.name}
                </Text>
                <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
                  {holiday.date}
                </Text>
              </View>
            </View>
          );
        })
      ) : (
        <View>
          <Text style={styles.noEmployee}>
            You have no employee on the list.
          </Text>
        </View>
      )}

      <View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => navigation.navigate("Add Official Holidays")}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Add Holiday</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default OfficialHolidays;

const styles = StyleSheet.create({
  content: {
    marginLeft: -40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
    marginTop: "5%",
    // position: "relative",
  },
  switch: {
    position: "absolute",
    right: 0,
  },
  day: {
    fontSize: 15,
    fontWeight: 700,
    color: "#000000",
  },
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
});
