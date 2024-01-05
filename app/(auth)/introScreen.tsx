import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import StyledText from '../../components/common/StyledText'
import Colors from '../../constants/Colors'
import Space from '../../components/common/Space'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const introScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/_bg.jpg")}
      style={styles.container}
      resizeMode='cover'
    >
      <View style={styles.main}>
        <View style={styles.bottom}>
          <Space size={20} />
          <View style={styles.jumbotron}>
            <StyledText size="xxl" font="bold">Finding Events Nearby,</StyledText>
            <Space size={12} />
            <StyledText size="lg" font="medium">has never been easier...</StyledText>
          </View>
          <Space size={40} />
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

          <Space size={40} />

          <PrimaryButton label="Continue" onPress={() => router.replace("/signin")} style={styles.btn} />

          <Space size={20} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default introScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.palette.bgFadePurple,
  },
  jumbotron: {
    width: "100%",
  },
  bottom: {
    top: "30%",
    width: "100%",
    backgroundColor: Colors.palette.bgFadePurple,
    alignItems: "center",
    bottom: 0,
    padding: 16
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