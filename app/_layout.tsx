import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

const _layout = () => {
  const colorScheme = useColorScheme
  return (
    <Stack  screenOptions={{headerShown: false}}>

      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default _layout;
