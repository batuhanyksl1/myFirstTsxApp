import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {  Tabs } from 'expo-router';

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
