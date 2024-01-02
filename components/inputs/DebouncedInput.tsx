import React from 'react';
import debounce  from "lodash.debounce"
import Input from './Input';
import { TextInputProps } from 'react-native';

type Props = {
  name?: any,
  control?: any,
  options?: any,
  ref?: any,
  // onChangeText: () => void
} & TextInputProps;

const DebouncedInput = ({ onChangeText, ...rest }: Props) => {
  const debouncedCallback = debounce(onChangeText!, 300);

  return <Input onChangeText={debouncedCallback} {...rest} />
}

export default DebouncedInput;
