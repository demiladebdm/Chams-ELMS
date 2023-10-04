import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompanySetupScreen from "./StackNavigation/CompanySetupScreen";
import HomeScreen from "./StackNavigation/HomeScreen";
import EmployeeScreen from "./StackNavigation/EmployeeSecreen";
import SettingsSreen from "./StackNavigation/SettingsSreen";
import SettingsPageSreen from "./StackNavigation/SettingsPageSreen";
import CalendarScreen from "./StackNavigation/CalendarScreen";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      {CompanySetupScreen(Stack)}
      {HomeScreen(Stack)}
      {CalendarScreen(Stack)}
      {EmployeeScreen(Stack)}
      {SettingsSreen(Stack)}
      {SettingsPageSreen(Stack)}
    </Stack.Navigator>
  );
};

export default AppStack;
