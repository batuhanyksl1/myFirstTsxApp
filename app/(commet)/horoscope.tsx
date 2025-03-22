import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ZodiacSign {
  id: string;
  name: string;
  turkishName: string;
  dates: string;
  element: string;
  planet: string;
  icon: any; // Normalde bu bir require() ile import edilmiş resim olacak
  color: string;
  backgroundGradient: string[];
}

interface HoroscopeReading {
  general: string;
  love: string;
  career: string;
  health: string;
  luckyNumbers: number[];
  compatibility: string;
}

const horoscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    // Günün tarihini almak için
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    setCurrentDate(date.toLocaleDateString('tr-TR', options));
  }, []);

  // Burç bilgileri
  const zodiacSigns: ZodiacSign[] = [
    {
      id: 'aries',
      name: 'Aries',
      turkishName: 'Koç',
      dates: '21 Mart - 19 Nisan',
      element: 'Ateş',
      planet: 'Mars',
      icon: null, // Placeholder
      color: '#FF4136',
      backgroundGradient: ['#FF4136', '#FF851B'],
    },
    {
      id: 'taurus',
      name: 'Taurus',
      turkishName: 'Boğa',
      dates: '20 Nisan - 20 Mayıs',
      element: 'Toprak',
      planet: 'Venüs',
      icon: null,
      color: '#2ECC40',
      backgroundGradient: ['#2ECC40', '#3D9970'],
    },
    {
      id: 'gemini',
      name: 'Gemini',
      turkishName: 'İkizler',
      dates: '21 Mayıs - 20 Haziran',
      element: 'Hava',
      planet: 'Merkür',
      icon: null,
      color: '#FFDC00',
      backgroundGradient: ['#FFDC00', '#FFD700'],
    },
    {
      id: 'cancer',
      name: 'Cancer',
      turkishName: 'Yengeç',
      dates: '21 Haziran - 22 Temmuz',
      element: 'Su',
      planet: 'Ay',
      icon: null,
      color: '#B10DC9',
      backgroundGradient: ['#B10DC9', '#85144b'],
    },
    {
      id: 'leo',
      name: 'Leo',
      turkishName: 'Aslan',
      dates: '23 Temmuz - 22 Ağustos',
      element: 'Ateş',
      planet: 'Güneş',
      icon: null,
      color: '#FF851B',
      backgroundGradient: ['#FF851B', '#FF4136'],
    },
    {
      id: 'virgo',
      name: 'Virgo',
      turkishName: 'Başak',
      dates: '23 Ağustos - 22 Eylül',
      element: 'Toprak',
      planet: 'Merkür',
      icon: null,
      color: '#7FDBFF',
      backgroundGradient: ['#7FDBFF', '#39CCCC'],
    },
    {
      id: 'libra',
      name: 'Libra',
      turkishName: 'Terazi',
      dates: '23 Eylül - 22 Ekim',
      element: 'Hava',
      planet: 'Venüs',
      icon: null,
      color: '#F012BE',
      backgroundGradient: ['#F012BE', '#B10DC9'],
    },
    {
      id: 'scorpio',
      name: 'Scorpio',
      turkishName: 'Akrep',
      dates: '23 Ekim - 21 Kasım',
      element: 'Su',
      planet: 'Plüton',
      icon: null,
      color: '#111111',
      backgroundGradient: ['#111111', '#001f3f'],
    },
    {
      id: 'sagittarius',
      name: 'Sagittarius',
      turkishName: 'Yay',
      dates: '22 Kasım - 21 Aralık',
      element: 'Ateş',
      planet: 'Jüpiter',
      icon: null,
      color: '#0074D9',
      backgroundGradient: ['#0074D9', '#7FDBFF'],
    },
    {
      id: 'capricorn',
      name: 'Capricorn',
      turkishName: 'Oğlak',
      dates: '22 Aralık - 19 Ocak',
      element: 'Toprak',
      planet: 'Satürn',
      icon: null,
      color: '#3D9970',
      backgroundGradient: ['#3D9970', '#2ECC40'],
    },
    {
      id: 'aquarius',
      name: 'Aquarius',
      turkishName: 'Kova',
      dates: '20 Ocak - 18 Şubat',
      element: 'Hava',
      planet: 'Uranüs',
      icon: null,
      color: '#39CCCC',
      backgroundGradient: ['#39CCCC', '#7FDBFF'],
    },
    {
      id: 'pisces',
      name: 'Pisces',
      turkishName: 'Balık',
      dates: '19 Şubat - 20 Mart',
      element: 'Su',
      planet: 'Neptün',
      icon: null,
      color: '#001f3f',
      backgroundGradient: ['#001f3f', '#0074D9'],
    },
  ];

  // Örnek burç yorumu (gerçek uygulamada API'den gelecek)
  const getHoroscopeReading = (signId: string): HoroscopeReading => {
    // Örnek yorum verileri
    const horoscopeData: Record<string, HoroscopeReading> = {
      aries: {
        general:
          'Bugün enerjiniz yüksek ve motivasyonunuz tam. Yeni başlangıçlar için uygun bir gün. Cesur adımlar atabilir ve inisiyatif kullanabilirsiniz. Ancak sabırsızlığınıza dikkat edin.',
        love: 'Duygusal olarak açık ve dürüst olmanız ilişkinize derinlik katabilir. Bekarsanız, çevrenizde size ilgi duyan biri olabilir.',
        career:
          'İş hayatınızda liderlik yeteneklerinizi gösterme fırsatları doğabilir. Yeni projeler için heyecan duyacaksınız.',
        health:
          'Fiziksel aktivitelere yönelin. Sportif faaliyetler hem bedeninize hem de ruhunuza iyi gelecek.',
        luckyNumbers: [3, 7, 21],
        compatibility: 'Aslan, Yay',
      },
      taurus: {
        general:
          'Bugün maddi konularda dikkatli olmalısınız. Finansal güvenliğinizi sağlamak için adımlar atabilirsiniz. Sabrınız ve kararlılığınız, zorluklarla başa çıkmanıza yardımcı olacak.',
        love: 'İlişkinizde güven ve istikrar ön planda. Partnerinizle vakit geçirmek ve ona değer verdiğinizi göstermek önemli.',
        career:
          'İş hayatında istikrarlı adımlar atarak ilerleyebilirsiniz. Uzun vadeli planlar yapmak için uygun bir gün.',
        health:
          'Boğaz bölgenize dikkat edin. Sağlıklı beslenme ve rahatlama teknikleri üzerinde durun.',
        luckyNumbers: [2, 6, 24],
        compatibility: 'Başak, Oğlak',
      },
      // Diğer burçlar için de benzer örnek veriler eklenecek
      gemini: {
        general:
          'İletişim ve sosyal etkileşim bugün ön planda. Fikirlerinizi ifade etmek ve yeni bilgiler edinmek için iyi bir gün. Merakınız ve esnekliğiniz, yeni fırsatlar yaratabilir.',
        love: 'İlişkinizde iletişime önem verin. Partnerinizle entelektüel bir bağ kurabilirsiniz.',
        career:
          'Yaratıcı fikirleriniz ve iletişim becerileriniz iş yerinde takdir görecek.',
        health:
          'Zihinsel aktiviteler ve hafif egzersizler enerjinizi dengede tutacak.',
        luckyNumbers: [5, 14, 23],
        compatibility: 'Terazi, Kova',
      },
      cancer: {
        general:
          'Duygusal derinlik ve ailevi konular bugün öne çıkıyor. Sevdiklerinizle vakit geçirmek size iyi gelecek. Sezgileriniz güçlü, içgüdülerinize güvenin.',
        love: 'İlişkinizde duygusal bağınızı güçlendirebilirsiniz. Sevgi dolu jestler yapın.',
        career:
          'İş yaşamında ekip çalışması ve işbirliği ön plana çıkıyor. Destekleyici yaklaşımınız takdir edilecek.',
        health:
          'Duygusal dengenizi koruyun. Meditasyon ve rahatlama teknikleri faydalı olacak.',
        luckyNumbers: [4, 8, 22],
        compatibility: 'Akrep, Balık',
      },
      leo: {
        general:
          'Özgüveniniz ve yaratıcılığınız bugün yüksek. Dikkat çekecek ve takdir göreceksiniz. Liderlik yeteneklerinizi sergileyebileceğiniz fırsatlar doğabilir.',
        love: 'İlişkinizde cömert ve tutkulu olun. Partnerinize ilgi ve sevginizi gösterin.',
        career:
          'Kariyerinizde parlayabilir, yeteneklerinizi sergileyebilirsiniz. Yeni sorumluluklar alabilirsiniz.',
        health: 'Kalp ve sırt sağlığınıza dikkat edin. Düzenli egzersiz yapın.',
        luckyNumbers: [1, 9, 19],
        compatibility: 'Koç, Yay',
      },
      virgo: {
        general:
          'Detaylara olan dikkatiniz ve analitik yetenekleriniz bugün öne çıkıyor. Pratik çözümler üretebilir ve organizasyon becerilerinizi gösterebilirsiniz.',
        love: 'İlişkinizde küçük detaylara özen gösterin. Partnerinize hizmet etmekten keyif alacaksınız.',
        career:
          'İş yaşamında verimlilik ve düzen ön planda. Problem çözme yetenekleriniz dikkat çekecek.',
        health:
          'Sindirim sisteminize dikkat edin. Dengeli beslenme ve düzenli rutin önemli.',
        luckyNumbers: [6, 15, 27],
        compatibility: 'Boğa, Oğlak',
      },
      libra: {
        general:
          'Denge ve uyum arayışı bugün ön planda. İlişkilerinizde ve kararlarınızda adil ve diplomatik olmak önemli. Estetik zevkiniz ve sosyal yetenekleriniz dikkat çekecek.',
        love: 'İlişkinizde uyum ve dengeyi koruyun. Romantik jestler ilişkinizi güçlendirecek.',
        career:
          'İş ortaklıkları ve işbirliği fırsatları doğabilir. Adil ve diplomatik yaklaşımınız takdir görecek.',
        health:
          'Böbrek ve bel bölgesine dikkat edin. Dengeli bir yaşam tarzı benimseyin.',
        luckyNumbers: [7, 16, 25],
        compatibility: 'İkizler, Kova',
      },
      scorpio: {
        general:
          'Derin duygular ve tutkular bugün hayatınızda etkili. Gizemli ve kararlı yapınız, zorlukların üstesinden gelmenizi sağlayacak. Sezgileriniz güçlü, dönüşüm için uygun bir gün.',
        love: 'İlişkinizde derin duygusal bağlar kurabilirsiniz. Tutku ve sadakat ön planda.',
        career:
          'İş yaşamında stratejik düşünme ve araştırma yetenekleriniz öne çıkıyor.',
        health:
          'Üreme sisteminize dikkat edin. Dönüştürücü aktiviteler ve detoks faydalı olacak.',
        luckyNumbers: [8, 17, 26],
        compatibility: 'Yengeç, Balık',
      },
      sagittarius: {
        general:
          'Özgürlük ve macera arayışı bugün ön planda. Yeni deneyimler ve öğrenme fırsatları için iyi bir gün. İyimserlik ve açık fikirlilik, ufkunuzu genişletecek.',
        love: 'İlişkinizde özgürlük ve dürüstlük önemli. Partnerinizle yeni deneyimler yaşayın.',
        career:
          'İş yaşamında geniş vizyonunuz ve iyimserliğiniz takdir edilecek. Yeni fırsatlar keşfedebilirsiniz.',
        health:
          'Kalça ve uyluk bölgesine dikkat edin. Açık havada aktiviteler size iyi gelecek.',
        luckyNumbers: [9, 18, 27],
        compatibility: 'Koç, Aslan',
      },
      capricorn: {
        general:
          'Disiplin ve sorumluluk duygunuz bugün öne çıkıyor. Uzun vadeli hedeflerinize odaklanarak ilerleyebilirsiniz. Pratik ve gerçekçi yaklaşımınız, başarı getiriyor.',
        love: 'İlişkinizde güven ve sorumluluk önemli. Ciddi ve kararlı adımlar atabilirsiniz.',
        career:
          'İş yaşamında liderlik ve organizasyon yetenekleriniz dikkat çekecek. Kariyer ilerlemesi için fırsatlar doğabilir.',
        health:
          'Eklemler ve kemiklere dikkat edin. Disiplinli bir sağlık rutini önemli.',
        luckyNumbers: [10, 20, 29],
        compatibility: 'Boğa, Başak',
      },
      aquarius: {
        general:
          'Yenilikçi fikirler ve sosyal farkındalık bugün ön planda. Farklı düşünme yeteneğiniz ve bağımsızlığınız, yeni çözümler üretmenizi sağlayacak.',
        love: 'İlişkinizde arkadaşlık ve entelektüel uyum önemli. Partnerinizle yenilikçi aktiviteler yapın.',
        career:
          'İş yaşamında yaratıcı fikirleriniz ve ekip çalışmanız dikkat çekecek. Teknoloji alanında fırsatlar doğabilir.',
        health:
          'Dolaşım sisteminize dikkat edin. Yenilikçi sağlık yaklaşımlarını deneyebilirsiniz.',
        luckyNumbers: [11, 22, 33],
        compatibility: 'İkizler, Terazi',
      },
      pisces: {
        general:
          'Sezgisel güçleriniz ve empatiniz bugün yüksek. Ruhsal konulara ilgi duyabilir ve yaratıcı ilhamlar alabilirsiniz. Hayallerinizi gerçekleştirmek için adımlar atın.',
        love: 'İlişkinizde duygusal derinlik ve romantizm ön planda. Ruhsal bir bağ kurabilirsiniz.',
        career:
          'İş yaşamında yaratıcılığınız ve empatiniz takdir edilecek. Sanatsal projeler için uygun bir gün.',
        health:
          'Ayak sağlığınıza dikkat edin. Meditasyon ve su terapisi faydalı olacak.',
        luckyNumbers: [12, 21, 30],
        compatibility: 'Yengeç, Akrep',
      },
    };

    return horoscopeData[signId] || horoscopeData.aries; // Varsayılan olarak Koç burcu
  };

  // Seçilen burcu değiştir
  const selectSign = (signId: string) => {
    setSelectedSign(signId);
    setShowDetails(true);
  };

  // Geri dön
  const goBack = () => {
    if (showDetails) {
      setShowDetails(false);
    }
  };

  // Seçilen burç nesnesini al
  const getSelectedSign = () => {
    return zodiacSigns.find((sign) => sign.id === selectedSign);
  };

  // Burç yorumunu al
  const getReading = () => {
    if (!selectedSign) return null;
    return getHoroscopeReading(selectedSign);
  };

  // Icon getter (gerçek uygulama için)
  const getZodiacIcon = (signId: string) => {
    // Burç ikonları için placeholder
    return <Ionicons name="star-outline" size={30} color="#fff" />;
  };

  // Burç elementine göre ikon
  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Ateş':
        return 'flame-outline';
      case 'Toprak':
        return 'leaf-outline';
      case 'Hava':
        return 'cloud-outline';
      case 'Su':
        return 'water-outline';
      default:
        return 'star-outline';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {showDetails && (
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>
          {showDetails ? getSelectedSign()?.turkishName : 'Günlük Burç'}
        </Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        {!showDetails ? (
          // Burç Listesi
          <>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{currentDate}</Text>
              <Text style={styles.dateSubtext}>Bugünün Burç Yorumları</Text>
            </View>

            <View style={styles.zodiacGrid}>
              {zodiacSigns.map((sign) => (
                <TouchableOpacity
                  key={sign.id}
                  style={styles.zodiacItem}
                  onPress={() => selectSign(sign.id)}
                >
                  <View
                    style={[
                      styles.zodiacIconContainer,
                      { backgroundColor: sign.color },
                    ]}
                  >
                    {getZodiacIcon(sign.id)}
                  </View>
                  <Text style={styles.zodiacName}>{sign.turkishName}</Text>
                  <Text style={styles.zodiacDates}>{sign.dates}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          // Burç Detayları
          <View style={styles.detailsContainer}>
            <View
              style={[
                styles.signBanner,
                { backgroundColor: getSelectedSign()?.color },
              ]}
            >
              <View style={styles.signIconLarge}>
                {getZodiacIcon(selectedSign || '')}
              </View>
              <View style={styles.signInfo}>
                <Text style={styles.signName}>
                  {getSelectedSign()?.turkishName}
                </Text>
                <Text style={styles.signDates}>{getSelectedSign()?.dates}</Text>
                <View style={styles.signAttributes}>
                  <View style={styles.attributeItem}>
                    <Ionicons
                      name={getElementIcon(getSelectedSign()?.element || '')}
                      size={16}
                      color="#fff"
                    />
                    <Text style={styles.attributeText}>
                      {getSelectedSign()?.element}
                    </Text>
                  </View>
                  <View style={styles.attributeItem}>
                    <Ionicons name="planet-outline" size={16} color="#fff" />
                    <Text style={styles.attributeText}>
                      {getSelectedSign()?.planet}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.readingContainer}>
              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="sunny-outline" size={24} color="#333" />
                  <Text style={styles.sectionTitle}>Genel</Text>
                </View>
                <Text style={styles.readingText}>{getReading()?.general}</Text>
              </View>

              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="heart-outline" size={24} color="#FF4136" />
                  <Text style={styles.sectionTitle}>Aşk</Text>
                </View>
                <Text style={styles.readingText}>{getReading()?.love}</Text>
              </View>

              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color="#0074D9"
                  />
                  <Text style={styles.sectionTitle}>Kariyer</Text>
                </View>
                <Text style={styles.readingText}>{getReading()?.career}</Text>
              </View>

              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="fitness-outline" size={24} color="#2ECC40" />
                  <Text style={styles.sectionTitle}>Sağlık</Text>
                </View>
                <Text style={styles.readingText}>{getReading()?.health}</Text>
              </View>

              <View style={styles.extraInfoContainer}>
                <View style={styles.luckyNumbersContainer}>
                  <Text style={styles.extraInfoTitle}>Şanslı Sayılar</Text>
                  <View style={styles.luckyNumbersRow}>
                    {getReading()?.luckyNumbers.map((num, index) => (
                      <View key={index} style={styles.luckyNumberCircle}>
                        <Text style={styles.luckyNumberText}>{num}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.compatibilityContainer}>
                  <Text style={styles.extraInfoTitle}>Uyumlu Burçlar</Text>
                  <View style={styles.compatibilityRow}>
                    <Ionicons name="heart" size={16} color="#FF4136" />
                    <Text style={styles.compatibilityText}>
                      {getReading()?.compatibility}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.shareContainer}>
                <TouchableOpacity style={styles.shareButton}>
                  <Ionicons
                    name="share-social-outline"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.shareButtonText}>Yorumu Paylaş</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  dateContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f0f2ff',
    borderRadius: 12,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  dateSubtext: {
    fontSize: 14,
    color: '#666',
  },
  zodiacGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  zodiacItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 24,
  },
  zodiacIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  zodiacName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  zodiacDates: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  signBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 16,
  },
  signIconLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  signInfo: {
    flex: 1,
  },
  signName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  signDates: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  signAttributes: {
    flexDirection: 'row',
  },
  attributeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  attributeText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
  readingContainer: {
    padding: 16,
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  readingText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  luckyNumbersContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  compatibilityContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginLeft: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  extraInfoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  luckyNumbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  luckyNumberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  luckyNumberText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5142e6',
  },
  compatibilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  compatibilityText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 8,
  },
  shareContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5142e6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
});

export default horoscope;