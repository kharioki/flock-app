import React from 'react'
import { Pressable, Text, StyleProp, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

const PrimaryButton = ({ onPress, label, style, labelStyle }: {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        styles.button,
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
    >
      <Text style={[{ fontSize: 16, fontWeight: "600", color: Colors.palette.text }, labelStyle]}>
        {label}
      </Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.palette.primary,
    paddingHorizontal: 32,
    height: 48,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: Colors.palette.darkPurple,
  },
})