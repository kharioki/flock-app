import React from 'react'
import { ImageBackground, StyleSheet, useWindowDimensions, View, Pressable } from 'react-native'
import StyledText from '../common/StyledText'
import Row from '../common/Row'
import { Ionicons } from '@expo/vector-icons'
import Space from '../common/Space'
import Colors from '../../constants/Colors'
import dayjs from 'dayjs'
import { Link } from 'expo-router'

type Props = {
  item: any
  router: any
  isWide?: boolean
  isFullWidth?: boolean
}

const EventCard = ({ item, router, isWide, isFullWidth }: Props) => {
  const { width } = useWindowDimensions()

  const _time = dayjs(item.time).format("hh A")
  const _date = dayjs(item.date).format("D MMM YYYY")

  return (
    <View
      style={[
        styles.card,
        {
          width: !isWide && !isFullWidth
            ? width * 0.45
            : isWide && !isFullWidth
            ? width * 0.7
            : "100%",
        }
      ]}
    >
      <Pressable onPress={() => router.push({ pathname: `${item.slug}`, params: { slug: item.slug } })}>
        <ImageBackground source={{ uri: item.poster }} style={styles.image} imageStyle={styles.radius}>
          <View style={styles.content}>

            <View style={styles.top}>
              <Space size={6} />
              <Row>
                <View style={[styles.chip, { backgroundColor: Colors.palette.card }]}>
                  <StyledText size="sm" font="light">{_date}, {_time}</StyledText>
                </View>
                <Pressable onPress={() => {}}>
                  <Ionicons name="heart-outline" size={24} color={Colors.palette.primary} />
                </Pressable>
              </Row>
            </View>

            <View style={styles.bottom}>
              <StyledText size="base" font="medium">{item.title}</StyledText>
              <Space size={8} />
              <StyledText size="base" font="light" style={{ color: Colors.palette.lightGray }}>
                {item.venue}, {item.location}
              </StyledText>
              <Space size={6} />
            </View>

          </View>
        </ImageBackground>
      </Pressable>
    </View>
  )
}

export default EventCard

const styles = StyleSheet.create({
  card: {
    height: 200,
    marginRight: 10,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 16,
  },
  radius: {
    borderRadius: 16,
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    padding: 8,
    borderRadius: 16,
  },
  top: {
    paddingHorizontal: 8,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  bottom: {
    paddingHorizontal: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  chip: {
    padding: 8,
    borderRadius: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
})