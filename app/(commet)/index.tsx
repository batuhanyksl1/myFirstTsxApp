import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Rüya kategorileri
const dreamCategories = [
  { id: '1', title: 'Uçmak', icon: 'airplane-outline' },
  { id: '2', title: 'Düşmek', icon: 'trending-down-outline' },
  { id: '3', title: 'Su', icon: 'water-outline' },
  { id: '4', title: 'Aile', icon: 'people-outline' },
  { id: '5', title: 'Ev', icon: 'home-outline' },
  { id: '6', title: 'Takip Edilmek', icon: 'footsteps-outline' },
  { id: '7', title: 'Kaybolmak', icon: 'map-outline' },
  { id: '8', title: 'Sınav', icon: 'school-outline' },
];

// Yorumcu profilleri
const interpreters = [
  {
    id: '1',
    name: 'Ayşe Yılmaz',
    title: 'Rüya Uzmanı',
    rating: 4.9,
    image: require('@/assets/images/interpreter1.png'),
    responseTime: '30 dk içinde',
    price: '₺120',
  },
  {
    id: '2',
    name: 'Mehmet Kaya',
    title: 'Sufi Yorumcu',
    rating: 4.8,
    image: require('@/assets/images/interpreter1.png'),
    responseTime: '1 saat içinde',
    price: '₺150',
  },
  {
    id: '3',
    name: 'Zeynep Demir',
    title: 'Psikolojik Analist',
    rating: 4.7,
    image: require('@/assets/images/interpreter1.png'),
    responseTime: '45 dk içinde',
    price: '₺135',
  },
];

const index: React.FC = () => {
  const [dreamText, setDreamText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedInterpreter, setSelectedInterpreter] = useState<string | null>(
    null,
  );

  const handleSubmit = () => {
    // Rüya yorumu gönderme işlemi
    console.log('Rüya metni:', dreamText);
    console.log('Seçilen kategori ID:', selectedCategory);
    console.log('Seçilen yorumcu ID:', selectedInterpreter);
    // Burada API'ye gönderme işlemi yapılır
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Rüya Yorumu</Text>
            <View style={{ width: 32 }} />
          </View>

          {/* Açıklama */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Rüyanızı detaylı bir şekilde anlatın ve uzman yorumcularımızdan
              kişisel bir yorum alın.
            </Text>
          </View>

          {/* Rüya Anlatım Alanı */}
          <View style={styles.dreamInputContainer}>
            <Text style={styles.inputLabel}>Rüyanızı Anlatın</Text>
            <TextInput
              style={styles.dreamInput}
              multiline
              placeholder="Rüyanızı olabildiğince detaylı anlatın..."
              value={dreamText}
              onChangeText={setDreamText}
              textAlignVertical="top"
              placeholderTextColor="#999"
            />
            <Text style={styles.charCount}>
              {dreamText.length}/500 karakter
            </Text>
          </View>

          {/* Rüya Kategorileri */}
          <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Rüya Kategorisi Seçin</Text>
            <Text style={styles.sectionSubtitle}>
              Rüyanıza en uygun kategoriyi seçin
            </Text>

            <View style={styles.categoriesContainer}>
              {dreamCategories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryItem,
                    selectedCategory === category.id && styles.selectedCategory,
                  ]}
                  onPress={() => setSelectedCategory(category.id)}
                >
                  <Ionicons
                    name={category.icon as any}
                    size={24}
                    color={
                      selectedCategory === category.id ? '#fff' : '#5142e6'
                    }
                  />
                  <Text
                    style={[
                      styles.categoryTitle,
                      selectedCategory === category.id &&
                        styles.selectedCategoryText,
                    ]}
                  >
                    {category.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Yorumcu Seçimi */}
          <View style={styles.interpretersSection}>
            <Text style={styles.sectionTitle}>Yorumcu Seçin</Text>
            <Text style={styles.sectionSubtitle}>
              Size en uygun yorumcuyu seçin
            </Text>

            {interpreters.map((interpreter) => (
              <TouchableOpacity
                key={interpreter.id}
                style={[
                  styles.interpreterCard,
                  selectedInterpreter === interpreter.id &&
                    styles.selectedInterpreterCard,
                ]}
                onPress={() => setSelectedInterpreter(interpreter.id)}
              >
                <View style={styles.interpreterImageContainer}>
                  <Image
                    source={interpreter.image}
                    style={styles.interpreterImage}
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.interpreterInfo}>
                  <Text style={styles.interpreterName}>{interpreter.name}</Text>
                  <Text style={styles.interpreterTitle}>
                    {interpreter.title}
                  </Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{interpreter.rating}</Text>
                  </View>
                </View>

                <View style={styles.interpreterMeta}>
                  <Text style={styles.responseTime}>
                    {interpreter.responseTime}
                  </Text>
                  <Text style={styles.price}>{interpreter.price}</Text>
                </View>

                {selectedInterpreter === interpreter.id && (
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
          </View>

          {/* Gönder Butonu */}
          <TouchableOpacity
            style={[
              styles.submitButton,
              (!dreamText || !selectedCategory || !selectedInterpreter) &&
                styles.submitButtonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={!dreamText || !selectedCategory || !selectedInterpreter}
          >
            <Text style={styles.submitButtonText}>Yorumu İste</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
  infoContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    padding: 16,
    backgroundColor: '#f0f2ff',
    borderRadius: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  dreamInputContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  dreamInput: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  charCount: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  categoriesSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  selectedCategory: {
    backgroundColor: '#5142e6',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginLeft: 8,
  },
  selectedCategoryText: {
    color: '#fff',
  },
  interpretersSection: {
    margin: 16,
  },
  interpreterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    position: 'relative',
  },
  selectedInterpreterCard: {
    borderWidth: 2,
    borderColor: '#5142e6',
  },
  interpreterImageContainer: {
    marginRight: 12,
  },
  interpreterImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  interpreterInfo: {
    flex: 1,
  },
  interpreterName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  interpreterTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  interpreterMeta: {
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
  submitButton: {
    margin: 16,
    marginTop: 8,
    backgroundColor: '#5142e6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  submitButtonDisabled: {
    backgroundColor: '#c0c0c0',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default index;
