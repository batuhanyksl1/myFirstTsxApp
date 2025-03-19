import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Ana navigasyon için tip tanımlaması
type RootStackParamList = {
  Home: undefined;
  DreamInterpretation: undefined;
  CharacterConsultation: undefined;
  PastInterpretations: undefined;
  Interpretations: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const index: React.FC = () => {
  // Fontları yükle
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const navigation = useNavigation<HomeScreenNavigationProp>();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  // Navigasyon fonksiyonları
  const navigateToDreamInterpretation = () => {
    navigation.navigate('DreamInterpretation');
  };

  const navigateToCharacterConsultation = () => {
    navigation.navigate('CharacterConsultation');
  };

  const navigateToPastInterpretations = () => {
    navigation.navigate('PastInterpretations');
  };

  const navigateToInterpretations = () => {
    navigation.navigate('Interpretations');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FB" />

      {/* Başlık */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ana Sayfa</Text>
      </View>

      {/* Ana İçerik */}
      <View style={styles.content}>
        {/* Karşılama Kartı */}
        <LinearGradient
          colors={['#e0e7ff', '#dce4ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.welcomeCard}
        >
          <Text style={styles.welcomeTitle}>Hoş Geldiniz</Text>
          <Text style={styles.welcomeSubtitle}>
            Bugün size nasıl yardımcı olabiliriz?
          </Text>
        </LinearGradient>

        {/* Hızlı Erişim Butonları */}
        <View style={styles.quickAccessRow}>
          <TouchableOpacity
            style={styles.quickAccessButton}
            onPress={navigateToDreamInterpretation}
            activeOpacity={0.7}
          >
            <View style={styles.quickAccessIconContainer}>
              <Ionicons name="moon-outline" size={24} color="#4338ca" />
            </View>
            <Text style={styles.quickAccessText}>Rüya{'\n'}Yorumu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickAccessButton}
            onPress={navigateToCharacterConsultation}
            activeOpacity={0.7}
          >
            <View style={styles.quickAccessIconContainer}>
              <Ionicons name="person-outline" size={24} color="#4338ca" />
            </View>
            <Text style={styles.quickAccessText}>Karakter{'\n'}Danışma</Text>
          </TouchableOpacity>
        </View>

        {/* Son Yorumlar */}
        <TouchableOpacity
          style={styles.recentCard}
          onPress={navigateToPastInterpretations}
          activeOpacity={0.7}
        >
          <Text style={styles.recentTitle}>Son Yorumlarınız</Text>
          {/* Son yorumların listesi burada olacak */}
          <View style={styles.emptyRecentState}>
            <Text style={styles.emptyRecentText}>Henüz yorum yok</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Alt Navigasyon Çubuğu */}
      {/* <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton} activeOpacity={0.7}>
          <Ionicons name="home" size={22} color="#4338ca" />
          <Text style={styles.tabButtonTextActive}>Ana Sayfa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={navigateToInterpretations}
          activeOpacity={0.7}
        >
          <Ionicons name="list-outline" size={22} color="#9CA3AF" />
          <Text style={styles.tabButtonText}>Yorumlar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={navigateToProfile}
          activeOpacity={0.7}
        >
          <Ionicons name="person-outline" size={22} color="#9CA3AF" />
          <Text style={styles.tabButtonText}>Profil</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEFF3',
  },
  headerTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1F2937',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  welcomeCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#4338ca',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  welcomeTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
    color: '#1F2937',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  quickAccessRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAccessButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEFF3',
  },
  quickAccessIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickAccessText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'center',
  },
  recentCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EEEFF3',
  },
  recentTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 16,
  },
  emptyRecentState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyRecentText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#9CA3AF',
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEFF3',
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  tabButtonTextActive: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#4338ca',
    marginTop: 4,
  },
});

export default index;
