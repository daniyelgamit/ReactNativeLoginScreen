import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Platform} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function FilledButton({title, style, onPress}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor: colors.primary}]}
      onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.OS === 'android' ? 15 : 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Oswald-Regular',
  },
});
