export const customFontsToLoad = {
  notoSansBold: require('../assets/fonts/NotoSans-Bold.ttf'),
  notoSansRegular: require('../assets/fonts/NotoSans-Regular.ttf'),
  notoSansMedium: require('../assets/fonts/NotoSans-Medium.ttf'),
  notoSansSemiBold: require('../assets/fonts/NotoSans-SemiBold.ttf'),
  notoSansLight: require('../assets/fonts/NotoSans-Light.ttf'),
  notoSansItalic: require('../assets/fonts/NotoSans-Italic.ttf'),
  notoSansThin: require('../assets/fonts/NotoSans-Thin.ttf'),
};

export const fonts = {
  notoSans: {
    bold: 'notoSansBold',
    regular: 'notoSansRegular',
    medium: 'notoSansMedium',
    semiBold: 'notoSansSemiBold',
    light: 'notoSansLight',
    thin: 'notoSansThin',
    italic: 'notoSansItalic'
  },
};

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: fonts.notoSans,
};