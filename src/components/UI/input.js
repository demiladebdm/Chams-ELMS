import { TextInput, View, StyleSheet } from "react-native";

const Input = ({
  textInputConfig,
  containerInput,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  // Setting the default container Style
  // const defaultContainerStyle = [
  //   inputContainer,
  //   invalid ? styles.inputError : null,
  // ];
  const defaultInputContainer = [styles.inputContainer, containerInput];

  return (
    <View style={styles.container}>
      <View style={defaultInputContainer}>
        <TextInput
          style={styles.input}
          {...textInputConfig}
          cursorColor="#000000"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    height: 46,
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
  },
  inputError: {
    fontSize: 14,
    backgroundColor: "#d49b9b",
  },
});
export default Input;
