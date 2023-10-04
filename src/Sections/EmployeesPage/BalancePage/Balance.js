import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";
import BalancePage from "./BalancePage";
import RequestPage from "./RequestPage";

const Balance = () => {
  const [page, setPage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => setPage(0)}>
          <Text
            style={[
              styles.heading,
              page === 0 ? styles.active : styles.inactive,
            ]}
          >
            Requests
          </Text>
        </Pressable>
        <Pressable onPress={() => setPage(1)}>
          <Text
            style={[
              styles.heading,
              page === 1 ? styles.active : styles.inactive,
            ]}
          >
            Balance
          </Text>
        </Pressable>
      </View>

      <View>{page === 0 ? <RequestPage /> : <BalancePage />}</View>
    </View>
  );
};

export default Balance;

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
});
