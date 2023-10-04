// import LeaveType from "../../Sections/CompanySetup/LeaveType";
// import WorkingDays from "../../Sections/CompanySetup/WorkingDays";
import Header from "../../components/HeaderComponent";
import ProfilePage from "../../Sections/EmployeesPage/SettingsPage/Profile/ProfilePage";
import ChangePassword from "../../Sections/EmployeesPage/SettingsPage/ChangePassword/ChangePassword";
import ChangePasswordSuccess from "../../Sections/EmployeesPage/SettingsPage/ChangePassword/ChangePasswordSuccess";
import SettingForWorkingDays from "../../Sections/EmployeesPage/SettingsPage/SettingsList/SettingForWorkingDays";
import SettingForLeaveTypes from "../../Sections/EmployeesPage/SettingsPage/SettingsList/SettingForLeaveTypes";

const SettingsPageSreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Custom Settings for Working Days"
        options={{
          headerTitle: () => (
            <Header
              title="Working Days"
              style={{ color: "#000", fontSize: 27, fontWeight: "800" }}
              image={require("../../assets/icons/arrow_left_black.png")}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
        }}
        component={SettingForWorkingDays}
      />
      <Stack.Screen
        name="Custom Settings for Leave Type"
        options={{
          headerTitle: () => (
            <Header
              title="Leave Type"
              style={{ color: "#000", fontSize: 27, fontWeight: "800" }}
              image={require("../../assets/icons/arrow_left_black.png")}
              icon2={require("../../assets/icons/trash_dark.png")}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
        }}
        component={SettingForLeaveTypes}
      />
      <Stack.Screen
        name="Profile Page"
        options={{
          headerShown: false,
        }}
        component={ProfilePage}
      />
      <Stack.Screen
        name="Settings Change Passsword Page"
        options={{
          headerTitle: () => (
            <Header
              title="Change Passsword"
              style={{ color: "#000", fontSize: 27, fontWeight: "400" }}
              image={require("../../assets/icons/arrow_left_black.png")}
              imageHeader={require("../../assets/images/GearSettings.png")}
              imageStyle={{width: "100%", height: "100%", resizeMode: 'contain'}}
            />
          ),
          headerTintColor: "transparent",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
        }}
        component={ChangePassword}
      />
      <Stack.Screen
        name="Password Change Successful"
        options={{ headerShown: false }}
        component={ ChangePasswordSuccess}
      />
    </>
  );
};

export default SettingsPageSreen;
