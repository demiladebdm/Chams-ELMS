import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import Logout from "./Logout";

const SettingsPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const settingsOptions = [
    {
      id: 1,
      name: "Working Days",
      navigateUrl: "Custom Settings for Working Days",
    },
    {
      id: 2,
      name: "Leave Types",
      navigateUrl: "Custom Settings for Leave Type",
    },
    {
      id: 3,
      name: "My Profile",
      navigateUrl: "Profile Page",
    },
    {
      id: 4,
      name: "Change Password",
      navigateUrl: "Settings Change Passsword Page",
    },
    {
      id: 5,
      name: "Share the App",
      navigateUrl: "",
    },
    {
      id: 6,
      name: "Logout",
      navigateUrl: "Logout",
    },
  ];

  return (
    <View>
      {settingsOptions.map((option) => {
        return (
          <View
            style={{
              width: "100%",
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
              padding: 20,
              // position: "relative",
            }}
          >
            <View style={{ display: "flex", alignItems: "flex-start" }}>
              <Pressable
                onPress={() => {
                  option.name === "Logout"
                    ? setModalVisible(!modalVisible)
                    : navigation.navigate(option.navigateUrl);
                }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: 600, marginBottom: 10 }}
                >
                  {option.name}
                </Text>
              </Pressable>
            </View>
          </View>
        );
      })}
      {modalVisible && (
        <Logout setModalVisible={setModalVisible} modalVisible={modalVisible} />
      )}
    </View>
  );
};

export default SettingsPage;
