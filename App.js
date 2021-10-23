import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import ServicesScreen from './screens/services/ServicesScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ServicesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222E50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
