import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack  screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default _layout;
