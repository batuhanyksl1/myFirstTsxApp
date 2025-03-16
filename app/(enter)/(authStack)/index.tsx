import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Switch,
  Modal,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { googleLogoXml } from '@/components/svgs/googleLogo';
import { appleLogoXml } from '@/components/svgs/appleLogo';
import { eyeIcon } from '@/components/svgs/eyeIcon';
import { eyeOffIcon } from '@/components/svgs/eyeOffIcon';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleLogin = () => {
    console.log('Login attempted with:', {
      email,
      password,
      rememberMe,
      termsAccepted,
    });
    // Login logic would go here
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Hoş Geldiniz</Text>
            <Text style={styles.subtitle}>Hesabınıza giriş yapın</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>E-posta Adresi</Text>
              <TextInput
                style={styles.input}
                placeholder="ornek@mail.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Şifre</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <SvgXml
                    xml={showPassword ? eyeOffIcon : eyeIcon}
                    width={24}
                    height={24}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember Me & Forgot Password */}
            <View style={styles.rememberForgotContainer}>
              <View style={styles.rememberContainer}>
                <Switch
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
                  thumbColor="#FFFFFF"
                />
                <Text style={styles.rememberText}>Beni hatırla</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Şifremi unuttum</Text>
              </TouchableOpacity>
            </View>

            {/* Terms and Conditions */}
            <View style={styles.termsContainer}>
              <Switch
                value={termsAccepted}
                onValueChange={setTermsAccepted}
                trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
                thumbColor="#FFFFFF"
              />
              <View style={styles.termsTextContainer}>
                <Text style={styles.termsText}>
                  <Text
                    style={styles.termsLink}
                    onPress={() => setShowTerms(true)}
                  >
                    Kullanım şartları ve gizlilik politikasını
                  </Text>{' '}
                  kabul ediyorum
                </Text>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                !termsAccepted && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={!termsAccepted}
            >
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Hesabınız yok mu?{' '}
                <Text style={styles.signupLink}>Hemen kayıt olun</Text>
              </Text>
            </View>

            {/* Social Login Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>Veya şununla devam edin</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <SvgXml xml={googleLogoXml} width={24} height={24} />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <SvgXml xml={appleLogoXml} width={24} height={24} />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms Modal */}
          <Modal visible={showTerms} animationType="slide" transparent={true}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Kullanım Şartları ve Gizlilik Politikası
                  </Text>
                  <View style={styles.modalBody}>
                    <Text style={styles.termsContentText}>
                      Bu uygulama kullanımı sırasında, kişisel verilerinizi
                      korumak ve hizmetlerimizi iyileştirmek adına belirli
                      bilgiler toplanmaktadır.
                    </Text>
                    <Text style={styles.termsContentText}>
                      <Text style={styles.termsBold}>1. Veri Toplama:</Text>{' '}
                      Uygulamaya kaydolduğunuzda e-posta adresiniz, adınız ve
                      diğer iletişim bilgileriniz kaydedilir. Ayrıca uygulama
                      kullanımınız sırasında cihaz bilgileri, IP adresi ve
                      kullanım alışkanlıklarınız hakkında veriler toplanabilir.
                    </Text>
                    <Text style={styles.termsContentText}>
                      <Text style={styles.termsBold}>2. Veri Kullanımı:</Text>{' '}
                      Toplanan bilgiler, hizmetlerimizi sağlamak, iyileştirmek,
                      kişiselleştirmek ve güvenlik önlemlerini uygulamak için
                      kullanılır.
                    </Text>
                    <Text style={styles.termsContentText}>
                      <Text style={styles.termsBold}>3. Veri Paylaşımı:</Text>{' '}
                      Kişisel verileriniz, yasal zorunluluklar dışında üçüncü
                      taraflarla paylaşılmaz. Hizmet sağlayıcılarımızla
                      paylaşılan veriler, gizlilik standartlarımıza uygun olarak
                      işlenir.
                    </Text>
                    <Text style={styles.termsContentText}>
                      <Text style={styles.termsBold}>4. Veri Güvenliği:</Text>{' '}
                      Verilerinizi korumak için endüstri standardı güvenlik
                      önlemleri uyguluyoruz, ancak internet üzerinden yapılan
                      hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
                    </Text>
                    <Text style={styles.termsContentText}>
                      <Text style={styles.termsBold}>
                        5. Hesap Sorumluluğu:
                      </Text>{' '}
                      Hesap bilgilerinizin gizliliğini korumak sizin
                      sorumluluğunuzdadır. Şifrenizi kimseyle paylaşmayın ve
                      düzenli olarak değiştirin.
                    </Text>
                  </View>
                </ScrollView>
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => setShowTerms(false)}
                >
                  <Text style={styles.acceptButtonText}>
                    Anladım ve Kabul Ediyorum
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#2563EB',
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#BFDBFE',
  },
  form: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563',
  },
  forgotText: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  termsTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  termsText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  termsLink: {
    color: '#2563EB',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#2563EB',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonDisabled: {
    backgroundColor: '#93C5FD',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  signupText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    color: '#2563EB',
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '100%',
    maxHeight: '80%',
    padding: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
  },
  modalBody: {
    marginBottom: 20,
  },
  termsContentText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 22,
  },
  termsBold: {
    fontWeight: 'bold',
    color: '#4B5563',
  },
  acceptButton: {
    backgroundColor: '#2563EB',
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
