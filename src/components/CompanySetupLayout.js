import { View, Text, StyleSheet } from "react-native";

const CompanySetupLayout = ({ title, children }) => {
  return (
    <View style={{ marginTop: "12%" }}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default CompanySetupLayout;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: '20%',
    fontSize: 25,
    fontWeight: 700,
  },
});
