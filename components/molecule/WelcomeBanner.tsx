import { View, Text } from 'react-native';
import React from 'react';
import { Banner } from '@/components/atomic/Banner';

const WelcomeBanner = () => {
  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Günaydın';
    if (hour >= 12 && hour < 18) return 'İyi Günler';
    if (hour >= 18 && hour < 22) return 'İyi Akşamlar';
    return 'İyi Geceler';
  };
  return (
    <Banner
      title={getWelcomeMessage()}
      body={'Bugün size nasıl yardımcı olabiliriz?'}
    />
  );
};

export default WelcomeBanner;
