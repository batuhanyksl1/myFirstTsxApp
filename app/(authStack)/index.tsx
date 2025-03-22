//LOGIN
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SomniaLogo } from '@/components/svgs';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Link, useRouter } from 'expo-router';

// Ana navigasyon için tip tanımlaması
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  ForgotPassword: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen: React.FC = () => {
  // Form state'leri
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Fontları yükle
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const navigation = useNavigation<LoginScreenNavigationProp>();
  const router = useRouter();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  // Navigasyon fonksiyonları
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  // Giriş işlemi
  const handleLogin = () => {
    // Form validasyonu
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen e-posta ve şifrenizi girin');
      return;
    }

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Alert.alert('Hata', 'Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    setIsLoading(true);

    // Burada gerçek API çağrısı olacak
    setTimeout(() => {
      setIsLoading(false);
      navigateToHome();
    }, 1500);
  };

  // Şifre göster/gizle
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8F9FB" />

          <View style={styles.content}>
            {/* Logo ve Başlık */}
            <View style={styles.logoContainer}>
              <SomniaLogo />
              <Text style={styles.appTitle}>Rüya Danışmanı</Text>

              <Text style={styles.appSubtitle}>
                Rüya yorumları ve kişisel danışma
              </Text>
            </View>

            {/* Giriş Formu */}
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="#9CA3AF"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="E-posta Adresiniz"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#9CA3AF"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Şifreniz"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={secureTextEntry}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={toggleSecureEntry}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.forgotPasswordButton}
                onPress={navigateToForgotPassword}
              >
                <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
              </TouchableOpacity>

                <Pressable
                  style={[
                    styles.loginButton,
                    isLoading && styles.loginButtonDisabled,
                  ]}
                  //onPress={handleLogin}
                  onPress={() => router.push('/(tabs)')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Text style={styles.loginButtonText}>
                      Giriş Yapılıyor...
                    </Text>
                  ) : (
                    <Text style={styles.loginButtonText}>Giriş Yap</Text>
                  )}
                </Pressable>


              <TouchableOpacity
                style={styles.registerButton}
                onPress={navigateToRegister}
              >
                <Text style={styles.registerButtonText}>Kayıt Ol</Text>
              </TouchableOpacity>
            </View>

            {/* Sosyal Medya Girişi */}
            <View style={styles.socialContainer}>
              <Text style={styles.orText}>veya şununla devam et</Text>

              <View style={styles.socialButtonsRow}>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-google" size={24} color="#EA4335" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-apple" size={24} color="#000000" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-facebook" size={24} color="#1877F2" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Gizlilik Politikası */}
            <View style={styles.privacyContainer}>
              <Text style={styles.privacyText}>
                Giriş yaparak{' '}
                <Text style={styles.privacyLink}>Kullanım Koşullarını</Text> ve{' '}
                <Text style={styles.privacyLink}>Gizlilik Politikasını</Text>{' '}
                kabul etmiş olursunuz.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#4338ca',
  },
  logoText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 48,
    color: '#4338ca',
  },
  appTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1F2937',
    marginBottom: 8,
  },
  appSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
    height: 56,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  eyeIcon: {
    padding: 8,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#1F2937',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#4338ca',
  },
  loginButton: {
    backgroundColor: '#4338ca',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  loginButtonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#4338ca',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: '#4338ca',
  },
  socialContainer: {
    marginBottom: 24,
  },
  orText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 56,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  privacyContainer: {
    alignItems: 'center',
  },
  privacyText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  privacyLink: {
    color: '#4338ca',
  },
});

export default LoginScreen;
