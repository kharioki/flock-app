import { ImageBackground, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import WrappedContainer from '../../components/containers/WrappedContainer'
import StyledText from '../../components/common/StyledText'
import Colors from '../../constants/Colors';
import Space from '../../components/common/Space'
import { mockEvents } from '../../mock/events';
import Row from '../../components/common/Row';
import dayjs from 'dayjs';

const Page = () => {
  const router = useRouter();
  const { slug } = useLocalSearchParams()

  const _event = mockEvents.filter((event) => event.slug === slug)[0];

  const { height, width } = useWindowDimensions()

  const handleFavorite = () => {

  }

  return (
    <WrappedContainer>
      <Stack.Screen
        options={{
          title: `${_event?.title}`,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-undo-outline" size={24} color={Colors.palette.text} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={handleFavorite}>
              <Ionicons name="heart-outline" size={24} color={Colors.palette.text} />
            </Pressable>
          ),
        }}
      />
      <View style={styles.main}>
        <ImageBackground
          source={{ uri: _event?.poster }}
          style={[styles.topImage, { height: height / 2, width }]}
          resizeMode='cover'
        >
          <Pressable
            style={[styles.button, { backgroundColor: Colors.palette.primary }]}
            onPress={() => {}}
          >
            <StyledText size="md" font="semiBold" style={{ color: Colors.palette.text }}>
              I'll be going
            </StyledText>
          </Pressable>
        </ImageBackground>

        <View style={styles.wrapper}>
          <StyledText size="lg" font="medium">{_event?.title}</StyledText>

          <Space size={20} />

          <View style={styles.textRow}>
            <MaterialIcons name="date-range" size={20} color={Colors.palette.ash} />
            <Space size={16} horizontal />
            <StyledText style={styles.text}>{dayjs(_event?.date).format("DD MMM YYYY")}</StyledText>
          </View>

          <Space size={8} />

          <View style={styles.textRow}>
            <Ionicons name="md-time-outline" size={20} color={Colors.palette.ash} />
            <Space size={16} horizontal />
            <StyledText style={styles.text}>{dayjs(_event?.time).format("hh:mm A")}</StyledText>
          </View>

          <Space size={12} />

          <View style={styles.textRow}>
            <MaterialCommunityIcons name="map-marker-path" size={20} color={Colors.palette.ash} />
            <Space size={16} horizontal />
            <StyledText style={styles.text}>{_event?.venue}</StyledText>
          </View>

          <Space size={12} />

          <View style={styles.textRow}>
            <Ionicons name="location-outline" size={20} color={Colors.palette.ash} />
            <Space size={16} horizontal />
            <StyledText style={styles.text}>{_event?.location}</StyledText>
          </View>

          <Space size={12} />

          <View style={styles.textRow}>
            <Ionicons name="pricetag-outline" size={20} color={Colors.palette.ash} />
            <Space size={16} horizontal />
            <StyledText style={styles.text}>{_event?.tickets ? `${_event?.tickets?.currency} ${_event?.tickets?.price}` : "Free"}</StyledText>
          </View>

          <Space size={20} />

          <StyledText size="md" font="medium">About</StyledText>

          <Space size={12} />

          <StyledText size="base" font="regular" style={styles.text}>{_event?.description}</StyledText>

        </View>
      </View>
    </WrappedContainer>
  )
}

export default Page

const styles = StyleSheet.create({
  main: {
    flex: 1,
    maxWidth: 768,
  },
  topImage: {
    width: '100%',
    marginBottom: 12,
  },
  wrapper: {
    padding: 20,
    width: "100%",
  },
  left: {
    textAlign: "right"
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  text: {
    color: Colors.palette.ash,
  },
  textRow: {
    flexDirection: "row",
  }
})