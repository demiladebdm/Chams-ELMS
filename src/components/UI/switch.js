import { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const SwitchToggle = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState); 

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#ffffff', true: 'red'}}
        thumbColor={isEnabled ? '#ffffff' : '#F2EEEE'}
        ios_backgroundColor="#ffffff"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={[isEnabled ? styles.switchEnableBorder : styles.switchDisableBorder]}
      />
    </View>
  )
}

export default SwitchToggle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchEnableBorder: {
  borderColor: 'none',
  borderWidth: 1,
  },
  switchDisableBorder: {
  borderColor: 'red',
  borderWidth: 2,  
  }
});