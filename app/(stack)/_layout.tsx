import { Stack } from "expo-router";
import stackNames from "@/constants/texts/stackNames";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Layout (){
  const { currentLanguage } = useGlobalContext();
    return (
      <Stack>
        <Stack.Screen
          name={stackNames.profile[currentLanguage]}
          options={{ headerShown: true, title: 'Profile' }}
        />
        <Stack.Screen
          name={stackNames.settings[currentLanguage]}
          options={{ headerShown: false }}
        />
      </Stack>
    );
}