import { Text, View, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";
import Page2 from "../../components/Page2";
import Page3 from "../../components/Page3";
import Page4 from "../../components/Page4";
import { useState } from "react";
import { COLORS } from "../../constants";
import MappedData from "../../components/MappedData";

const Onboarding = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const data = [<Page2 />, <Page3 />, <Page4 />];
  // const defaultPointer

  const handlePage = (page) => {
    if (page === 2) {
      setPage(0);
      navigation.navigate("Login and Signup");
    } else setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MappedData data={data} page={page}/>
        {data[page]}
        <View style={styles.btnContainer}>
          <PrimaryButton
            onPress={() => {
              handlePage(page);
            }}
            btnStyle={styles.btnStyle}
          >
            <Text style={{ fontSize: 40, fontWeight: 400 }}>
              {page === 2 ? "Done" : "Next"}
            </Text>
          </PrimaryButton>
        </View>
        <Pressable onPress={() => navigation.navigate("Login and Signup")}>
          {page === 2 ? (
            ""
          ) : (
            <Text style={{ fontSize: 36, fontWeight: 400 }}>Skip</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  content: {
    height: "90%",
    paddingHorizontal: 47,
    paddingTop: "15%",
    alignItems: "center",
  },
  btnContainer: {
    borderRadius: 19,
    marginBottom: 38,
    overflow: "hidden",
  },
  btnStyle: {
    width: 236,
    height: 75,
  },
});
