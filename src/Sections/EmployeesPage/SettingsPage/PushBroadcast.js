import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import PrimaryButton from "../../../components/UI/PrimaryButton";

const PushBroadcast = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHeader}>
        <Image
          source={require("../../../assets/images/SentSuccessfully.png")}
        />
      </View>
      <View
        style={{
          height: "50%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#1B4760",
            marginLeft: 20,
            marginTop: 10,
            width: "100%",
          }}
        >
          Message
        </Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type your message here..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => navigation.navigate("Sent Successfully")}
            btnStyle={styles.btnStyle}
          >
            <Text style={styles.btnText}>Send Message</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default PushBroadcast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  imageHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#8DC2A9",
    height: "50%",
  },
  btnContainer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    width: 334,
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
  textAreaContainer: {
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
    margin: 20,
    padding: 10,
    width: "90%",
  },
});
