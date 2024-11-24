import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Aprialdi Nurhidayat - 223510662</Text>

      {/* Kotak dengan Flexbox */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.boxLeft]} />
        <View style={[styles.box, styles.boxRight]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun kotak secara horizontal
    justifyContent: 'space-between', // Jarak merata antar kotak
    width: '80%', // Atur lebar total untuk kotak
  },
  box: {
    width: 100,
    height: 100,
  },
  boxLeft: {
    backgroundColor: 'red', // Warna bebas untuk kotak 1
  },
  boxRight: {
    backgroundColor: 'green', // Warna bebas untuk kotak 2
  },
});
