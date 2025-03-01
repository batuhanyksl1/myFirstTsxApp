import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../../context/GlobalContext'; // Global context'in bulunduğu dosyanın yolunu doğru ayarla
import languages from '@/constants/keys/languages';

const settings = () => {
  const { currentLanguage, isDarkMode, setCurrentLanguage } =
    useGlobalContext();
  const [selectedValue, setSelectedValue] = useState(currentLanguage);

  return (
    <ScrollView
      style={{ padding: 20, backgroundColor: isDarkMode ? '#333' : '#fff' }}
    >
      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
        Choose a programming language:
      </Text>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          setCurrentLanguage(itemValue); // Global state'i güncelle
        }}
      >
        {Object.values(languages).map((lang) => (
          <Picker.Item key={lang.key} label={lang.label} value={lang.key} />
        ))}
      </Picker>

      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
        Selected: {selectedValue}
        selecttedLanguage: {currentLanguage}
      </Text>
    </ScrollView>
  );
};

export default settings;
