import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./StackNavigation/OnboardingScreen";
import LoginAndSignupScreen from "./StackNavigation/LoginAndSignupScreen";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      {OnboardingScreen(Stack)}
      {LoginAndSignupScreen(Stack)}
    </Stack.Navigator>
  );
};

export default AuthStack;
