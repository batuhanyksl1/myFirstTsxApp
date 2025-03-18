// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Switch,
//   Modal,
//   Pressable,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { SvgXml } from 'react-native-svg';
// import { googleLogoXml } from '@/components/svgs/googleLogo';
// import { appleLogoXml } from '@/components/svgs/appleLogo';
// import { eyeIcon } from '@/components/svgs/eyeIcon';
// import { eyeOffIcon } from '@/components/svgs/eyeOffIcon';
// import { Link } from 'expo-router';
// import PushButton from '@/components/PushButton';
// import BLink from '@/components/BLink';

// const index = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);

//   const handleLogin = () => {
//     console.log('Login attempted with:', {
//       email,
//       password,
//       rememberMe,
//       termsAccepted,
//     });
//     // Login logic would go here
//   };

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}
//       >
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.title}>Hoş Geldiniz</Text>
//             <Text style={styles.subtitle}>Hesabınıza giriş yapın</Text>
//           </View>

//           {/* Form */}
//           <View style={styles.form}>
//             {/* Email Input */}
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>E-posta Adresi</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="ornek@mail.com"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             {/* Password Input */}
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Şifre</Text>
//               <View style={styles.passwordContainer}>
//                 <TextInput
//                   style={styles.passwordInput}
//                   placeholder="••••••••"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={() => setShowPassword(!showPassword)}
//                 >
//                   <SvgXml
//                     xml={showPassword ? eyeOffIcon : eyeIcon}
//                     width={24}
//                     height={24}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Remember Me & Forgot Password */}
//             <View style={styles.rememberForgotContainer}>
//               <View style={styles.rememberContainer}>
//                 <Switch
//                   value={rememberMe}
//                   onValueChange={setRememberMe}
//                   trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
//                   thumbColor="#FFFFFF"
//                 />
//                 <Text style={styles.rememberText}>Beni hatırla</Text>
//               </View>
//               <TouchableOpacity>
//                 <Text style={styles.forgotText}>Şifremi unuttum</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Terms and Conditions */}
//             <View style={styles.termsContainer}>
//               <Switch
//                 value={termsAccepted}
//                 onValueChange={setTermsAccepted}
//                 trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
//                 thumbColor="#FFFFFF"
//               />
//               <View style={styles.termsTextContainer}>
//                 <Text style={styles.termsText}>
//                   <Text
//                     style={styles.termsLink}
//                     onPress={() => setShowTerms(true)}
//                   >
//                     Kullanım şartları ve gizlilik politikasını
//                   </Text>{' '}
//                   kabul ediyorum
//                 </Text>
//               </View>
//             </View>

//             {/* Login Button */}
//             <Link href="/(enter)/(tabs)" asChild>
//               <Pressable>
//                 <View
//                   style={[
//                     styles.loginButton,
//                     !termsAccepted && styles.loginButtonDisabled,
//                   ]}
//                 >
//                   <Text style={styles.loginButtonText}>Giriş Yap</Text>
//                 </View>
//               </Pressable>
//             </Link>

//             <BLink
//               href="/(enter)/(tabs)"
//               style={[styles.loginButton, !termsAccepted && styles.loginButtonDisabled]}
//               textStyle={styles.loginButtonText}
//             />

//             {/* Sign Up Link */}
//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>
//                 Hesabınız yok mu?{' '}
//                 <Text style={styles.signupLink}>Hemen kayıt olun</Text>
//               </Text>
//             </View>

//             {/* Social Login Divider */}
//             <View style={styles.dividerContainer}>
//               <View style={styles.divider} />
//               <Text style={styles.dividerText}>Veya şununla devam edin</Text>
//               <View style={styles.divider} />
//             </View>

