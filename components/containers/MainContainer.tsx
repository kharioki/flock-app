import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

type MainContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const isIos = Platform.OS === 'ios';

const SafeAreaContainer = (props: MainContainerProps) => {
  const { children, style } = props;

  const backgroundColor = Colors.palette.bgPurple;

  const statusBarStyle = 'light';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]} {...props}>
      <StatusBar style={statusBarStyle} />

      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={isIos ? 0 : 0}
        style={styles.keyboard}
      >
        <ScrollView
          contentContainerStyle={styles.containerStyle}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottom} />

    </SafeAreaView>
  );
};

const MainContainer = (props: MainContainerProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaContainer {...props} />
    </SafeAreaProvider>
  );
}

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
  bottom: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    position: "absolute",
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default MainContainer;
