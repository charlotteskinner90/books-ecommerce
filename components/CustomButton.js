import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

type Props = {
  onPress: () => void,
  buttonText: string,
}

const CustomButton = ({onPress, buttonText}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    backgroundColor: Colors.buttonColor,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 18,
    paddingVertical: 16,
    color: Colors.white,
    textAlign: 'center',
  },
});