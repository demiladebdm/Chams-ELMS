import Calendar from "../../Sections/EmployeesPage/CalendarPage/Calendar";
import CalendarDetails from "../../Sections/EmployeesPage/CalendarPage/CalendarDetails";
import Header from "../../components/HeaderComponent";

const CalendarScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Calendar"
        options={{ headerShown: false }}
        component={Calendar}
      />
      <Stack.Screen
        name="Calendar Details"
        options={{
          headerTitle: () => (
            <Header
              title="Details"
              style={{
                color: "#8B8686",
                fontSize: 20,
                fontWeight: "700",
              }}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            borderBottomColor: "#E1DCDC",
            borderBottomWidth: 1,
          },
        }}
        component={CalendarDetails}
      />
    </>
  );
};

export default CalendarScreen;
