import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
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

const Page = () => {
  const [loggingIn, setLoggingIn] = useState(false)

  // TODO: add google signin
  const { signIn, signInWithGoogle } = useAuth()

  const { control, handleSubmit, register, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // TODO: handle email reset link here
  };

  const isIos = Platform.OS === 'ios';

  return (
    <View style={[styles.container, { backgroundColor: Colors.palette.bg }]}>
      <View style={styles.main}>
        <KeyboardAvoidingView style={{ marginTop: 24 }} behavior={isIos ? 'padding' : 'height'}>
          <View style={{ alignItems: 'center' }}>
            <StyledText size="lg" font="light">Oops!</StyledText>
            <StyledText size="xxl" font="bold" style={{ color: Colors.palette.primary }}>I forgot my password...</StyledText>
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
          </View>

          <Space size={20} />

          <View style={styles.centered}>
            <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed ? styles.buttonPressed : {},
                ]}
                onPress={handleSubmit(onSubmit)}
                disabled={loggingIn}
              >
              <StyledText font="semiBold" style={{ color: Colors.palette.text }}>Email me the Reset Link</StyledText>
            </Pressable>

            <Space size={20} />

            <View style={styles.row}>
              <StyledText>Hold on. I think I remember it :)</StyledText>
              <Link href="/signin">
                <StyledText size="md" font="bold" style={{ color: Colors.palette.primary }}>Sign In</StyledText>
              </Link>
            </View>

            <Space size={20} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default Page

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