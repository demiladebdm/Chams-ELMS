import { View, StyleSheet } from "react-native";
import { useEffect } from "react";
import { CheckBox } from 'react-native-elements';


const RadioButton = ({ radioOptions, selectedValue, onValueChange }) => {
  useEffect(() => {
    console.log('Selected Value:', selectedValue);
  }, [selectedValue]);

  const handleRadioPress = (value) => {
    if (selectedValue !== value) {
      onValueChange(value);
    }
  };

  return (
    <View style={styles.container}>
      {radioOptions.map((option) => (
        <CheckBox
          key={option.value}
          title={option.label}
          checked={selectedValue === option.value}
          onPress={() => handleRadioPress(option.value)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxTitle}
          checkedColor="green"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {
    width: "100%",    
    marginVertical: 10,
  },
  checkboxContainer: {    
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
  },
  checkboxTitle: {
    marginRight: 10,
  }
});

export default RadioButton;
