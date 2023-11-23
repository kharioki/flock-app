import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../../../components/containers/MainContainer'
import StyledText from '../../../../components/common/StyledText'
import { MainSections } from '../../../../utils/sections'
import Colors from '../../../../constants/Colors'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Space from '../../../../components/common/Space'
import EventCard from '../../../../components/cards/EventCard'
import { mockEvents } from '../../../../mock/events'

type SectionItemProps = {
  item: {
    id: number
    label: string
  }
}

const Page = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams()

  const [selectedSection, setSelectedSection] = useState<number>(Number(id));

  const renderSectionItem = ({ item }: SectionItemProps) => (
    <Pressable
      style={[
        styles.section,
        {
          backgroundColor: selectedSection === item.id ? Colors.palette.primary : "transparent",
        }
      ]}
      onPress={() => setSelectedSection(item.id)}
    >
      <StyledText
        size="lg"
        font={selectedSection === item.id ? "bold" : "regular"}
        style={{ color: selectedSection === item.id ? Colors.palette.bgPurple : Colors.palette.text }}
      >
        {item.label}
      </StyledText>
    </Pressable>
  );

  const mainEvent = mockEvents[0];
  const _events = mockEvents.filter((x, index) => index > 0);

  return (
    <MainContainer>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-undo-outline" size={24} color={Colors.palette.text} />
            </Pressable>
          ),
        }}
      />
      <View style={styles.main}>
        <View>
          <FlatList
            data={MainSections}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSectionItem}
          />
        </View>

        <Space size={20} />

        <StyledText size="lg" font="light" style={styles.title}>22 November</StyledText>

        <Space size={8} />

        <EventCard
          item={mainEvent}
          router={router}
          isFullWidth
        />

        <Space size={20} />

        <View style={styles.listContainer}>
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
      </View>

    </MainContainer>
  )
}

export default Page

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 20,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  list: {
    gap: 16,
    width: "100%",
  },
  title: {
    color: Colors.palette.ash
  },
})