//             {/* Social Login Buttons */}
//             <View style={styles.socialButtonsContainer}>
//               <TouchableOpacity style={styles.socialButton}>
//                 <SvgXml xml={googleLogoXml} width={24} height={24} />
//                 <Text style={styles.socialButtonText}>Google</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.socialButton}>
//                 <SvgXml xml={appleLogoXml} width={24} height={24} />
//                 <Text style={styles.socialButtonText}>Apple</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Terms Modal */}
//           <Modal visible={showTerms} animationType="slide" transparent={true}>
//             <View style={styles.modalOverlay}>
//               <View style={styles.modalContent}>
//                 <ScrollView>
//                   <Text style={styles.modalTitle}>
//                     Kullanım Şartları ve Gizlilik Politikası
//                   </Text>
//                   <View style={styles.modalBody}>
//                     <Text style={styles.termsContentText}>
//                       Bu uygulama kullanımı sırasında, kişisel verilerinizi
//                       korumak ve hizmetlerimizi iyileştirmek adına belirli
//                       bilgiler toplanmaktadır.
//                     </Text>
//                     <Text style={styles.termsContentText}>
//                       <Text style={styles.termsBold}>1. Veri Toplama:</Text>{' '}
//                       Uygulamaya kaydolduğunuzda e-posta adresiniz, adınız ve
//                       diğer iletişim bilgileriniz kaydedilir. Ayrıca uygulama
//                       kullanımınız sırasında cihaz bilgileri, IP adresi ve
//                       kullanım alışkanlıklarınız hakkında veriler toplanabilir.
//                     </Text>
//                     <Text style={styles.termsContentText}>
//                       <Text style={styles.termsBold}>2. Veri Kullanımı:</Text>{' '}
//                       Toplanan bilgiler, hizmetlerimizi sağlamak, iyileştirmek,
//                       kişiselleştirmek ve güvenlik önlemlerini uygulamak için
//                       kullanılır.
//                     </Text>
//                     <Text style={styles.termsContentText}>
//                       <Text style={styles.termsBold}>3. Veri Paylaşımı:</Text>{' '}
//                       Kişisel verileriniz, yasal zorunluluklar dışında üçüncü
//                       taraflarla paylaşılmaz. Hizmet sağlayıcılarımızla
//                       paylaşılan veriler, gizlilik standartlarımıza uygun olarak
//                       işlenir.
//                     </Text>
//                     <Text style={styles.termsContentText}>
//                       <Text style={styles.termsBold}>4. Veri Güvenliği:</Text>{' '}
//                       Verilerinizi korumak için endüstri standardı güvenlik
//                       önlemleri uyguluyoruz, ancak internet üzerinden yapılan
//                       hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
//                     </Text>
//                     <Text style={styles.termsContentText}>
//                       <Text style={styles.termsBold}>
//                         5. Hesap Sorumluluğu:
//                       </Text>{' '}
//                       Hesap bilgilerinizin gizliliğini korumak sizin
//                       sorumluluğunuzdadır. Şifrenizi kimseyle paylaşmayın ve
//                       düzenli olarak değiştirin.
//                     </Text>
//                   </View>
//                 </ScrollView>
//                 <TouchableOpacity
//                   style={styles.acceptButton}
//                   onPress={() => setShowTerms(false)}
//                 >
//                   <Text style={styles.acceptButtonText}>
//                     Anladım ve Kabul Ediyorum
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   header: {
//     backgroundColor: '#2563EB',
//     padding: 24,
//     paddingTop: 40,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#BFDBFE',
//   },
//   form: {
//     padding: 24,
//     backgroundColor: '#FFFFFF',
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     marginTop: -20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#4B5563',
//     marginBottom: 8,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 8,
//     backgroundColor: '#FFFFFF',
//   },
//   passwordInput: {
//     flex: 1,
//     height: 50,
//     paddingHorizontal: 16,
//     fontSize: 16,
//   },
//   eyeIcon: {
//     padding: 10,
//   },
//   rememberForgotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rememberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rememberText: {
//     marginLeft: 8,
//     fontSize: 14,
//     color: '#4B5563',
//   },
//   forgotText: {
//     fontSize: 14,
//     color: '#2563EB',
//     fontWeight: '500',
//   },
//   termsContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 24,
//   },
//   termsTextContainer: {
//     flex: 1,
//     marginLeft: 8,
//   },
//   termsText: {
//     fontSize: 14,
//     color: '#4B5563',
//     lineHeight: 20,
//   },
//   termsLink: {
//     color: '#2563EB',
//     fontWeight: '500',
//   },
//   loginButton: {
//     backgroundColor: '#2563EB',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   loginButtonDisabled: {
//     backgroundColor: '#93C5FD',
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   signupContainer: {
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   signupText: {
//     fontSize: 14,
//     color: '#6B7280',
//   },
//   signupLink: {
//     color: '#2563EB',
//     fontWeight: '500',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#E5E7EB',
//   },
//   dividerText: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginHorizontal: 16,
//   },
//   socialButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   socialButton: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 44,
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 8,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 16,
//     marginHorizontal: 4,
//   },
//   socialButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#4B5563',
//     marginLeft: 8,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//   },
//   modalContent: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     width: '100%',
//     maxHeight: '80%',
//     padding: 24,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#1F2937',
//   },
//   modalBody: {
//     marginBottom: 20,
//   },
//   termsContentText: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 16,
//     lineHeight: 22,
//   },
//   termsBold: {
//     fontWeight: 'bold',
//     color: '#4B5563',
//   },
//   acceptButton: {
//     backgroundColor: '#2563EB',
//     height: 44,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   acceptButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default index;

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
               <LinearGradient
                colors={['#e0e7ff', '#dce4ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.logoCircle}
              >
                <Text style={styles.logoText}>R</Text>
              </LinearGradient>
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

              <TouchableOpacity
                style={[
                  styles.loginButton,
                  isLoading && styles.loginButtonDisabled,
                ]}
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Text style={styles.loginButtonText}>Giriş Yapılıyor...</Text>
                ) : (
                  <Text style={styles.loginButtonText}>Giriş Yap</Text>
                )}
              </TouchableOpacity>

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