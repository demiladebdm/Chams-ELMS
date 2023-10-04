import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MappedData from "../../components/MappedData";
import LeaveType from "./LeaveType";
import WorkingDays from "./WorkingDays";

import PrimaryButton from "../../components/UI/PrimaryButton";

const CompanySetupPage = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const data = [<WorkingDays />, <LeaveType />];

  const handleNext = () => {
    if (page === 0) {
      setPage(page + 1);
    } else {
      navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.container}>
      <MappedData data={data} page={page} setPage={setPage} />
      {data[page]}

      <View style={styles.btnContainer}>
        <PrimaryButton
          onPress={(e) => handleNext(e)}
          btnStyle={styles.btnStyle}
        >
          <Text style={styles.btnText}>Continue</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default CompanySetupPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: "17%",
    height: "100%",
  },
  btnContainer: {
    borderRadius: 10,
    overflow: "hidden",
    width: 334,
    marginTop: "4%",
  },
  btnStyle: {
    width: "100%",
    height: 46,
  },
  btnText: {
    fontSize: 25,
    fontWeight: 700,
  },
});
