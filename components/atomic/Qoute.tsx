import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Qoute = () => {
  const dailyQuote = {
    text: 'Hayatınızın kontrolü sizin elinizde, her gün yeni bir başlangıçtır.',
    author: '- Rumi',
  };

  return (
    <View style={styles.quoteContainer}>
      <View style={styles.quoteIconContainer}>
        <Ionicons name="swap-vertical" size={20} color="#fff" />
      </View>
      <Text style={styles.quoteText}>{dailyQuote.text}</Text>
      <Text style={styles.quoteAuthor}>{dailyQuote.author}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  quoteIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5142e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quoteContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#666',
    alignSelf: 'flex-end',
  },
});
export default Qoute;
