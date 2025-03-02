import React, { useState } from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../../../context/GlobalContext'; // Global context'in bulunduğu dosyanın yolunu doğru ayarla
import { useColorScheme } from 'react-native';

const explore = () => {
  const colorScheme = useColorScheme();
  const { currentLanguage, setCurrentLanguage } =
    useGlobalContext();
  const [selectedValue, setSelectedValue] = useState(currentLanguage);

  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor:
          colorScheme === 'dark' ? 'rgb(120, 120, 120)' : 'rgb(230, 230, 230)',
      }}
    >
      {/* <Image
        source={require('@assets/images/background.svg')}
        style={{ width: 100, height: 100 }}/> */}
    </ScrollView>
  );
};

export default explore;
