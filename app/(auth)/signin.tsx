import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'
import { AntDesign } from '@expo/vector-icons'

import StyledText from '../../components/common/StyledText'
import { useAuth } from '../../context/auth'
import Input from '../../components/inputs/Input'
import Space from '../../components/common/Space'
import Colors from '../../constants/Colors'

type FormData = {
  email: string;
  password: string;
};

const signin = () => {
  const [loggingIn, setLoggingIn] = useState(false)

  // TODO: add google signin
  const { signIn, signInWithGoogle } = useAuth()

  const { control, handleSubmit, register, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // console.log(data);
      setLoggingIn(true);
      await signIn(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoggingIn(false);
    }
  };

  const isIos = Platform.OS === 'ios';

  return (
    <View style={[styles.container, { backgroundColor: Colors.palette.bg }]}>
      <View style={styles.main}>
        <KeyboardAvoidingView style={{ marginTop: 24 }} behavior={isIos ? 'padding' : 'height'}>
          <View style={{ alignItems: 'center' }}>
            <StyledText size="lg" font="light">Welcome back to</StyledText>
            <StyledText size="xxl" font="bold" style={{ color: Colors.palette.primary }}>Flock Events!</StyledText>
          </View>
          <Space size={20} />

          <View style={styles.centered}>
            <StyledText style={{ marginVertical: 8, color: Colors.palette.lightGray }}>Email</StyledText>
            <Input
              control={control}
              autoCapitalize="none"
              {...register('email', { required: true }) }
              ref={null}
            />
            {errors.email && <StyledText size="sm" style={{ color: "red" }}>Email address is required.</StyledText>}

            <StyledText style={{ marginVertical: 8, color: Colors.palette.lightGray }}>Password</StyledText>
            <Input
              control={control}
              secureTextEntry
              {...register('password', { required: true }) }
              ref={null}
            />
            {errors.password && <StyledText size="sm" style={{ color: "red" }}>Password is required.</StyledText>}

            <View style={[styles.row, { marginTop: 16 }]}>
              <StyledText>Don't remember?</StyledText>
              <Link href="/forgotPassword">
                <StyledText size="md" font="bold" style={{ color: Colors.palette.midPurple }}>Forgot password?</StyledText>
              </Link>
            </View>
          </View>

          <Space size={20} />

          <View style={styles.centered}>
            <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed ? styles.buttonPressed : {},
                ]}
                onPress={handleSubmit(onSubmit)} disabled={loggingIn}
              >
              {loggingIn
                ? <ActivityIndicator size="small" color={Colors.palette.text} />
                : <StyledText font="semiBold" style={{ color: Colors.palette.text }}>Sign In</StyledText>
              }
            </Pressable>

            <Space size={20} />

            <View style={styles.row}>
              <StyledText>Don't have an account?</StyledText>
              <Link href="/signup">
                <StyledText size="md" font="bold" style={{ color: Colors.palette.primary }}>Sign up</StyledText>
              </Link>
            </View>

            <Space size={20} />

            <Pressable
              style={({ pressed }) => [
                styles.socialBtn,
                pressed && { backgroundColor: Colors.palette.card }
              ]}
              onPress={() => {}}
            >
              <AntDesign name='google' size={16} color={Colors.palette.text} style={styles.icon} />
              <StyledText font="semiBold" style={{ color: Colors.palette.text }}>Sign in with Google</StyledText>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginTop: 16,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: Colors.palette.primary,
  },
  buttonPressed: {
    backgroundColor: Colors.palette.darkPurple,
  },
  socialBtn: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.palette.bgPurple,
    borderWidth: 0.7,
    borderColor: Colors.palette.lightGray,
    gap: 20
  },
  centered: {
    width: "100%",
  },
  rowButton: {
    marginTop: 16,
    height: 40,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 6,
    marginBottom: 4
  },
  line: {
    height: 1,
    flex: 1,
    marginHorizontal: 8,
    opacity: 0.6
  }
})