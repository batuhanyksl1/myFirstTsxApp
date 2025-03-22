import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../context/GlobalContext'; // Global context'in bulunduğu dosyanın yolunu doğru ayarla
import languages from '@/constants/keys/languages';
import { useColorScheme } from 'react-native';

const settings = () => {
  const { currentLanguage, setCurrentLanguage } =
    useGlobalContext();
  const [selectedValue, setSelectedValue] = useState(currentLanguage);
const colorScheme = useColorScheme()
  return (
    <ScrollView
      style={{ padding: 20, backgroundColor: colorScheme ? '#333' : '#fff' }}
    >
      <Text style={{ color: colorScheme === 'dark' ? "white" : '#000' }}>
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

      <Text style={{ color: colorScheme === 'dark' ? '#fff' : '#000' }}>
        Selected: {selectedValue}
        selecttedLanguage: {currentLanguage}
      </Text>
    </ScrollView>
  );
};

export default settings;
