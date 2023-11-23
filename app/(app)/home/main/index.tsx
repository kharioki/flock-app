import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../../../components/containers/MainContainer'
import StyledText from '../../../../components/common/StyledText'
import Row from '../../../../components/common/Row';
import Space from '../../../../components/common/Space';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Image } from 'expo-image'
import Colors from '../../../../constants/Colors';
import { MainSections } from '../../../../utils/sections';
import { FlatList } from 'react-native-gesture-handler';
import { mockEvents } from '../../../../mock/events';
import EventCard from '../../../../components/cards/EventCard';

const user = {
  uid: '1',
  displayName: 'John Doe',
  email: 'johndoe@email.com',
  photoURL: 'https://robohash.org/5759c92851e66680ae5723f5de4f7757?set=set4&bgset=bg2&size=400x400',
};

type SectionItemProps = {
  item: {
    id: number
    label: string
  }
}

const main = () => {
  const router = useRouter();

  const renderSectionItem = ({ item }: SectionItemProps) => (
    <Pressable style={styles.section} onPress={() => router.push({ pathname: '/home/main/section', params: { id: item.id } })}>
      <StyledText size='lg' font="bold">
        {item.label}
      </StyledText>
    </Pressable>
  )

  const _recommended = mockEvents.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  const _upcoming = mockEvents.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  const _free = mockEvents.filter(x => x.isFree)

  return (
    <MainContainer>
      <View style={styles.main}>
        <View>
          <FlatList
            data={MainSections}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSectionItem}
          />
        </View>

        <Space size={30} />

        <View style={styles.textRow}>
          <StyledText size="lg" font="semiBold">Recommended</StyledText>
          <Space size={12} horizontal />
          <Pressable onPress={() => router.push("/home/search/")}>
            <Ionicons name="arrow-forward" size={20} color={Colors.palette.primary} />
          </Pressable>
        </View>

        <Space size={12} />

        <View>
          <FlatList
            data={_recommended}
            renderItem={({ item }) => (
              <EventCard
                item={item}
                router={router}
                isWide
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>


        <Space size={20} />

        <View style={styles.textRow}>
          <StyledText size="lg" font="semiBold">Upcoming</StyledText>
          <Space size={12} horizontal />
          <Pressable onPress={() => router.push("/home/search/")}>
            <Ionicons name="arrow-forward" size={20} color={Colors.palette.primary} />
          </Pressable>
        </View>

        <Space size={12} />

        <View>
          <FlatList
            data={mockEvents}
            renderItem={({ item }) => (
              <EventCard
                item={item}
                router={router}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Space size={20} />

        <View style={styles.textRow}>
          <StyledText size="lg" font="semiBold">Free events</StyledText>
          <Space size={12} horizontal />
          <Pressable onPress={() => router.push("/home/search/")}>
            <Ionicons name="arrow-forward" size={20} color={Colors.palette.primary} />
          </Pressable>
        </View>

        <Space size={12} />

        <View>
          <FlatList
            data={_free}
            renderItem={({ item }) => (
              <EventCard
                item={item}
                router={router}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Space size={80} />

      </View>
    </MainContainer>
  )
}

export default main

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  row: {
    width: "100%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
  },
  right: {
    marginRight: 12,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    paddingHorizontal: 16,
    justifyContent: "center",
    marginRight: 10
  }
})