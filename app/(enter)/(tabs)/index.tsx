import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7B68EE" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Keşfet</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search-outline"
              size={20}
              color="#999"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Rüyalarda ara..."
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={20} color="#7B68EE" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          <TouchableOpacity style={styles.categoryButtonActive}>
            <Text style={styles.categoryTextActive}>Trendler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Uçuş</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Düşme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Su</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Popular Dreams */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popüler Rüyalar</Text>

          {/* Dream Card 1 */}
          <View style={styles.dreamCard}>
            <View
              style={[styles.dreamIndicator, { backgroundColor: '#5D4EEF' }]}
            />

            <View style={styles.dreamContent}>
              {/* User Info */}
              <View style={styles.userInfoContainer}>
                <View style={styles.userAvatar}>
                  <Text style={[styles.userInitials, { color: '#7B68EE' }]}>
                    MK
                  </Text>
                </View>
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>MehmetK.</Text>
                  <Text style={styles.postTime}>2 saat önce</Text>
                </View>
              </View>

              {/* Dream Content */}
              <Text style={styles.dreamTitle}>Gökyüzünde Yüzmek</Text>
              <Text style={styles.dreamDescription}>
                Mavi bir gökyüzünde sanki bir okyanustaymış gibi yüzüyordum.
                Yukarıya doğru çıktıkça...
              </Text>

              {/* Interaction Row */}
              <View style={styles.interactionRow}>
                <View style={styles.interactionGroup}>
                  <Ionicons name="heart-outline" size={16} color="#999" />
                  <Text style={styles.interactionText}>345</Text>
                </View>

                <View style={styles.interactionGroup}>
                  <Ionicons name="chatbubble-outline" size={16} color="#999" />
                  <Text style={styles.interactionText}>42</Text>
                </View>

                <View style={styles.tagContainer}>
                  <View
                    style={[styles.dreamTag, { backgroundColor: '#E8E5FF' }]}
                  >
                    <Text style={[styles.dreamTagText, { color: '#5D4EEF' }]}>
                      Uçuş
                    </Text>
                  </View>

                  <View
                    style={[styles.dreamTag, { backgroundColor: '#E8E5FF' }]}
                  >
                    <Text style={[styles.dreamTagText, { color: '#5D4EEF' }]}>
                      Su
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Dream Card 2 */}
          <View style={styles.dreamCard}>
            <View
              style={[styles.dreamIndicator, { backgroundColor: '#FF6B6B' }]}
            />

            <View style={styles.dreamContent}>
              {/* User Info */}
              <View style={styles.userInfoContainer}>
                <View style={styles.userAvatar}>
                  <Text style={[styles.userInitials, { color: '#FF6B6B' }]}>
                    ZC
                  </Text>
                </View>
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>ZeynepC.</Text>
                  <Text style={styles.postTime}>4 saat önce</Text>
                </View>
              </View>

              {/* Dream Content */}
              <Text style={styles.dreamTitle}>Sonsuz Merdivenler</Text>
              <Text style={styles.dreamDescription}>
                Gittikçe yükselen ve bir türlü sonu gelmeyen merdivenlerden
                çıkıyordum. Her dönüşte...
              </Text>

              {/* Interaction Row */}
              <View style={styles.interactionRow}>
                <View style={styles.interactionGroup}>
                  <Ionicons name="heart-outline" size={16} color="#999" />
                  <Text style={styles.interactionText}>287</Text>
                </View>

                <View style={styles.interactionGroup}>
                  <Ionicons name="chatbubble-outline" size={16} color="#999" />
                  <Text style={styles.interactionText}>36</Text>
                </View>

                <View style={styles.tagContainer}>
                  <View
                    style={[styles.dreamTag, { backgroundColor: '#FFE8E8' }]}
                  >
                    <Text style={[styles.dreamTagText, { color: '#FF6B6B' }]}>
                      Merdivenler
                    </Text>
                  </View>

                  <View
                    style={[styles.dreamTag, { backgroundColor: '#FFE8E8' }]}
                  >
                    <Text style={[styles.dreamTagText, { color: '#FF6B6B' }]}>
                      Yükselme
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Popular Commentators */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popüler Yorumcular</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.commentatorsContainer}
          >
            {/* Commentator Card 1 */}
            <View style={styles.commentatorCard}>
              <View style={styles.commentatorAvatar}>
                <Text
                  style={[styles.commentatorInitials, { color: '#7B68EE' }]}
                >
                  AS
                </Text>
              </View>
              <Text style={styles.commentatorName}>AliS.</Text>
              <Text style={styles.commentatorTitle}>Rüya Ustası</Text>
              <TouchableOpacity
                style={[styles.followButton, { backgroundColor: '#7B68EE' }]}
              >
                <Text style={styles.followButtonText}>Takip Et</Text>
              </TouchableOpacity>
            </View>

            {/* Commentator Card 2 */}
            <View style={styles.commentatorCard}>
              <View style={styles.commentatorAvatar}>
                <Text
                  style={[styles.commentatorInitials, { color: '#4CAF50' }]}
                >
                  HT
                </Text>
              </View>
              <Text style={styles.commentatorName}>HakanT.</Text>
              <Text style={styles.commentatorTitle}>Rüya Bilgesi</Text>
              <TouchableOpacity
                style={[styles.followButton, { backgroundColor: '#4CAF50' }]}
              >
                <Text style={styles.followButtonText}>Takip Et</Text>
              </TouchableOpacity>
            </View>

            {/* Commentator Card 3 */}
            <View style={styles.commentatorCard}>
              <View style={styles.commentatorAvatar}>
                <Text
                  style={[styles.commentatorInitials, { color: '#FF6B6B' }]}
                >
                  SD
                </Text>
              </View>
              <Text style={styles.commentatorName}>SelinD.</Text>
              <Text style={styles.commentatorTitle}>Rüya Kâşifi</Text>
              <TouchableOpacity
                style={[styles.followButton, { backgroundColor: '#FF6B6B' }]}
              >
                <Text style={styles.followButtonText}>Takip Et</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Extra space at bottom */}
        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.tabText}>Ana Sayfa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="search" size={24} color="#7B68EE" />
          <Text style={[styles.tabText, { color: '#7B68EE' }]}>Keşfet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newDreamButton}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#777" />
          <Text style={styles.tabText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#7B68EE',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    flex: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoriesContainer: {
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  categoriesScroll: {
    paddingHorizontal: 15,
  },
  categoryButtonActive: {
    backgroundColor: '#7B68EE',
    borderRadius: 17.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 17.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#7B68EE',
  },
  categoryTextActive: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  categoryText: {
    color: '#7B68EE',
    fontSize: 12,
    fontWeight: '500',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  dreamCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  dreamIndicator: {
    width: 5,
    height: '100%',
  },
  dreamContent: {
    flex: 1,
    padding: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInitials: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDetails: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#777',
  },
  dreamTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dreamDescription: {
    fontSize: 12,
    color: '#777',
    marginBottom: 12,
    lineHeight: 18,
  },
  interactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  interactionText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 6,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dreamTag: {
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 5,
  },
  dreamTagText: {
    fontSize: 11,
    fontWeight: '500',
  },
  commentatorsContainer: {
    paddingRight: 16,
  },
  commentatorCard: {
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  commentatorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentatorInitials: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  commentatorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  commentatorTitle: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
  followButton: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  followButtonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '500',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    color: '#777',
    marginTop: 2,
  },
  newDreamButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7B68EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
