import { Link, Tabs } from 'expo-router';
import tabNames from '@/constants/texts/tabNames';
import { useGlobalContext } from '@/context/GlobalContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'react-native';

function TabLayout() {
  const { currentLanguage } = useGlobalContext();
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerTintColor: colorScheme === 'dark' ? 'white' : 'black',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor:
            colorScheme === 'dark' ? 'rgb(70, 70, 70)' : 'rgb(180, 180, 180)',
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
        tabBarInactiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor:
            colorScheme === 'dark' ? 'rgb(70, 70, 70)' : 'rgb(180, 180, 180)',
        },

        headerTitleAlign: 'center',
        // headerRight: () => (
        //   <Link href="/(stack)/settings">
        //     <Ionicons
        //       name="settings-sharp"
        //       size={27}
        //       color={colorScheme === 'dark' ? 'white' : 'black'}
        //     />
        //   </Link>
        // ),
        // headerLeft: () => (
        //   <Link href="/(stack)/profile">
        //     <MaterialIcons
        //       name="account-circle"
        //       size={27}
        //       color={colorScheme === 'dark' ? 'white' : 'black'}
        //     />
        //   </Link>
        // ),
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
            <MaterialCommunityIcons
              name="magnify"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: tabNames.addDream[currentLanguage],
          tabBarIcon: () => (
            <MaterialIcons
              name="bedtime"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dreams"
        options={{
          title: tabNames.yourDreams[currentLanguage],
          tabBarItemStyle: {},
          tabBarIcon: () => (
            <AntDesign
              name="cloudo"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
