import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../../../components/containers/MainContainer'
import StyledText from '../../../components/common/StyledText'
import Space from '../../../components/common/Space'
import { Ionicons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import Colors from '../../../constants/Colors'
import EventCard from '../../../components/cards/EventCard'
import { mockEvents } from '../../../mock/events'

const wishlist = () => {
  const router = useRouter();

  const _events = mockEvents.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: "Search events",
          headerTransparent: true,
          headerTintColor: Colors.palette.lightPurple,
        }}
      />
      <View style={styles.main}>
        <StyledText size="xl" font="semiBold" style={styles.title}>My Wishlist</StyledText>

        <Space size={20} />

        <View>
          <FlatList
            data={_events}
            renderItem={({ item }) => (
              <EventCard
                item={item}
                router={router}
              />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.list}
            scrollEnabled={false}
          />
        </View>

        <Space size={12} />
      </View>
    </MainContainer>
  )
}

export default wishlist

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  textRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    // width: '100%',
  },
  list: {
    gap: 16,
    width: "100%",
    marginBottom: 100,
  },
  title: {
    color: Colors.palette.ash
  },
})