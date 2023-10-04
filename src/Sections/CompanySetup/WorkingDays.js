import { View, Text, StyleSheet } from "react-native";
import CompanySetupLayout from "../../components/CompanySetupLayout";
import SwitchToggle from "../../components/UI/switch";

const WorkingDays = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <View style={styles.container}>
      <CompanySetupLayout style={styles.title} title="Working days">
        <View>
          {days.map((day, index) => {
            return (
              <View key={index} style={styles.content}>
                <View style={styles.switch}>
                  <SwitchToggle />
                </View>
                <View>
                  <Text style={styles.day}>{day}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </CompanySetupLayout>
    </View>
  );
};

export default WorkingDays;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    color: "#fff",
    paddingHorizontal: '17%'
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '10%',
    position: "relative",
  },
  switch: {
    position: "absolute",
    left: 0,
  },
  day: {
    fontSize: 25,
    fontWeight: 700,
    color: "#8B8686",
  },
});
