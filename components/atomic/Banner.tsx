import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from 'react-native';

type BannerProps = {
  title?: string;
  body?: string;
};
export function Banner({ title, body }: BannerProps) {
  return (
    <View style={styles.welcomeBanner}>
      <View>
        <Text style={styles.welcomeTitle}>{title}</Text>
        <Text style={styles.welcomeSubtitle}>{body}</Text>
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
