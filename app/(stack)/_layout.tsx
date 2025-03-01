import { Stack } from "expo-router";


export default function Layout (){
    return (
<Stack >
  <Stack.Screen name="profile" options={{headerShown: true, title: "Profile"}} />
  <Stack.Screen name="settings" options={{headerShown: false}} />
</Stack>
    )
}