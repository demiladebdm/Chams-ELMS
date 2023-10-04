import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";

const AppNav = () => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        {user !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNav;
