import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export function Loader({loading}) {
  if (!loading) return <View />;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={'black'} />
        <Text style={styles.text}>Please wait...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 15,
  },
  text: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
