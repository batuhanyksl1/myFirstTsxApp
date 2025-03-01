import { Link, Tabs } from 'expo-router';
import tabNames from '@/assets/texts/tabNames';
import { useGlobalContext, GlobalProvider } from '@/context/GlobalContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function LayoutContent() {
  const { currentLanguage } = useGlobalContext();
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <Link href="/(stack)/settings">
            <Ionicons name="settings-sharp" size={27} color="black" />
          </Link>
        ),
        headerLeft: () => (
          <Link href="/(stack)/profile">
            <MaterialIcons name="account-circle" size={27} color="black" />
          </Link>
        ),
        headerRightContainerStyle: {
          paddingHorizontal: 7,
          paddingBottom: 5,
        },
        headerLeftContainerStyle: {
          paddingHorizontal: 7,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: tabNames.explore[currentLanguage],

          tabBarIcon: () => (
            <MaterialCommunityIcons name="magnify" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="dreams"
        options={{
          title: tabNames.addDream[currentLanguage],
          tabBarIcon: () => <AntDesign name="plus" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="addDream"
        options={{
          title: tabNames.yourDreams[currentLanguage],
          tabBarIcon: () => <AntDesign name="cloudo" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <GlobalProvider>
      <LayoutContent />
    </GlobalProvider>
  );
}
