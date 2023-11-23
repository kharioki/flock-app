import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../../../components/containers/MainContainer'
import StyledText from '../../../../components/common/StyledText'
import { MainSections } from '../../../../utils/sections'
import Colors from '../../../../constants/Colors'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Space from '../../../../components/common/Space'
import EventCard from '../../../../components/cards/EventCard'
import { mockEvents } from '../../../../mock/events'
import { useWeekendDates } from '../../../../hooks/useWeekendDates';
import dayjs from 'dayjs'

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

  const { saturday, sunday } = useWeekendDates();

  const filterEvents = () => {
    const today = new Date();
    const todayISO = today.toISOString().split('T')[0];

    switch (selectedSection) {
      case 1:
        return mockEvents.filter(event => event.date === todayISO);
      case 2:
        return mockEvents.filter(event => event.date >= saturday && event.date <= sunday);
      case 3:
        return mockEvents.slice().sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
      case 4:
        return mockEvents.slice().sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

      default:
        return mockEvents;
    }
  }


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

  const mainEvent = filterEvents()[0];
  const _events = filterEvents().filter((x, index) => index > 0);

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

        {selectedSection < 3 && (
          <StyledText size="lg" font="light" style={styles.title}>
            {
              selectedSection === 1
                ? dayjs(new Date()).format("DD MMMM")
                : `${dayjs(saturday).format("DD MMMM")} - ${dayjs(sunday).format("DD MMMM")}`
            }
          </StyledText>
        )}

        <Space size={8} />

        {
          !mainEvent && (
            <View style={styles.centered}>
              <MaterialIcons name="hourglass-empty" size={40} color={Colors.palette.ash} />
              <StyledText size="lg" font="light" style={styles.text}>There are no events for this section.</StyledText>
              <StyledText size="sm" font="light" style={styles.text}>Please try a different section.</StyledText>
            </View>
          )
        }

        {mainEvent && (
          <EventCard
            item={mainEvent}
            router={router}
            isFullWidth
          />
        )}

        <Space size={20} />

        {_events.length > 0 && (
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
        )}
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
    paddingHorizontal: 8,
    paddingVertical: 10,
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 20,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
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
  text: {
    color: Colors.palette.ash,
    paddingVertical: 8,
  }
})