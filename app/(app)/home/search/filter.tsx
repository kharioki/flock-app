import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import MainContainer from '../../../../components/containers/MainContainer'
import StyledText from '../../../../components/common/StyledText'
import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import Space from '../../../../components/common/Space'

const Page = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <Stack.Screen
        options={{
          headerTitleAlign: "left",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="md-close-outline" size={24} color={Colors.palette.text} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable>
              <StyledText size="md" font="semiBold">Clear</StyledText>
            </Pressable>
          ),
        }}
      />
      <Space size={20} />
    </MainContainer>
  )
}

export default Page

const styles = StyleSheet.create({})