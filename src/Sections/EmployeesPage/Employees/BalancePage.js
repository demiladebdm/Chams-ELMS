import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const BalancePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Schedule</Text>
      <View style={styles.details}>
        <Text style={styles.detail}>4 Used</Text>
        <Text style={styles.detail}>14 Total days</Text>
      </View>
      <Text style={styles.heading}>Casual</Text>
      <View style={styles.details}>
        <Text style={styles.detail}>4 Used</Text>
        <Text style={styles.detail}>14 Total days</Text>
      </View>
      <Text style={styles.heading}>Maternity</Text>
      <View style={styles.details}>
        <Text style={styles.detail}>0 Used</Text>
        <Text style={styles.detail}>30 Total days</Text>
      </View>
    </View>
  );
};

export default BalancePage;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.colorSecondaryLight,
    marginBottom: 23,
    paddingLeft: 14,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 19,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  detail: {
    fontSize: 19,
    fontWeight: "600",
  },
});
