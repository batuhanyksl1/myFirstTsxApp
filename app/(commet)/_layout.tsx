import { Stack } from 'expo-router';

export default function CommentLayout() {
  return (
    <Stack>
      <Stack.Screen
        name={'consultation'}
        options={{
          headerShown: true,
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name={'horoscope'}
        options={{
          headerShown: true,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="tarot"
        options={{
          headerShown: true,
          title: 'Settings',
        }}
      />
    </Stack>
  );
}
// Compare this snippet from deleted./_layout.tsx:
// import { Stack } from "expo-router";
