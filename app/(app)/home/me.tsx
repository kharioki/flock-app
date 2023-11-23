import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/containers/MainContainer'
import StyledText from '../../../components/common/StyledText'
import Colors from '../../../constants/Colors'
import { Image } from 'expo-image'
import Space from '../../../components/common/Space'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import Row from '../../../components/common/Row'

const user = {
  uid: '1',
  displayName: 'John Doe',
  email: 'johndoe@email.com',
  photoURL: 'https://robohash.org/5759c92851e66680ae5723f5de4f7757?set=set4&bgset=bg2&size=400x400',
  phoneNumber: '+254729918514'
};

const me = () => {
  return (
    <MainContainer>
      <View style={styles.main}>
        <View style={styles.top}>
          <StyledText size="lg" font="light" style={styles.text}>My Account</StyledText>

          <Space size={20} />

          <Image
            source={{ uri: user.photoURL }}
            style={styles.roundedImage}
            contentFit="cover"
            transition={1000}
          />

          <Space size={16} />

          <StyledText size="lg" font="light">{user.displayName}</StyledText>

          <Space size={16} />

          <View style={styles.row}>
            <View style={styles.textRow}>
              <Feather name="phone" size={16} color={Colors.palette.lightPurple} />
              <Space size={6} horizontal />
              <StyledText size="base" font="semiBold" style={styles.text}>{user.phoneNumber}</StyledText>
            </View>

            <View style={styles.textRow}>
              <Entypo name="email" size={16} color={Colors.palette.lightPurple} />
              <Space size={6} horizontal />
              <StyledText size="base" font="semiBold" style={styles.text}>{user.email}</StyledText>
            </View>
          </View>

          <Space size={8} />
        </View>

        <View style={styles.divider} />

        <Pressable style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Edit my profile</StyledText>
        </Pressable>

        <Pressable style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Customize my recommendations</StyledText>
        </Pressable>

        <View style={styles.divider} />

        <Pressable style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>My Wishlist</StyledText>
        </Pressable>

        <View style={styles.divider} />

        <Row style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Language</StyledText>
          <Pressable >
            <StyledText size="md" font="light" variant="link">Eng</StyledText>
          </Pressable>
        </Row>
        <Row style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Privacy Policy</StyledText>
          <Pressable>
            <StyledText size="md" font="light" variant="link">...Read</StyledText>
          </Pressable>
        </Row>
        <Row style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Terms & Conditions</StyledText>
          <Pressable>
            <StyledText size="md" font="light" variant="link">...Read</StyledText>
          </Pressable>
        </Row>

        <View style={styles.divider} />

        <Pressable style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Help & Support</StyledText>
        </Pressable>
        <Pressable style={styles.link}>
          <StyledText size="md" font="regular" style={styles.text}>Contact us</StyledText>
        </Pressable>

        <View style={styles.divider} />

        <Space size={100} />

      </View>
    </MainContainer>
  )
}

export default me

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    maxWidth: 960,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  roundedImage: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  text: {
    color: Colors.palette.ash,
  },
  link: {
    marginVertical: 12,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.palette.card,
    opacity: 0.2,
    marginVertical: 10,
  }
})