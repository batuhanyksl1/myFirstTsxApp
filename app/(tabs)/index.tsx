import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '@/context/GlobalContext';
import { useColorScheme } from 'react-native';
import InfoBox from '@/components/InfoBox';
import { useFonts } from 'expo-font';

const explore = () => {
  const [fontsLoaded] = useFonts({
    'Atma-Bold': require('@/assets/fonts/Atma-Bold.ttf'),
    'Atma-Light': require('@/assets/fonts/Atma-Light.ttf'),
    'Atma-Medium': require('@/assets/fonts/Atma-Medium.ttf'),
  });

  const colorScheme = useColorScheme();
  const { currentLanguage } = useGlobalContext();
  const [selectedValue, setSelectedValue] = useState(currentLanguage);

  if (!fontsLoaded) {
    return null; // Veya yükleniyor göstergesi dönebilirsiniz.
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor:
          colorScheme === 'dark' ? 'rgb(120, 120, 120)' : 'rgb(230, 230, 230)',
      }}
    >
      <InfoBox
        header="Günlük Öğüt"
        content="Rüyalar insanın iç dünyasına ışık tutar. Müthiş şeyler"
      />
      <InfoBox
        header="Günlük Öğüt"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      />
      <InfoBox
        header="Günlük Öğüt"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      />

      <Text style={{ fontFamily: 'Atma-Light', fontSize: 18 }}>
        Explore Screen
      </Text>
    </View>
  );
};

export default explore;
