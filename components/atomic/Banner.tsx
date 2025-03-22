import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from 'react-native';

export function Banner() {
  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Günaydın';
    if (hour >= 12 && hour < 18) return 'İyi Günler';
    if (hour >= 18 && hour < 22) return 'İyi Akşamlar';
    return 'İyi Geceler';
  };

  return (
    <View style={styles.welcomeBanner}>
      <View>
        <Text style={styles.welcomeTitle}>{getWelcomeMessage()}</Text>
        <Text style={styles.welcomeSubtitle}>
          Bugün size nasıl yardımcı olabiliriz?
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeBanner: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#edeeff',
    borderRadius: 16,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
});
