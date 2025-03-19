import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color="#4338ca"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ArchiveScreen"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'archive' : 'archive-outline'}
              size={24}
              color="#4338ca" // Seçiliyse kırmızı, değilse mavi
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
