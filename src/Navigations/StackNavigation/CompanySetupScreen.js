import { COLORS } from "../../constants";
import CompanySetupPage from "../../Sections/CompanySetup/CompanySetupPage";
import AddLeaveType from "../../Sections/CompanySetup/AddLeaveType";

const CompanySetupScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Company Setup"
        options={{
          title: "Set up your Company",
          headerTintColor: "transparent",
          headerTitleStyle: { color: "white", fontSize: "25%" },
          headerStyle: { backgroundColor: COLORS.colorPrimaryDark },
        }}
        component={CompanySetupPage}
      />
      <Stack.Screen
        name="Leave Type"
        options={{ headerShown: false }}
        component={AddLeaveType}
      />
    </>
  );
};

export default CompanySetupScreen;
