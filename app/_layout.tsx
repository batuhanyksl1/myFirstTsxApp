import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { GlobalProvider } from '@/context/GlobalContext';

const _layout = () => {
  const colorScheme = useColorScheme();

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(stack)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalProvider>
  );
};

export default _layout;
