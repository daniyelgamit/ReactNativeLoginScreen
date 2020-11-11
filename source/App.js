/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from './navigation/AuthStackNavigator';
import {darkTheme} from './theme/dark';
import {lightTheme} from './theme/light';
import {useDarkMode} from 'react-native-dark-mode';
import {SafeAreaView, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  const isDarkMode = useDarkMode();
  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;
