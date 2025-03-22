//sust and dust
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '@/components/atomic/Header';
import StatusBar from '@/components/atomic/StatusBar';
import WelcomeBanner from '@/components/atomic/Banner';
import DailyQoute from '@/components/atomic/Qoute';

const index: React.FC = () => {
  // Daily inspiration quote
  const dailyQuote = {
    text: 'Hayatınızın kontrolü sizin elinizde, her gün yeni bir başlangıçtır.',
    author: '- Rumi',
  };

  // Sample upcoming astrology events
  const upcomingEvents = [
    {
      id: '1',
      title: 'Merkür Retrosu Bitiyor',
      date: '30 Mart 2025',
      impact: 'İletişim ve teknoloji alanlarında iyileşme',
    },
    {
      id: '2',
      title: 'Dolunay - Terazi Burcu',
      date: '2 Nisan 2025',
      impact: 'İlişkilerinizde denge ve uyum',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar />
        <Header title="Ana Sayfa" />
        <WelcomeBanner />
        {/* Main Services Grid */}
        <View style={styles.servicesGrid}>
          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => router.push('/(commet)')}
          >
            <View style={styles.serviceIconContainer}>
              <Ionicons name="moon-outline" size={28} color="#5142e6" />
            </View>
            <Text style={styles.serviceTitle}>Rüya{'\n'}Yorumu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => router.push('/(commet)/consultation')}
          >
            <View style={styles.serviceIconContainer}>
              <Ionicons name="person-outline" size={28} color="#5142e6" />
            </View>
            <Text style={styles.serviceTitle}>Karakter{'\n'}Danışma</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/(commet)/horoscope')}
            style={styles.serviceCard}
          >
            <View style={styles.serviceIconContainer}>
              <Ionicons name="star-outline" size={28} color="#5142e6" />
            </View>
            <Text style={styles.serviceTitle}>Günlük{'\n'}Burç</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => router.push('/(commet)/tarot')}
          >
            <View style={styles.serviceIconContainer}>
              <Ionicons name="calendar-outline" size={28} color="#5142e6" />
            </View>
            <Text style={styles.serviceTitle}>Tarot{'\n'}Falı</Text>
          </TouchableOpacity>
        </View>
        <DailyQoute />

        {/* Feature Navigation Cards */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Özel İçerikler</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuresScroll}
          >
            <TouchableOpacity style={styles.featureCard}>
              <View
                style={[
                  styles.featureIconContainer,
                  { backgroundColor: '#FFE0B2' },
                ]}
              >
                <Ionicons name="book-outline" size={24} color="#FB8C00" />
              </View>
              <Text style={styles.featureTitle}>Meditasyon{'\n'}Rehberi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <View
                style={[
                  styles.featureIconContainer,
                  { backgroundColor: '#DCEDC8' },
                ]}
              >
                <Ionicons name="leaf-outline" size={24} color="#7CB342" />
              </View>
              <Text style={styles.featureTitle}>Şifalı{'\n'}Bitkiler</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <View
                style={[
                  styles.featureIconContainer,
                  { backgroundColor: '#B3E5FC' },
                ]}
              >
                <Ionicons name="water-outline" size={24} color="#039BE5" />
              </View>
              <Text style={styles.featureTitle}>Kristal{'\n'}Enerjisi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <View
                style={[
                  styles.featureIconContainer,
                  { backgroundColor: '#F8BBD0' },
                ]}
              >
                <Ionicons name="heart-outline" size={24} color="#EC407A" />
              </View>
              <Text style={styles.featureTitle}>İlişki{'\n'}Analizi</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Upcoming Astrology Events */}
        <View style={styles.eventsContainer}>
          <View style={styles.eventsTitleRow}>
            <Text style={styles.sectionTitle}>Yaklaşan Gök Olayları</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>

          {upcomingEvents.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <View style={styles.eventDateContainer}>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventImpact}>{event.impact}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff3b30',
  },


  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 12,
    marginBottom: 16,
  },
  serviceCard: {
    width: '46%',
    margin: '2%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    alignItems: 'center',
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  featuresContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  featuresScroll: {
    paddingLeft: 16,
  },
  featureCard: {
    width: 120,
    marginRight: 12,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  eventsContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  eventsTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    color: '#5142e6',
    fontWeight: '600',
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  eventDateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#f0f2ff',
    borderRadius: 8,
    marginRight: 12,
  },
  eventDate: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5142e6',
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  eventImpact: {
    fontSize: 13,
    color: '#666',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#5142e6',
    marginTop: 2,
  },
});

export default index;
