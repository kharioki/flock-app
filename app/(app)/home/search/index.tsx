import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
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

const Page = () => {
  const router = useRouter();

  const [selectedGenres, setSelectedGenres] = useState<Array<string>>([]);
  const { control, handleSubmit, setValue, register, formState: { errors } } = useForm();

  const onSelectGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre))
    } else {
      setSelectedGenres((prevState) => [...prevState, genre])
    }
  }

  const handleFilter = () => {

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
            />
          </View>
          <Space size={8} horizontal />
          <Pressable style={styles.btn} onPress={() => router.push('/home/search/filter')}>
            <Ionicons name="ios-options" size={24} color={Colors.palette.text} />
          </Pressable>
        </Row>

        <Space size={16} />

        {selectedGenres.length > 0 && <PrimaryButton label="Filter events" onPress={handleFilter} />}

        <Space size={16} />

        <View style={styles.listContainer}>
          <FlatList
            data={Genres}
            renderItem={({ item }) => (
              <GenreCard
                item={item}
                handleSelect={onSelectGenre}
                selected={selectedGenres.includes(item.label)}
              />
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
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
    gap: 12,
    width: "100%",
    marginBottom: 100
  },
})