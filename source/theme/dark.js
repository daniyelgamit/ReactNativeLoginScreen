import {DarkTheme} from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    primary: 'orange',
    text: '#ffffff',
    headerBackground: '#191919',
  },
};
