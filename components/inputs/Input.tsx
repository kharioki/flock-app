import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import type { TextInputProps } from "react-native";
import { useController } from "react-hook-form";
import Colors from "../../constants/Colors";

type InputProps = {
  name?: any,
  // defaultValue?: undefined,
  control?: any,
  options?: any,
  ref?: any,
  isTextarea?: boolean,
} & TextInputProps;

const Input = (props: InputProps) => {
  const { control, name, defaultValue, isTextarea, style, ...rest } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: defaultValue || "",
  });

  return (
    <TextInput
      style={[
        styles.input,
        isTextarea && { height: 90 },
        {
          borderColor: Colors.palette.ash,
          color: Colors.palette.charcoal
        },
        style
      ]}
      value={field.value}
      onChangeText={field.onChange}
      placeholderTextColor={Colors.palette.ash}
      {...rest}
    />
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});

export default Input;
