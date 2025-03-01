import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../../context/GlobalContext'; // Global context'in bulunduğu dosyanın yolunu doğru ayarla

const explore = () => {
  const { currentLanguage, isDarkMode, setCurrentLanguage } =
    useGlobalContext();
  const [selectedValue, setSelectedValue] = useState(currentLanguage);

  return (
    <View
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
        <Picker.Item label="English" value= "en" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="Turkish" value="tr" />
      </Picker>

      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
        Selected: {selectedValue}
        selecttedLanguage: {currentLanguage}
      </Text>
    </View>
  );
};

export default explore;
