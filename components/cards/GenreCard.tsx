import React from 'react'
import { ImageBackground, StyleSheet, useWindowDimensions, View, Pressable } from 'react-native'
import StyledText from '../common/StyledText'
import Colors from '../../constants/Colors'

type Props = {
  item: any
  handleSelect: any
  selected: boolean
}

const GenreCard = ({ item, handleSelect, selected }: Props) => {
  const { width } = useWindowDimensions()

  return (
    <Pressable
      style={[
        styles.card,
        { width: width / 3 - 20 },
        selected && { borderColor: Colors.palette.primary }
      ]}
      onPress={() => handleSelect(item.value)}
    >
      <ImageBackground source={{ uri: item.image }} style={styles.image} imageStyle={styles.radius}>
        <View style={styles.content}>
          <View style={styles.chip}>
            <StyledText size="sm" font="medium" style={{ }}>{item.label}</StyledText>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

export default GenreCard

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 4,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "transparent"
  },
  image: {
    height: 100,
    width: "100%",
    borderRadius: 16,
  },
  radius: {
    borderRadius: 16,
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flex: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    opacity: 0.8,
    backgroundColor: Colors.palette.charcoal
  },
})