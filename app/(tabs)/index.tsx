import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../../context/GlobalContext'; // Global context'in bulunduğu dosyanın yolunu doğru ayarla
import languages from '@/constants/keys/languages';

const explore = () => {
  const { currentLanguage, isDarkMode, setCurrentLanguage } =
    useGlobalContext();
  const [selectedValue, setSelectedValue] = useState(currentLanguage);

  return (
    <ScrollView
      style={{ padding: 20, backgroundColor: isDarkMode ? '#333' : '#fff' }}
    >
      
    </ScrollView>
  );
};

export default explore;
