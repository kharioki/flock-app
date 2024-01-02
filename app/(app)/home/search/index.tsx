import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import MainContainer from '../../../../components/containers/MainContainer'
import StyledText from '../../../../components/common/StyledText'
import Space from '../../../../components/common/Space'
import Input from '../../../../components/inputs/Input'
import Colors from '../../../../constants/Colors';
import Row from '../../../../components/common/Row';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import GenreCard from '../../../../components/cards/GenreCard';
import { Genres } from '../../../../utils/genre';
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import { mockEvents } from '../../../../mock/events';
import DebouncedInput from '../../../../components/inputs/DebouncedInput';
import EventCard from '../../../../components/cards/EventCard';

const Page = () => {
  const router = useRouter();

  const [selectedGenres, setSelectedGenres] = useState<Array<string>>([]);
  const [events, setEvents] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const { control } = useForm();

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      const _events = mockEvents.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))

      setEvents(_events)
      setSearchResults(_events)
    }
  }

  const handleReset = () => {
    setSearchTerm("");
    setEvents([]);
  }

  const onSelectGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre))
    } else {
      setSelectedGenres((prevState) => [...prevState, genre])
    }
  }

  const handleFilter = () => {
    // filter events on selected genres
    const _filteredEvents = mockEvents.filter(e =>
      selectedGenres.some(genre => e.category.includes(genre))
    )

    setEvents(_filteredEvents);
    // setSearchResults(_filteredEvents);
    setSelectedGenres([]);
  }

  return (
    <MainContainer>
      <View style={styles.main}>
        <Row>
          <View style={styles.full}>
            <Input
              name="search"
              placeholder="Search event...(e.g. NYE 2024)"
              control={control}
              style={styles.input}
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            {/* <DebouncedInput
              name="search"
              placeholder="Search event...(e.g. NYE 2024)"
              control={control}
              style={styles.input}
              value={searchTerm}
              onChangeText={setSearchTerm}
            /> */}
          </View>
          <Space size={8} horizontal />
          {events.length === 0 ?
            (
              <Pressable style={styles.btn} onPress={handleSearch}>
                <Ionicons name="search" size={24} color={Colors.palette.text} />
              </Pressable>
            ) : (
              <Pressable style={styles.btn} onPress={() => handleReset()}>
                <Ionicons name="close" size={24} color={Colors.palette.ash} />
              </Pressable>
            )
          }
        </Row>

        <Space size={16} />

        {events.length === 0 && (
          <View>
            {selectedGenres.length > 0 && <PrimaryButton label="Filter events on selected genres" onPress={handleFilter} />}

            <Space size={16} />

            <View style={styles.listContainer}>
              <FlatList
                data={Genres}
                renderItem={({ item }) => (
                  <GenreCard
                    item={item}
                    handleSelect={onSelectGenre}
                    selected={selectedGenres.includes(item.value)}
                  />
                )}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                scrollEnabled={false}
              />
            </View>
          </View>
        )}

        {events.length > 0 ? (
          <View style={styles.listContainer}>
            <FlatList
              data={events}
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
        ) : (
          <View>
            <View style={styles.centered}>
              <StyledText size="lg" font="light" style={styles.text}>No events found.</StyledText>
            </View>
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
  row: {
    width: "100%",
    flexDirection: "row",
  },
  full: {
    width: "85%",
  },
  btn: {
    width: "15%",
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    alignItems: "center",
    borderColor: Colors.palette.ash,
  },
  input: {
    backgroundColor: Colors.palette.text
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  list: {
    gap: 8,
    width: "100%",
    marginBottom: 100
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  text: {
    color: Colors.palette.ash,
    paddingVertical: 8,
  }
})