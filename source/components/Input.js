import React from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';

export function Input({style, reference, ...props}) {
  return (
    <TextInput
      {...props}
      ref={reference}
      style={[styles.input, style]}
      placeholderTextColor={'gray'}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: Platform.OS === 'android' ? 10 : 20,
    borderRadius: 8,
    fontFamily: 'Oswald-Regular',
  },
});
