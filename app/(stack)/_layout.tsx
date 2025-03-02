import { Stack } from "expo-router";
import stackNames from "@/constants/texts/stackNames";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Layout (){
  const { currentLanguage } = useGlobalContext();
    return (
      <Stack>
        <Stack.Screen
          name={'profile'}
          options={{
            headerShown: true,
            title: stackNames.profile[currentLanguage],
          }}
        />
        <Stack.Screen
          name={'settings'}
          options={{
            headerShown: true,
            title: stackNames.settings[currentLanguage],
          }}
        />
      </Stack>
    );
}