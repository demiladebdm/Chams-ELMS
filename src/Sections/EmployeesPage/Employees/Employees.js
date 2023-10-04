import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { COLORS } from "../../../constants";
import { employees } from "../../../Data/data";

const Employees = ({ navigation }) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputFieldBackground}>
        <View style={styles.inputFieldContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="All Employees"
            value={search}
            onChangeText={(e) => setSearch(e.target.value)}
          />
          <Image source={require("../../../assets/icons/filter.png")} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        {employees.length ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.content}
          >
            {employees.map((employee) => {
              return (
                <View key={employee.id} style={styles.employeeDetailContaier}>
                  <View>
                    <Text style={styles.name}>{employee.name}</Text>
                    <Text style={styles.title}>{employee.title}</Text>
                    <Text style={styles.leave}>
                      Casual Leave: {employee.casualLeave}/14
                    </Text>
                    <Text style={styles.leave}>
                      Sick Leave: {employee.sickLeave}/7
                    </Text>
                    <Text style={styles.leave}>
                      Maternity Leave: {employee.maternityLeave}/30
                    </Text>
                    <Text style={styles.leave}>
                      Annual Leave: {employee.annualLeave}/365
                    </Text>
                  </View>
                  <View style={styles.rightSection}>
                    <View style={styles.topImg}>
                      <Image
                        source={require("../../../assets/images/img-1.png")}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View style={styles.bottomLink}>
                      <Image
                        source={require("../../../assets/icons/phone.png")}
                      />
                      <Pressable
                        onPress={() => navigation.navigate("Employee Account")}
                      >
                        <Text style={styles.linkText}>View all</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <View>
            <Text style={styles.noEmployee}>
              You have no employee on the list.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Add Employee")}
        >
          <Text style={styles.btnText}>Invite Employee</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  inputFieldBackground: {
    width: "100%",
    height: "15%",
    backgroundColor: "#EEE9E9",
    paddingTop: 21,
    paddingBottom: 13,
    paddingHorizontal: 26,
  },
  inputFieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingRight: 10,
    paddingVertical: 5,
  },
  inputField: {
    backgroundColor: "#fff",
    height: "100%",
    padding: 15,
    fontSize: 25,
    fontWeight: "700",
    borderRadius: 15,
  },
  contentContainer: {
    alignItems: "center",
    height: "73%",
  },
  content: {
    paddingLeft: 50,
    paddingTop: 23,
  },
  employeeDetailContaier: {
    backgroundColor: COLORS.colorPrimaryDark,
    height: 206,
    borderTopLeftRadius: 37,
    borderBottomLeftRadius: 37,
    paddingTop: 26,
    paddingLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  name: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: "11%",
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",
    marginBottom: "8%",
  },
  leave: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 13,
    marginBottom: "5%",
  },
  rightSection: {
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "2%",
    paddingBottom: 10,
  },
  topImg: {
    width: 100,
    height: 100,
  },
  bottomLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingRight: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
  },
  noEmployee: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: "40%",
    color: "#8B8686",
    textAlign: "center",
    paddingHorizontal: "4%",
  },
  btnContainer: {
    width: "100%",
    height: 68,
    alignItems: "center",
    marginTop: "2%",
  },
  btn: {
    backgroundColor: COLORS.dangerBtnColorPrimary,
    width: 317,
    height: "100%",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
});
