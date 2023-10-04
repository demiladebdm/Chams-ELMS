import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants";
import SettingsPage from "../Sections/EmployeesPage/SettingsPage/Settings/SettingsPage";

const MappedData = ({ data, page, setPage }) => {
  return (
    <View style={styles.pointerContainer}>
      {data.map((icon, index) => {
        return (
          <Pressable
            key={index}
            style={[
              styles.pointer,
              index === page ? styles.activePointer : styles.inactivePointer,
            ]}
            onPress={()=>{setPage(index)}}
          >
          </Pressable>
        );
      })}
    </View>
  );
};

export default MappedData;

const styles = StyleSheet.create({
  pointerContainer: {
    flexDirection: "row",
    gap: 15,
  },
  pointer: {
    height: 12,
    width: 12,
    borderRadius: "50%",
  },
  activePointer: {
    backgroundColor: COLORS.dangerTextColor,
  },
  inactivePointer: {
    backgroundColor: COLORS.inactivePointer,
  },
});
