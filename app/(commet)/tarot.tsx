import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 64) / 3;
const CARD_HEIGHT = CARD_WIDTH * 1.7;

interface TarotCard {
  id: number;
  name: string;
  image: any; // Gerçekte bir require() olacak
  meaning: {
    upright: string;
    reversed: string;
  };
  description: string;
}

interface ReadingQuestion {
  id: number;
  question: string;
  description: string;
  cards: number;
}

const tarot: React.FC = () => {
  const [step, setStep] = useState<
    'welcome' | 'questions' | 'shuffle' | 'select' | 'result'
  >('welcome');
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [readingResults, setReadingResults] = useState<
    { card: TarotCard; position: string; isReversed: boolean }[]
  >([]);
  const [cardsShuffled, setCardsShuffled] = useState(false);
  const [cardOpacity] = useState(new Animated.Value(1));
  const [cardScale] = useState(new Animated.Value(1));

  // Örnek Tarot kartları - Gerçek uygulamada daha kapsamlı bir veri kümesi kullanılır
  const tarotCards: TarotCard[] = [
    {
      id: 1,
      name: 'Asılan Adam',
      image: null, // require('../assets/tarot/hanged-man.jpg')
      meaning: {
        upright: 'Fedakarlık, yeni bakış açısı, beklemek',
        reversed: 'Direnç, amaçsızlık, ilişkilerde takılıp kalmak',
      },
      description:
        'Asılan Adam, içsel bilgeliğe ulaşmak için fedakarlığı ve bekleyişi temsil eder. Yeni bir bakış açısı kazanmak için olayları farklı bir açıdan görmenin önemini vurgular.',
    },
    {
      id: 2,
      name: 'İmparatoriçe',
      image: null, // require('../assets/tarot/empress.jpg')
      meaning: {
        upright: 'Bereket, annelik, bolluk, doğa',
        reversed: 'Bağımlılık, boşluk, aşırı koruma',
      },
      description:
        'İmparatoriçe, doğurganlık, bereket ve büyümeyi temsil eder. Hayatınızda bereketin artacağını ve yaratıcılığınızın gelişeceğini müjdeler.',
    },
    {
      id: 3,
      name: 'Kupa Ası',
      image: null, // require('../assets/tarot/ace-of-cups.jpg')
      meaning: {
        upright: 'Yeni başlangıçlar, sevgi, duygusal tazelenme, sezgi',
        reversed: 'Duygusal kaybediş, durgunluk, fırsatları kaçırma',
      },
      description:
        'Kupa Ası, yeni duygusal başlangıçları, sevgiyi ve yaratıcılığı temsil eder. Hayatınıza yeni bir sevgi veya yaratıcılık dalgasının girmekte olduğunu gösterir.',
    },
    {
      id: 4,
      name: 'Kılıç Şövalyesi',
      image: null, // require('../assets/tarot/knight-of-swords.jpg')
      meaning: {
        upright: 'Hız, kararlılık, aksiyon, cesaret',
        reversed: 'Saldırganlık, düşünmeden hareket etme, sabırsızlık',
      },
      description:
        'Kılıç Şövalyesi, hızlı düşünmeyi, keskin zekayı ve hedefe odaklanmayı temsil eder. Hızlı gelişen olayları ve aksiyon zamanını işaret eder.',
    },
    {
      id: 5,
      name: 'Güneş',
      image: null, // require('../assets/tarot/sun.jpg')
      meaning: {
        upright: 'Başarı, canlılık, neşe, aydınlanma',
        reversed: 'Geçici mutluluk, başarısızlık, aşırı iyimserlik',
      },
      description:
        'Güneş, hayatınıza sıcaklık ve ışık getiren olumlu enerjiyi temsil eder. Başarı, mutluluk ve aydınlanma zamanlarının geldiğini gösterir.',
    },
    {
      id: 6,
      name: 'Dünya',
      image: null, // require('../assets/tarot/world.jpg')
      meaning: {
        upright: 'Tamamlanma, bütünlük, başarı, seyahat',
        reversed: 'Tamamlanmamışlık, gecikme, hayal kırıklığı',
      },
      description:
        'Dünya, bir döngünün tamamlanmasını ve hedeflere ulaşmayı simgeler. Çabalarınızın meyvesini topladığınız, bütünlük ve doyum hissettiğiniz zamanları işaret eder.',
    },
    {
      id: 7,
      name: 'Değnek Beşlisi',
      image: null, // require('../assets/tarot/five-of-wands.jpg')
      meaning: {
        upright: 'Çatışma, rekabet, mücadele, tartışma',
        reversed: 'Çözüm, işbirliği, kaçınma',
      },
      description:
        'Değnek Beşlisi, yarışma, mücadele ve ego çatışmalarını temsil eder. Aşmanız gereken engeller ve rekabet ortamını işaret eder.',
    },
    {
      id: 8,
      name: 'Ay',
      image: null, // require('../assets/tarot/moon.jpg')
      meaning: {
        upright: 'İllüzyon, korku, kaygı, bilinçaltı',
        reversed: 'Korkuların üstesinden gelme, belirsizliğin giderilmesi',
      },
      description:
        'Ay, bilinçaltı, sezgiler ve yanılsamaları temsil eder. Belirsizlik ve korku dönemlerini, ama aynı zamanda yaratıcılık ve sezgisel anlayışı da işaret eder.',
    },
    {
      id: 9,
      name: 'Kupa Kraliçesi',
      image: null, // require('../assets/tarot/queen-of-cups.jpg')
      meaning: {
        upright: 'Sevecenlik, şefkat, duygusal güvenlik, sezgi',
        reversed: 'Duygusal dengesizlik, bağımlılık, manipülasyon',
      },
      description:
        'Kupa Kraliçesi, sevecenlik, empati ve duygusal zekayı temsil eder. Başkalarının duygularını anlama ve sevgi dolu ilişkiler kurma yeteneğini gösterir.',
    },
    {
      id: 10,
      name: 'Kule',
      image: null, // require('../assets/tarot/tower.jpg')
      meaning: {
        upright: 'Ani değişim, yıkım, kaos, aydınlanma',
        reversed: 'Değişime direnç, gereksiz ızdırap, dar kaçış',
      },
      description:
        'Kule, ani ve beklenmedik değişimleri, çöküşleri ve kaos dönemlerini temsil eder. Eski ve işlevini yitirmiş yapıların yıkılarak yeniden inşa edilme sürecini işaret eder.',
    },
    {
      id: 11,
      name: 'Sihirbaz',
      image: null, // require('../assets/tarot/magician.jpg')
      meaning: {
        upright: 'Güç, beceri, konsantrasyon, eylem',
        reversed: 'Manipülasyon, yeteneklerin kötüye kullanımı, yetersizlik',
      },
      description:
        'Sihirbaz, yaratıcılık, irade ve odaklanmayı temsil eder. Hedefe ulaşmak için sahip olduğunuz tüm kaynakları ve becerileri kullanma yeteneğini gösterir.',
    },
    {
      id: 12,
      name: 'Adalet',
      image: null, // require('../assets/tarot/justice.jpg')
      meaning: {
        upright: 'Adalet, dürüstlük, gerçek, hukuk',
        reversed: 'Adaletsizlik, hilekarlık, dürüst olmayan iletişim',
      },
      description:
        'Adalet, denge, doğruluk ve karmanın işleyişini temsil eder. Eylemlerinizin sonuçlarıyla yüzleşme ve doğru olanı yapma zamanını işaret eder.',
    },
  ];

  // Örnek Tarot Soru Kümeleri
  const readingQuestions: ReadingQuestion[] = [
    {
      id: 1,
      question: 'Genel Bakış',
      description:
        'Hayatınızın genel gidişatı ve önünüzdeki dönemde karşılaşacağınız fırsatlar hakkında bilgi verir.',
      cards: 3,
    },
    {
      id: 2,
      question: 'Aşk ve İlişkiler',
      description:
        'Mevcut ilişkiniz, gelecekteki potansiyel ilişkiler veya duygusal durumunuz hakkında içgörü sağlar.',
      cards: 3,
    },
    {
      id: 3,
      question: 'Kariyer ve Finans',
      description:
        'İş hayatınız, finansal durumunuz ve kariyer fırsatlarınız hakkında bilgi verir.',
      cards: 3,
    },
    {
      id: 4,
      question: 'Kişisel Gelişim',
      description:
        'Kişisel gelişiminiz, ruhsal yolculuğunuz ve iç dünyanız hakkında rehberlik sunar.',
      cards: 3,
    },
    {
      id: 5,
      question: 'Celtic Cross',
      description:
        'Detaylı bir yorum için 10 kartlı geleneksel Celtic Cross yayılımı.',
      cards: 10,
    },
  ];

  // Kart anlamı pozisyonları (3 kartlık okuma için)
  const cardPositions = ['Geçmiş / Etki', 'Şimdi / Durum', 'Gelecek / Sonuç'];

  // 10 kartlık Celtic Cross pozisyonları
  const celticCrossPositions = [
    'Mevcut Durum',
    'Zorluk / Engel',
    'Bilinçaltı / Hedef',
    'Geçmiş',
    'Potansiyel',
    'Gelecek',
    'Kendiniz',
    'Çevre / Etki',
    'Umutlar / Korkular',
    'Sonuç',
  ];

  // Kartları karıştır efekti
  const shuffleCards = () => {
    // Kart animasyonu
    Animated.sequence([
      Animated.timing(cardScale, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(cardScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(cardScale, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(cardScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCardsShuffled(true);
    });
  };

  // Kart seçme işlemi
  const selectCard = (cardIndex: number) => {
    if (selectedQuestion === null) return;

    const question = readingQuestions.find((q) => q.id === selectedQuestion);
    if (!question) return;

    // Eğer maksimum kart sayısına ulaşıldıysa uyarı ver
    if (selectedCards.length >= question.cards) {
      Alert.alert('Uyarı', 'Bu yorum için maksimum kart sayısına ulaştınız.');
      return;
    }

    // Bu kartı seçilmiş kartlara ekle
    setSelectedCards([...selectedCards, cardIndex]);

    // Kart animasyonu
    Animated.timing(cardOpacity, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Tüm kartlar seçildiyse sonuca git
    if (selectedCards.length === question.cards - 1) {
      // Gerçek bir uygulamada, burada tarot yorumu oluşturulur
      setTimeout(() => {
        prepareReadingResults();
        setStep('result');
      }, 1000);
    }
  };

  // Yorum sonuçlarını hazırla
  const prepareReadingResults = () => {
    if (selectedQuestion === null) return;

    const question = readingQuestions.find((q) => q.id === selectedQuestion);
    if (!question) return;

    // Rastgele kartlar seçelim
    const results = [];
    const positions = question.id === 5 ? celticCrossPositions : cardPositions;

    for (let i = 0; i < question.cards; i++) {
      // Gerçek bir uygulamada, bu kısım daha sofistike olacaktır
      const randomCardIndex = Math.floor(Math.random() * tarotCards.length);
      const isReversed = Math.random() > 0.5;

      results.push({
        card: tarotCards[randomCardIndex],
        position: positions[i] || `Pozisyon ${i + 1}`,
        isReversed,
      });
    }

    setReadingResults(results);
  };

  // Ana ekrana dön
  const goToHome = () => {
    setStep('welcome');
    setSelectedQuestion(null);
    setSelectedCards([]);
    setReadingResults([]);
    setCardsShuffled(false);
  };

  // Bir önceki adıma git
  const goBack = () => {
    if (step === 'questions') {
      setStep('welcome');
    } else if (step === 'shuffle') {
      setStep('questions');
      setSelectedQuestion(null);
    } else if (step === 'select') {
      setStep('shuffle');
      setSelectedCards([]);
      setCardsShuffled(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {step !== 'welcome' && (
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>
          {step === 'welcome'
            ? 'Tarot Falı'
            : step === 'questions'
              ? 'Soru Seçin'
              : step === 'shuffle'
                ? 'Kartları Karıştırın'
                : step === 'select'
                  ? 'Kartlarınızı Seçin'
                  : 'Tarot Yorumu'}
        </Text>
        {step !== 'welcome' ? (
          <TouchableOpacity style={styles.homeButton} onPress={goToHome}>
            <Ionicons name="home-outline" size={24} color="#333" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 32 }} />
        )}
      </View>

      {step === 'welcome' && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.welcomeContainer}>
            <View style={styles.tarotImageContainer}>
              {/* Placeholder için tarot kartı görseli */}
              <View style={styles.tarotImagePlaceholder}>
                <Ionicons name="moon-outline" size={50} color="#5142e6" />
              </View>
            </View>
            <Text style={styles.welcomeTitle}>Tarot Kartları ile Kehanet</Text>
            <Text style={styles.welcomeText}>
              Tarot kartları, geçmiş, şimdi ve geleceğiniz hakkında içgörü
              sağlayan güçlü bir kehanet aracıdır. Doğru sorular sorarak ve açık
              bir zihinle yaklaşarak, hayatınızın çeşitli yönleri hakkında
              değerli rehberlik alabilirsiniz.
            </Text>

            <TouchableOpacity
              style={styles.startButton}
              onPress={() => setStep('questions')}
            >
              <Text style={styles.startButtonText}>Tarot Falına Başla</Text>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Tarot Nasıl Çalışır?</Text>
            <Text style={styles.infoText}>
              Tarot, 78 karttan oluşan bir deste kullanarak yapılan bir kehanet
              sistemidir. Her kart, farklı bir enerjiyi, durumu veya potansiyeli
              temsil eder. Kartlar, bilinçaltınızın bilgeliğini ortaya çıkarmak
              ve şu andaki enerji akışını görselleştirmek için bir araç olarak
              hizmet eder.
            </Text>
          </View>
        </ScrollView>
      )}

      {step === 'questions' && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.questionsContainer}>
            <Text style={styles.questionIntro}>
              Tarot yorumunuz için bir konu seçin. Ne hakkında rehberlik almak
              istediğinize karar vermeniz, daha anlamlı bir yorum almanıza
              yardımcı olacaktır.
            </Text>

            {readingQuestions.map((question) => (
              <TouchableOpacity
                key={question.id}
                style={[
                  styles.questionCard,
                  selectedQuestion === question.id &&
                    styles.selectedQuestionCard,
                ]}
                onPress={() => setSelectedQuestion(question.id)}
              >
                <View style={styles.questionHeader}>
                  <Text style={styles.questionTitle}>{question.question}</Text>
                  <Text style={styles.cardCount}>{question.cards} kart</Text>
                </View>
                <Text style={styles.questionDescription}>
                  {question.description}
                </Text>

                {selectedQuestion === question.id && (
                  <View style={styles.checkmark}>
                    <Ionicons
                      name="checkmark-circle"
                      size={24}
                      color="#5142e6"
                    />
                  </View>
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                styles.continueButton,
                !selectedQuestion && styles.disabledButton,
              ]}
              onPress={() => selectedQuestion && setStep('shuffle')}
              disabled={!selectedQuestion}
            >
              <Text style={styles.continueButtonText}>Devam Et</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {step === 'shuffle' && (
        <View style={styles.shuffleContainer}>
          <Text style={styles.shuffleText}>
            Devam etmeden önce, lütfen bir an durun ve seçtiğiniz soruya
            odaklanın. Düşüncelerinizi temizleyin ve kartları karıştırmaya hazır
            olduğunuzda düğmeye basın.
          </Text>

          <Animated.View
            style={[
              styles.cardDeckContainer,
              {
                transform: [{ scale: cardScale }],
              },
            ]}
          >
            <View style={styles.cardDeck}>
              <Ionicons name="albums-outline" size={80} color="#5142e6" />
            </View>
          </Animated.View>

          {!cardsShuffled ? (
            <TouchableOpacity
              style={styles.shuffleButton}
              onPress={shuffleCards}
            >
              <Text style={styles.shuffleButtonText}>Kartları Karıştır</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => setStep('select')}
            >
              <Text style={styles.selectButtonText}>Kart Seçimine Geç</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {step === 'select' && (
        <View style={styles.selectContainer}>
          <Text style={styles.selectText}>
            Lütfen sezgilerinizi dinleyerek{' '}
            {selectedQuestion &&
              readingQuestions.find((q) => q.id === selectedQuestion)?.cards}
            kart seçin. Şu ana kadar {selectedCards.length} kart seçtiniz.
          </Text>

          <View style={styles.cardsGrid}>
            {Array.from({ length: 15 }).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.cardBack,
                  selectedCards.includes(index) && { opacity: 0.5 },
                ]}
                onPress={() =>
                  !selectedCards.includes(index) && selectCard(index)
                }
                disabled={selectedCards.includes(index)}
              >
                <View style={styles.cardBackInner}>
                  <Ionicons name="moon-outline" size={30} color="#f0f2ff" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {step === 'result' && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>
              {selectedQuestion &&
                readingQuestions.find((q) => q.id === selectedQuestion)
                  ?.question}{' '}
              Yorumu
            </Text>

            <Text style={styles.resultIntro}>
              Seçtiğiniz kartlar ve anlamları aşağıda detaylandırılmıştır. Her
              kartın pozisyonu ve mesajı, size rehberlik sunmak için bütünsel
              bir yorum oluşturur.
            </Text>

            {readingResults.map((result, index) => (
              <View key={index} style={styles.cardResultContainer}>
                <View style={styles.cardPositionHeader}>
                  <Text style={styles.positionText}>{result.position}</Text>
                  <Text style={styles.positionNumber}>{index + 1}</Text>
                </View>

                <View style={styles.cardResult}>
                  <View style={styles.cardImageContainer}>
                    <View style={styles.cardImagePlaceholder}>
                      <Ionicons name="image-outline" size={40} color="#ddd" />
                    </View>
                    <Text style={styles.cardName}>
                      {result.card.name}
                      {result.isReversed ? ' (Ters)' : ''}
                    </Text>
                  </View>

                  <View style={styles.cardMeaningContainer}>
                    <Text style={styles.cardMeaningLabel}>Anlam:</Text>
                    <Text style={styles.cardMeaning}>
                      {result.isReversed
                        ? result.card.meaning.reversed
                        : result.card.meaning.upright}
                    </Text>

                    <Text style={styles.cardDescriptionLabel}>Açıklama:</Text>
                    <Text style={styles.cardDescription}>
                      {result.card.description}
                    </Text>
                  </View>
                </View>
              </View>
            ))}

            <View style={styles.overallReadingContainer}>
              <Text style={styles.overallTitle}>Genel Değerlendirme</Text>
              <Text style={styles.overallText}>
                Seçtiğiniz kartlar, şu anda bir dönüm noktasında olduğunuzu
                gösteriyor. Geçmişteki deneyimleriniz sizi bu noktaya getirmiş
                ve önünüzde yeni fırsatlar beliriyor. Kartlarınız, içsel
                güçlerinize güvenmenizi ve sezgilerinizi takip etmenizi
                öneriyor.
                {'\n\n'}
                Bu dönemde, yeni başlangıçlara açık olmanız ve eski kalıpları
                bırakmanız önemli. Önünüzdeki süreçte, yaratıcılığınızı
                kullanarak karşınıza çıkan fırsatları değerlendirmeniz, size
                büyük faydalar sağlayacak.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.newReadingButton}
              onPress={goToHome}
            >
              <Text style={styles.newReadingButtonText}>Yeni Okuma Yap</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
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
  homeButton: {
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
  // Welcome Screen
  welcomeContainer: {
    alignItems: 'center',
    padding: 20,
  },
  tarotImageContainer: {
    marginVertical: 20,
  },
  tarotImagePlaceholder: {
    width: 120,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#f0f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5142e6',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginTop: 8,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginRight: 8,
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  // Questions Screen
  questionsContainer: {
    padding: 16,
  },
  questionIntro: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedQuestionCard: {
    borderColor: '#5142e6',
    borderWidth: 2,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  cardCount: {
    fontSize: 14,
    color: '#5142e6',
  },
  questionDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  checkmark: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  continueButton: {
    backgroundColor: '#5142e6',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  // Shuffle Screen
  shuffleContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shuffleText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardDeckContainer: {
    marginVertical: 20,
  },
  cardDeck: {
    width: 120,
    height: 180,
    backgroundColor: '#f0f2ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  shuffleButton: {
    backgroundColor: '#5142e6',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  shuffleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  selectButton: {
    backgroundColor: '#2ECC40',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  // Select Screen
  selectContainer: {
    padding: 16,
  },
  selectText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardBack: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    backgroundColor: '#5142e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardBackInner: {
    width: CARD_WIDTH - 10,
    height: CARD_HEIGHT - 10,
    borderRadius: 10,
    backgroundColor: '#f0f2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Result Screen
  resultContainer: {
    padding: 16,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  resultIntro: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  cardResultContainer: {
    marginBottom: 20,
  },
  cardPositionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  positionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  positionNumber: {
    fontSize: 15,
    color: '#5142e6',
  },
  cardResult: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImageContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  cardImagePlaceholder: {
    width: CARD_WIDTH - 10,
    height: CARD_HEIGHT - 10,
    backgroundColor: '#f0f2ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
    marginTop: 4,
    textAlign: 'center',
  },
  cardMeaningContainer: {
    flex: 1,
  },
  cardMeaningLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  cardMeaning: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  cardDescriptionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
  overallReadingContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  overallTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  overallText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  newReadingButton: {
    backgroundColor: '#5142e6',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  newReadingButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default tarot;