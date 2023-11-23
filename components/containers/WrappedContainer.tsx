import React from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../constants/Colors';

type WrappedContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const isIos = Platform.OS === 'ios';

const WrappedContainer = (props: WrappedContainerProps) => {
  const { children, style } = props;

  const backgroundColor = Colors.palette.bgPurple;

  const statusBarStyle = 'light'

  return (
    <View style={[styles.container, { backgroundColor }, style]} {...props}>
      <StatusBar style={statusBarStyle} />

      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={isIos ? 0 : 0}
        style={styles.keyboard}
      >
        <ScrollView contentContainerStyle={styles.containerStyle} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerStyle: {
    width: '100%',
    alignItems: 'center',
  },
  keyboard: {
    flex: 1,
  },
});

export default WrappedContainer;
