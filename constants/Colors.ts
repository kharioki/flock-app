const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const palette = {
  text: '#fff',
  card: '#35343a',
  primary: '#8450d6',
  lighterPurple: '#dcc5fd',
  lightPurple: '#a270f2',
  midPurple: '#7738dd',
  darkPurple: '#571bb7',
  darkBlue: '3c0f87',
  paleGreen: '#c0e4d8',
  lightGreen: '#87cbb4',
  lime: '#4fb291',
  olive: '#367962',
  darkGreen: '#164034',
  lightGray: '#c2c3c8',
  ash: '#8c8c98',
  midGray: '#535665',
  charcoal: '#3a3a46',
  bg: '#1f2025',
  // bgPurple: '#42345b',
  bgPurple: '#202121',
  bgFadePurple: '#20212160'

}

export default {
  palette,
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
