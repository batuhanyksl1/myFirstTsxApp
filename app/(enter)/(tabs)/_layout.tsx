import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { getInitialURL } from 'expo-router/build/link/linking';

const _layout = () => {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: 'Keşfet',
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
          title: 'Arşiv',
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
