import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ConsultationArea {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface Question {
  id: string;
  question: string;
  answers: string[];
  selectedAnswer: string | null;
}

interface Consultant {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  price: string;
  responseTime: string;
}

const consultation: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showConsultants, setShowConsultants] = useState<boolean>(false);
  const [selectedConsultant, setSelectedConsultant] = useState<string | null>(
    null,
  );
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  // Danışmanlık alanları
  const consultationAreas: ConsultationArea[] = [
    {
      id: '1',
      title: 'Kişisel Gelişim',
      icon: 'trending-up-outline',
      description:
        'Kendinizi tanıma, güçlü yönlerinizi keşfetme ve potansiyelinizi açığa çıkarma',
    },
    {
      id: '2',
      title: 'Kariyer Yönlendirme',
      icon: 'briefcase-outline',
      description:
        'Kariyer hedeflerinizi belirleme, iş değişikliği ve profesyonel gelişim',
    },
    {
      id: '3',
      title: 'İlişki Danışmanlığı',
      icon: 'heart-outline',
      description:
        'Romantik ilişkiler, aile ilişkileri ve sosyal ilişkilerinizi geliştirme',
    },
    {
      id: '4',
      title: 'Kişilik Analizi',
      icon: 'analytics-outline',
      description:
        'Kişilik özelliklerinizin detaylı analizi ve davranış kalıplarınızı anlama',
    },
  ];

  // Kişisel Gelişim soruları
  const personalDevelopmentQuestions: Question[] = [
    {
      id: 'q1',
      question: 'Kendinizi geliştirmek istediğiniz en önemli alan nedir?',
      answers: [
        'Özgüven',
        'Duygusal Zeka',
        'İletişim Becerileri',
        'Stres Yönetimi',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q2',
      question:
        'Kendinizle ilgili en çok değiştirmek istediğiniz özellik nedir?',
      answers: [
        'Erteleme Alışkanlığı',
        'Aşırı Eleştirellik',
        'Kararsızlık',
        'Sabırsızlık',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q3',
      question: 'Gelişiminiz için en büyük engel nedir?',
      answers: [
        'Zaman Eksikliği',
        'Motivasyon Eksikliği',
        'Korku ve Endişeler',
        'Eski Alışkanlıklar',
      ],
      selectedAnswer: null,
    },
  ];

  // Kariyer Yönlendirme soruları
  const careerQuestions: Question[] = [
    {
      id: 'q1',
      question: 'Kariyerinizde sizi ne motive ediyor?',
      answers: [
        'Finansal Güvence',
        'Başarı Hissi',
        'Yaratıcılık',
        'Topluma Katkı',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q2',
      question: 'İş hayatında en önemli bulduğunuz değer nedir?',
      answers: [
        'İş-Yaşam Dengesi',
        'Sürekli Öğrenme',
        'Liderlik Fırsatları',
        'Esneklik',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q3',
      question: 'Gelecekte kendinizi nasıl bir pozisyonda görüyorsunuz?',
      answers: [
        'Yönetici/Lider',
        'Uzman/Danışman',
        'Girişimci',
        'Serbest Çalışan',
      ],
      selectedAnswer: null,
    },
  ];

  // İlişki Danışmanlığı soruları
  const relationshipQuestions: Question[] = [
    {
      id: 'q1',
      question: 'İlişkilerinizde en çok yaşadığınız zorluk nedir?',
      answers: [
        'İletişim Problemleri',
        'Güven Sorunları',
        'Bağlanma Zorlukları',
        'Sınır Koyamama',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q2',
      question: 'İlişkilerinizde sizin için en önemli değer nedir?',
      answers: ['Dürüstlük', 'Sadakat', 'Anlayış', 'Saygı'],
      selectedAnswer: null,
    },
    {
      id: 'q3',
      question: 'İlişkilerinizde kendinizi nasıl ifade edersiniz?',
      answers: [
        'Açık ve Doğrudan',
        'Dolaylı ve Nazik',
        'Duygularımı Saklamaya Eğilimli',
        'Duruma Göre Değişir',
      ],
      selectedAnswer: null,
    },
  ];

  // Kişilik Analizi soruları
  const personalityQuestions: Question[] = [
    {
      id: 'q1',
      question: 'Yeni bir ortama girdiğinizde genellikle nasıl davranırsınız?',
      answers: [
        'Hemen Sosyalleşirim',
        'Önce Gözlemlerim',
        'Tanıdık Yüzler Ararım',
        'Rahatsız Hissederim',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q2',
      question: 'Karar verirken neye öncelik verirsiniz?',
      answers: [
        'Mantık ve Analize',
        'Duygular ve Değerlere',
        'Sezgilerime',
        'Tecrübelerime',
      ],
      selectedAnswer: null,
    },
    {
      id: 'q3',
      question: 'Stresli durumlarda nasıl tepki verirsiniz?',
      answers: [
        'Çözüm Odaklı Olurum',
        'Duygularımı İfade Ederim',
        'Kendimi Geri Çekerim',
        'Destek Ararım',
      ],
      selectedAnswer: null,
    },
  ];

  // Alana göre soruları getir
  const getQuestionsByArea = () => {
    switch (selectedArea) {
      case '1':
        return personalDevelopmentQuestions;
      case '2':
        return careerQuestions;
      case '3':
        return relationshipQuestions;
      case '4':
        return personalityQuestions;
      default:
        return [];
    }
  };

  // Danışmanlar
  const consultants: Consultant[] = [
    {
      id: '1',
      name: 'Dr. Elif Yılmaz',
      specialty: 'Klinik Psikolog',
      rating: 4.9,
      experience: '15 yıl deneyim',
      price: '₺250',
      responseTime: '24 saat içinde',
    },
    {
      id: '2',
      name: 'Ahmet Kaya',
      specialty: 'Kariyer Koçu',
      rating: 4.7,
      experience: '10 yıl deneyim',
      price: '₺180',
      responseTime: '48 saat içinde',
    },
    {
      id: '3',
      name: 'Zeynep Demir',
      specialty: 'İlişki Terapisti',
      rating: 4.8,
      experience: '12 yıl deneyim',
      price: '₺220',
      responseTime: '36 saat içinde',
    },
  ];

  // Sonraki soruya geç
  const goToNextQuestion = () => {
    const questions = getQuestionsByArea();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowConsultants(true);
    }
  };

  // Önceki soruya dön
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Cevap seç
  const selectAnswer = (questionId: string, answer: string) => {
    const questions = getQuestionsByArea();
    const updatedQuestions = questions.map((q) =>
      q.id === questionId ? { ...q, selectedAnswer: answer } : q,
    );

    // Normalde burada soruları bir state'de tutup güncellememiz gerekirdi
    // Bu demo için sadece logluyoruz
    console.log('Answer selected:', questionId, answer);
  };

  // Danışmanlık gönder
  const submitConsultation = () => {
    setShowConfirmModal(true);
    // Gerçek uygulamada burada API çağrısı yapılır
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Karakter Danışma</Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {!selectedArea ? (
          // Danışmanlık alanları seçimi
          <>
            <View style={styles.introContainer}>
              <Text style={styles.introTitle}>Karakter Danışmanlığı</Text>
              <Text style={styles.introText}>
                Uzman danışmanlarımız, kişisel gelişiminize destek olmak için
                sizinle birlikte çalışacak. Lütfen danışmanlık almak istediğiniz
                alanı seçin.
              </Text>
            </View>

            {consultationAreas.map((area) => (
              <TouchableOpacity
                key={area.id}
                style={styles.areaCard}
                onPress={() => setSelectedArea(area.id)}
              >
                <View style={styles.areaIconContainer}>
                  <Ionicons name={area.icon as any} size={28} color="#5142e6" />
                </View>
                <View style={styles.areaInfo}>
                  <Text style={styles.areaTitle}>{area.title}</Text>
                  <Text style={styles.areaDescription}>{area.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#999" />
              </TouchableOpacity>
            ))}
          </>
        ) : !showConsultants ? (
          // Sorular ekranı
          <View style={styles.questionsContainer}>
            <Text style={styles.questionSectionTitle}>
              {
                consultationAreas.find((area) => area.id === selectedArea)
                  ?.title
              }{' '}
              Anketi
            </Text>
            <Text style={styles.questionProgress}>
              Soru {currentQuestion + 1} / {getQuestionsByArea().length}
            </Text>

            <View style={styles.questionCard}>
              <Text style={styles.questionText}>
                {getQuestionsByArea()[currentQuestion]?.question}
              </Text>

              <View style={styles.answersContainer}>
                {getQuestionsByArea()[currentQuestion]?.answers.map(
                  (answer, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.answerButton,
                        getQuestionsByArea()[currentQuestion]
                          ?.selectedAnswer === answer &&
                          styles.selectedAnswerButton,
                      ]}
                      onPress={() =>
                        selectAnswer(
                          getQuestionsByArea()[currentQuestion]?.id,
                          answer,
                        )
                      }
                    >
                      <Text
                        style={[
                          styles.answerText,
                          getQuestionsByArea()[currentQuestion]
                            ?.selectedAnswer === answer &&
                            styles.selectedAnswerText,
                        ]}
                      >
                        {answer}
                      </Text>
                    </TouchableOpacity>
                  ),
                )}
              </View>

              <View style={styles.navigationButtons}>
                <TouchableOpacity
                  style={[
                    styles.navButton,
                    currentQuestion === 0 && styles.disabledButton,
                  ]}
                  onPress={goToPreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color={currentQuestion === 0 ? '#ccc' : '#5142e6'}
                  />
                  <Text
                    style={[
                      styles.navButtonText,
                      currentQuestion === 0 && styles.disabledButtonText,
                    ]}
                  >
                    Önceki
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.navButton, styles.nextButton]}
                  onPress={goToNextQuestion}
                >
                  <Text style={[styles.navButtonText, styles.nextButtonText]}>
                    {currentQuestion === getQuestionsByArea().length - 1
                      ? 'Tamamla'
                      : 'Sonraki'}
                  </Text>
                  <Ionicons name="chevron-forward" size={24} color="#5142e6" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          // Danışman seçimi ve notlar
          <View style={styles.consultantsContainer}>
            <Text style={styles.consultantsSectionTitle}>Danışman Seçin</Text>
            <Text style={styles.consultantsDescription}>
              Alanında uzman danışmanlarımızdan size en uygun olanını seçin
            </Text>

            {consultants.map((consultant) => (
              <TouchableOpacity
                key={consultant.id}
                style={[
                  styles.consultantCard,
                  selectedConsultant === consultant.id &&
                    styles.selectedConsultantCard,
                ]}
                onPress={() => setSelectedConsultant(consultant.id)}
              >
                <View style={styles.consultantImageContainer}>
                  <View style={styles.consultantImagePlaceholder}>
                    <Ionicons name="person" size={30} color="#ccc" />
                  </View>
                </View>

                <View style={styles.consultantInfo}>
                  <Text style={styles.consultantName}>{consultant.name}</Text>
                  <Text style={styles.consultantSpecialty}>
                    {consultant.specialty}
                  </Text>
                  <View style={styles.consultantMetaInfo}>
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text style={styles.ratingText}>{consultant.rating}</Text>
                    </View>
                    <Text style={styles.experienceText}>
                      {consultant.experience}
                    </Text>
                  </View>
                </View>

                <View style={styles.consultantPriceContainer}>
                  <Text style={styles.responseTime}>
                    {consultant.responseTime}
                  </Text>
                  <Text style={styles.price}>{consultant.price}</Text>
                </View>

                {selectedConsultant === consultant.id && (
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

            <View style={styles.notesContainer}>
              <Text style={styles.notesLabel}>Ek Notlar (Opsiyonel)</Text>
              <TextInput
                style={styles.notesInput}
                multiline
                placeholder="Danışmanınızla paylaşmak istediğiniz ek bilgiler..."
                value={additionalNotes}
                onChangeText={setAdditionalNotes}
                textAlignVertical="top"
                placeholderTextColor="#999"
              />
            </View>

            <TouchableOpacity
              style={[
                styles.submitButton,
                !selectedConsultant && styles.submitButtonDisabled,
              ]}
              onPress={submitConsultation}
              disabled={!selectedConsultant}
            >
              <Text style={styles.submitButtonText}>
                Danışmanlık Talebi Gönder
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Onay Modal */}
      <Modal visible={showConfirmModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
              <Text style={styles.modalTitle}>Talebiniz Alındı!</Text>
            </View>

            <Text style={styles.modalText}>
              Danışmanlık talebiniz başarıyla alınmıştır. Seçtiğiniz danışman
              yakında sizinle iletişime geçecektir.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowConfirmModal(false)}
            >
              <Text style={styles.modalButtonText}>Tamam</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  introContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f0f2ff',
    borderRadius: 12,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  areaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  areaIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  areaInfo: {
    flex: 1,
  },
  areaTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  areaDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  questionsContainer: {
    padding: 16,
  },
  questionSectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  questionProgress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  questionCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  answersContainer: {
    marginBottom: 20,
  },
  answerButton: {
    padding: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedAnswerButton: {
    backgroundColor: '#e8e5ff',
    borderColor: '#5142e6',
  },
  answerText: {
    fontSize: 16,
    color: '#444',
  },
  selectedAnswerText: {
    color: '#5142e6',
    fontWeight: '500',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  navButtonText: {
    fontSize: 16,
    color: '#5142e6',
    fontWeight: '500',
  },
  nextButton: {
    justifyContent: 'flex-end',
  },
  nextButtonText: {
    marginRight: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledButtonText: {
    color: '#999',
  },
  consultantsContainer: {
    padding: 16,
  },
  consultantsSectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  consultantsDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  consultantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    position: 'relative',
  },
  selectedConsultantCard: {
    borderWidth: 2,
    borderColor: '#5142e6',
  },
  consultantImageContainer: {
    marginRight: 12,
  },
  consultantImagePlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  consultantInfo: {
    flex: 1,
  },
  consultantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  consultantSpecialty: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  consultantMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  experienceText: {
    fontSize: 13,
    color: '#666',
  },
  consultantPriceContainer: {
    alignItems: 'flex-end',
  },
  responseTime: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5142e6',
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notesContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  notesLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  notesInput: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#5142e6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  submitButtonDisabled: {
    backgroundColor: '#c0c0c0',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginTop: 12,
  },
  modalText: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#5142e6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default consultation;
