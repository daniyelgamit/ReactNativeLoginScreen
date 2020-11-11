import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function IconButton({name, style, onPress, color, size}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
