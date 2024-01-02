import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import StyledText from '../../components/common/StyledText'
import Colors from '../../constants/Colors'
import Space from '../../components/common/Space'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const IntroScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: Colors.palette.bg, flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.jumbotron}>
          <StyledText size="xxl" font="bold">Finding Events Nearby,</StyledText>
          <Space size={12} />
          <StyledText size="lg" font="medium">has never been easier...</StyledText>
        </View>
        <View style={styles.bottom}>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <StyledText size="xxl" font="bold">28</StyledText>
              <StyledText size="base" font="medium">Upcoming</StyledText>
            </View>
            <View style={styles.stat}>
              <StyledText size="xxl" font="bold">17</StyledText>
              <StyledText size="base" font="medium">New</StyledText>
            </View>
            <View style={styles.stat}>
              <StyledText size="xxl" font="bold">9</StyledText>
              <StyledText size="base" font="medium">Live</StyledText>
            </View>
            <View style={styles.stat}>
              <StyledText size="xxl" font="bold">54</StyledText>
              <StyledText size="base" font="medium">All</StyledText>
            </View>
          </View>

          <PrimaryButton label="Continue" onPress={() => router.replace("/signin")} style={styles.btn} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 30,
    padding: 20,
  },
  jumbotron: {
    width: "100%",
  },
  bottom: {
    top: "30%",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    gap: 40
  },
  stats: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  stat: {
    gap: 8,
    alignItems: "center"
  },
  btn: {
    width: "100%"
  }
})