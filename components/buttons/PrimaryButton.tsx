import React from 'react'
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native'
import Colors from '../../constants/Colors';

const PrimaryButton = ({ onPress, label, style, labelStyle }: {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <TouchableOpacity
      style={[{
        backgroundColor: Colors.palette.primary,
        paddingHorizontal: 32,
        height: 52,
        borderRadius: 26,
        alignItems: "center",
        justifyContent: "center",
      }, style]}
      onPress={onPress}
    >
      <Text style={[{ fontSize: 16, fontWeight: "600", color: Colors.palette.text }, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton