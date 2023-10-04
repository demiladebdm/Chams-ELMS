import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import { employees } from "../../../Data/data";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const Calendar = ({ navigation }) => {
  // const route = useRoute();
  // const { itemId, otherParam } = route.params;
  // const navigation = useNavigation();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "2%",
            paddingRight: "2%",
            margin: 0,
          }}
        >
          <DatePicker
            mode="calendar"
            minimumDate={startDate}
            selected={startedDate}
            onDateChanged={handleChangeStartDate}
            onSelectedChange={(date) => setSelectedStartDate(date)}
            options={{
              backgroundColor: "#fff",
              textHeaderColor: "#000",
              textDefaultColor: "#080516",
              selectedTextColor: "#080516",
              mainColor: "orange",
              textSecondaryColor: "#080516",
              borderColor: "rgba(122, 146, 165, 0.1)",
            }}
          />

          <TouchableOpacity onPress={handleOnPressStartDate}>
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            paddingLeft: "5%",
            paddingRight: "2%",
            marginTop: "3%",
          }}
        >
          <TouchableOpacity
            style={styles.inputBtn}
            onPress={handleOnPressStartDate}
          >
            <Text style={{ fontSize: 18, fontWeight: 800 }}>
              {selectedStartDate}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {employees.length ? (
            employees.map((employee) => {
              return (
                <View key={employee.id} style={styles.employeeDetailContaier}>
                  <View style={styles.imgContainer}>
                    <Image
                      style={styles.image}
                      source={require("../../../assets/images/img-1.png")}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <View>
                      <Text style={styles.name}>{employee.name}</Text>
                      <Text style={styles.date}>{employee.start}</Text>
                      <Text style={styles.date}>{employee.end}</Text>
                    </View>
                    <View style={styles.rightSection}>
                      <Text style={styles.dayOff}>3 Days off</Text>
                      <Pressable
                        onPress={() =>
                          navigation.navigate("Calendar Details", {
                            id: employee.id,
                            name: employee.name,
                            title: employee.title,
                            start: employee.start,
                            end: employee.end,
                            reason: employee.reason,
                          })
                        }
                      >
                        <View>
                          <Text style={styles.schedule}>Schedule</Text>
                        </View>
                      </Pressable>
                    </View>
                    <Image
                      source={require("../../../assets/icons/arrow_down.png")}
                      style={styles.icon}
                    />
                  </View>
                </View>
              );
            })
          ) : (
            <View>
              <Text style={styles.noEmployee}>Nobody is off on this day</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  // textHeader: {
  //   fontSize: 36,
  //   marginVertical: 60,
  //   color: "#111",
  // },
  // textSubHeader: {
  //   fontSize: 25,
  //   color: "#111",
  // },
  // inputBtn: {
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   borderColor: "#222",
  //   height: 50,
  //   paddingLeft: 8,
  //   fontSize: 18,
  //   justifyContent: "center",
  //   marginTop: 14,
  // },
  // submitBtn: {
  //   backgroundColor: "#342342",
  //   paddingVertical: 22,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 8,
  //   paddingVertical: 12,
  //   marginVertical: 16,
  // },
  // centeredView: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "#080516",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 20,
  //   padding: 35,
  //   width: "90%",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  contentContainer: {
    marginTop: 43,
    alignItems: "center",
    height: "75%",
    width: "100%",
  },
  employeeDetailContaier: {
    backgroundColor: "white",
    width: "95%",
    gap: "30%",
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#F2EEEE",
  },
  imgContainer: {
    flex: 1,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  textContainer: {
    flex: 3,
  },
  name: {
    fontSize: 19,
    fontWeight: "700",
    marginBottom: "12%",
  },
  date: {
    fontWeight: 600,
    fontSize: 19,
    marginBottom: 7,
  },
  icon: {
    position: "absolute",
    bottom: "5%",
    left: "-8%",
  },
  rightSection: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dayOff: {
    fontWeight: 700,
    fontSize: 19,
    color: "#CA1212",
  },
  schedule: {
    fontWeight: 700,
    fontSize: 17,
    color: "#15844F",
  },
  noEmployee: {
    fontSize: 20,
    fontWeight: "700",
    color: "#8B8686",
    textAlign: "center",
  },
});
