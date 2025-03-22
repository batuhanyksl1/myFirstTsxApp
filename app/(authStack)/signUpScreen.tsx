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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useRouter } from 'expo-router';

// SVG Logos
const googleLogoXml = `
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    fill="#4285F4"
  />
  <path
    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    fill="#34A853"
  />
  <path
    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    fill="#FBBC05"
  />
  <path
    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    fill="#EA4335"
  />
</svg>
`;

const appleLogoXml = `
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.941 5.76c-1.223-.672-2.214-.46-3.028-.085-.752.346-1.378.346-1.973 0-.813-.375-1.805-.587-3.029.085C4.722 7.151 4.776 9.822 5.957 12.05a5.766 5.766 0 0 0 1.67 1.913c.616.437 1.357.574 2.078.332a4.758 4.758 0 0 1 1.282-.213c.44.015.875.08 1.298.214.722.243 1.464.103 2.079-.334a5.732 5.732 0 0 0 1.669-1.913c1.18-2.228 1.235-4.9-.092-6.29z" fill="#000"/>
  <path d="M12.52 4.733a3.45 3.45 0 0 0 .807-2.58 3.429 3.429 0 0 0-2.332 1.208 3.318 3.318 0 0 0-.844 2.552c.878.017 1.69-.443 2.369-1.18z" fill="#000"/>
</svg>
`;

// Eye Icon (for password visibility toggle)
const eyeIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const eyeOffIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.12 14.12a3 3 0 11-4.24-4.24" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 4l16 16M1 12s4-8 11-8c1.73 0 3.3.32 4.66.89M9.34 19.11C10.7 19.68 12.27 20 14 20c7 0 11-8 11-8s-1.26-2.51-3.38-4.62" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  const router = useRouter();

  const handleSignUp = () => {
    console.log('Sign up attempted with:', {
      fullName,
      email,
      password,
      termsAccepted,
      marketingAccepted,
    });
    // Sign up logic would go here
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
            <Text style={styles.title}>Hesap Oluşturun</Text>
            <Text style={styles.subtitle}>Hemen kaydolun ve başlayın</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Full Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ad Soyad</Text>
              <TextInput
                style={styles.input}
                placeholder="Ad ve soyadınızı girin"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
            </View>

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
              <Text style={styles.passwordHint}>
                Şifreniz en az 8 karakter, bir büyük harf ve bir rakam
                içermelidir.
              </Text>
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Şifre Tekrarı</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <SvgXml
                    xml={showConfirmPassword ? eyeOffIcon : eyeIcon}
                    width={24}
                    height={24}
                  />
                </TouchableOpacity>
              </View>
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

            {/* Marketing Communications */}
            <View style={styles.termsContainer}>
              <Switch
                value={marketingAccepted}
                onValueChange={setMarketingAccepted}
                trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
                thumbColor="#FFFFFF"
              />
              <View style={styles.termsTextContainer}>
                <Text style={styles.termsText}>
                  Kampanya ve yeniliklerle ilgili bildirim almak istiyorum
                </Text>
              </View>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={[
                styles.signUpButton,
                !termsAccepted && styles.signUpButtonDisabled,
              ]}
              onPress={handleSignUp}
              disabled={!termsAccepted}
            >
              <Text style={styles.signUpButtonText}>Kayıt Ol</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                Zaten hesabınız var mı?{' '}
                <Text onPress={()=> router.push ('/(authStack)')} style={styles.loginLink}>Giriş yapın</Text>
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
  passwordHint: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
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
  signUpButton: {
    backgroundColor: '#2563EB',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  signUpButtonDisabled: {
    backgroundColor: '#93C5FD',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  loginText: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginLink: {
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

export default SignUpScreen;
