import React, { useContext } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { AuthContext } from "../../../../context/AuthContext";

const Logout = ({ modalVisible, setModalVisible }) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to logout
            </Text>

            <View style={styles.btnContainer}>
              <Pressable style={styles.btn} onPress={() => logout()}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-55%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: "20%",
    paddingHorizontal: "13%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnContainer: {
    flexDirection: "row",
    gap: "15%",
  },
  btn: {
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 37,
    elevation: 2,
    backgroundColor: "#F40606",
  },
  textStyle: {
    color: "white",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "center",
  },
  modalText: {
    fontSize: 27,
    fontWeight: "400",
    marginBottom: 52,
    textAlign: "center",
  },
});
