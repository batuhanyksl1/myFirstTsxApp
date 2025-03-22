import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

// Örnek veri
const DREAM_ARCHIVES = [
  {
    id: '1',
    type: 'dream',
    title: 'Uçurumdan düşme',
    date: '12 Mart 2025',
    interpreter: 'Sufi Yorumcu',
    preview:
      'Rüyanızda uçurumdan düşmeniz, hayatınızdaki bir değişim sürecini...',
    content:
      'Rüyanızda uçurumdan düşmeniz, hayatınızdaki bir değişim sürecini temsil edebilir. Tasavvuf geleneğinde, düşmek çoğu zaman nefsin alçalması ve ardından gelen yükselme potansiyeli olarak yorumlanır. Bu rüya, şu anki durumunuzun sizi tatmin etmediğini ve içsel bir dönüşüm arayışında olduğunuzu gösteriyor. Endişelenmeyin, bu düşüş aslında gerçekliğinizin daha derin bir kavrayışına yönelik bir adımdır.',
    favorited: true,
  },
  {
    id: '2',
    type: 'dream',
    title: 'Eski bir ev',
    date: '28 Şubat 2025',
    interpreter: 'Bilimsel Yorumcu',
    preview:
      'Eski bir evde dolaşmanız, geçmişinizle ilgili çözülmemiş duygular...',
    content:
      'Eski bir evde dolaşmanız, geçmişinizle ilgili çözülmemiş duygular veya anılarla ilişkili olabilir. Nörobiliş çalışmaları, rüyada evlerin genellikle benliğimizin farklı yönlerini temsil ettiğini gösteriyor. Eski bir ev, özellikle çocukluk anıları veya erken yaşam deneyimleriyle bağlantılı olabilir. Bu rüya, geçmiş deneyimlerinizin bugünkü davranışlarınızı nasıl etkilediğini inceleme ihtiyacınızı gösteriyor.',
    favorited: false,
  },
  {
    id: '3',
    type: 'consultation',
    title: 'Kariyer değişimi',
    date: '5 Mart 2025',
    consultant: 'Kariyer Koçu',
    preview: 'Yeni bir alana geçmek istemeniz doğal bir gelişim süreci...',
    content:
      'Yeni bir alana geçmek istemeniz doğal bir gelişim süreci olarak değerlendirilebilir. Mevcut kariyerinizde 8 yıl geçirmeniz, belirli bir uzmanlık ve deneyim kazandığınızı gösteriyor. Ancak iç sesinizin sizi farklı bir yöne çağırması, kişisel büyüme ve gelişim arzunuzun bir yansıması. Değişim korkutucu olabilir, ancak önceki deneyimleriniz ve becerileriniz yeni bir alana geçişte size avantaj sağlayacaktır. Tavsiyem, ilgilendiğiniz alanda küçük adımlarla ilerlemeniz ve geçiş sürecini kademeli yapmanız.',
    favorited: true,
  },
  {
    id: '4',
    type: 'dream',
    title: 'Uçabilme yeteneği',
    date: '18 Şubat 2025',
    interpreter: 'Astrolog Yorumcu',
    preview: 'Rüyada uçmak, özgürleşme arzunuzun ve sınırlardan kurtulma...',
    content:
      'Rüyada uçmak, özgürleşme arzunuzun ve sınırlardan kurtulma isteğinizin güçlü bir sembolüdür. Kozmik enerjiler şu anda sizin yükselmenizi ve daha yüksek bir bilinç seviyesine ulaşmanızı destekliyor. Venüs-Jüpiter açısı, önünüzdeki günlerde fırsatların artacağına işaret ediyor. Bu rüya, yaratıcı potansiyelinizi ve vizyonunuzu sınırlamamanız gerektiğini hatırlatıyor. İçsel özgürlüğünüzü keşfetmek için bu dönemi değerlendirin.',
    favorited: false,
  },
  {
    id: '5',
    type: 'consultation',
    title: 'İlişki sorunları',
    date: '1 Mart 2025',
    consultant: 'İlişki Uzmanı',
    preview: 'Partnerinizle yaşadığınız iletişim zorlukları, farklı ihtiyaç...',
    content:
      'Partnerinizle yaşadığınız iletişim zorlukları, farklı ihtiyaç ve beklentilerinizin yeterince açık ifade edilmemesinden kaynaklanıyor olabilir. İlişkinizde şu anda "eleştiri-savunma" döngüsüne girmiş durumdasınız. Bu tür durumlarda, "ben" dilini kullanarak duygularınızı ifade etmek çok önemlidir. Örneğin, "Sen asla beni dinlemiyorsun" yerine "Konuşurken dikkatinin dağıldığını hissettiğimde üzülüyorum" gibi ifadeler kullanın. Ayrıca, günlük hayatın koşturmacasında birbirinize özel zaman ayırmak ve aktif dinleme pratiği yapmak ilişkinizi güçlendirecektir.',
    favorited: true,
  },
];

const ArchiveScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'dreams', 'consultations'
  const [filteredData, setFilteredData] = useState(DREAM_ARCHIVES);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Animasyon değerleri
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(100);

  // Fontları yükle
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    filterData();
  }, [searchQuery, activeTab]);

  useEffect(() => {
    if (selectedItem) {
      // Detay görünümü animasyonu
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Detay görünümünü kapatma animasyonu
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 100,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [selectedItem]);

  const filterData = () => {
    setIsLoading(true);

    // Simüle edilmiş gecikme (gerçek uygulamada API'ye istek olacak)
    setTimeout(() => {
      let result = [...DREAM_ARCHIVES];

      // Tab filtreleme
      if (activeTab === 'dreams') {
        result = result.filter((item) => item.type === 'dream');
      } else if (activeTab === 'consultations') {
        result = result.filter((item) => item.type === 'consultation');
      }

      // Arama sorgusuna göre filtreleme
      if (searchQuery) {
        const lowercasedQuery = searchQuery.toLowerCase();
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(lowercasedQuery) ||
            (item.interpreter &&
              item.interpreter.toLowerCase().includes(lowercasedQuery)) ||
            (item.consultant &&
              item.consultant.toLowerCase().includes(lowercasedQuery)) ||
            item.preview.toLowerCase().includes(lowercasedQuery),
        );
      }

      setFilteredData(result);
      setIsLoading(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const handleBackPress = () => {
    setSelectedItem(null);
  };

  const toggleFavorite = (id) => {
    const updatedData = filteredData.map((item) =>
      item.id === id ? { ...item, favorited: !item.favorited } : item,
    );
    setFilteredData(updatedData);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4338CA" />
      </View>
    );
  }

  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => handleItemPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.itemHeader}>
        <View style={styles.itemTypeContainer}>
          <View
            style={[
              styles.itemTypeBadge,
              item.type === 'dream'
                ? styles.dreamBadge
                : styles.consultationBadge,
            ]}
          >
            <Text style={styles.itemTypeBadgeText}>
              {item.type === 'dream' ? 'Rüya' : 'Danışma'}
            </Text>
          </View>
          <Text style={styles.itemDate}>{item.date}</Text>
        </View>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(item.id)}
        >
          <Ionicons
            name={item.favorited ? 'heart' : 'heart-outline'}
            size={22}
            color={item.favorited ? '#EF4444' : '#9CA3AF'}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.itemTitle}>{item.title}</Text>

      <Text style={styles.itemInterpreter}>
        {item.type === 'dream' ? item.interpreter : item.consultant}
      </Text>

      <Text style={styles.itemPreview} numberOfLines={2}>
        {item.preview}
      </Text>

      <View style={styles.itemFooter}>
        <Text style={styles.readMoreText}>Devamını oku</Text>
        <Ionicons name="chevron-forward" size={16} color="#4338CA" />
      </View>
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="search-outline" size={60} color="#E5E7EB" />
      <Text style={styles.emptyTitle}>Sonuç bulunamadı</Text>
      <Text style={styles.emptyText}>
        Arama kriterlerinize uygun kayıt bulunamadı. Lütfen farklı bir arama
        terimi deneyin.
      </Text>
    </View>
  );

  const renderDetailView = () => {
    if (!selectedItem) return null;

    return (
      <Animated.View
        style={[
          styles.detailContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.detailHeader}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="#1F2937" />
          </TouchableOpacity>

          <View
            style={[
              styles.detailTypeBadge,
              selectedItem.type === 'dream'
                ? styles.dreamBadge
                : styles.consultationBadge,
            ]}
          >
            <Text style={styles.itemTypeBadgeText}>
              {selectedItem.type === 'dream' ? 'Rüya Yorumu' : 'Danışma'}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.detailFavoriteButton}
            onPress={() => toggleFavorite(selectedItem.id)}
          >
            <Ionicons
              name={selectedItem.favorited ? 'heart' : 'heart-outline'}
              size={24}
              color={selectedItem.favorited ? '#EF4444' : '#9CA3AF'}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.detailContent}>
          <Text style={styles.detailTitle}>{selectedItem.title}</Text>

          <View style={styles.detailMetaContainer}>
            <Text style={styles.detailInterpreter}>
              {selectedItem.type === 'dream'
                ? selectedItem.interpreter
                : selectedItem.consultant}
            </Text>
            <Text style={styles.detailDate}>{selectedItem.date}</Text>
          </View>

          <Text style={styles.detailContentText}>{selectedItem.content}</Text>
        </ScrollView>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FB" />

      {/* Başlık */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Arşiv</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color="#4338CA" />
        </TouchableOpacity>
      </View>

      {/* Arama Çubuğu */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Rüya, danışma veya yorumcu ara..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Tab Butonları */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'all' && styles.activeTabButton,
          ]}
          onPress={() => handleTabChange('all')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'all' && styles.activeTabText,
            ]}
          >
            Tümü
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'dreams' && styles.activeTabButton,
          ]}
          onPress={() => handleTabChange('dreams')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'dreams' && styles.activeTabText,
            ]}
          >
            Rüyalar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'consultations' && styles.activeTabButton,
          ]}
          onPress={() => handleTabChange('consultations')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'consultations' && styles.activeTabText,
            ]}
          >
            Danışmalar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Liste veya Yükleniyor Göstergesi */}
      {isLoading ? (
        <View style={styles.loadingListContainer}>
          <ActivityIndicator size="large" color="#4338CA" />
          <Text style={styles.loadingText}>Yükleniyor...</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyList}
        />
      )}

      {/* Detay Görünümü */}
      {selectedItem && (
        <BlurView intensity={20} style={styles.blurOverlay}>
          {renderDetailView()}
        </BlurView>
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEFF3',
  },
  headerTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1F2937',
  },
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#E0E7FF',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 15,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeTabButton: {
    backgroundColor: '#4338CA',
    borderColor: '#4338CA',
  },
  tabButtonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  listContainer: {
    padding: 20,
    paddingTop: 10,
  },
  loadingListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 10,
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EEEFF3',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTypeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 10,
  },
  dreamBadge: {
    backgroundColor: '#E0E7FF',
  },
  consultationBadge: {
    backgroundColor: '#FEF3C7',
  },
  itemTypeBadgeText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#4338CA',
  },
  itemDate: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#9CA3AF',
  },
  favoriteButton: {
    padding: 5,
  },
  itemTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 6,
  },
  itemInterpreter: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  itemPreview: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#4338CA',
    marginRight: 4,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  emptyTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    maxWidth: '80%',
  },
  blurOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  detailContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '85%',
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  detailTypeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },
  detailFavoriteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  detailContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  detailTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
    color: '#1F2937',
    marginBottom: 10,
  },
  detailMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  detailInterpreter: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: '#4338CA',
  },
  detailDate: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#9CA3AF',
  },
  detailContentText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 26,
    marginBottom: 30,
  },
});

export default ArchiveScreen;
