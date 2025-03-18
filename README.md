# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.




Renk paletindeki farklı renklerin ne zaman kullanılacağını anlamak için size pratik bir rehber sunabilirim. İşte renk kullanımına ilişkin temel ilkeler:

## Renk Kullanım Rehberi

### Birincil Renk (#4338CA - Derin İndigo/Mor)
Kullanım alanları:
- **Ana eylem butonları**: "Giriş Yap", "Kayıt Ol", "Ödeme Yap" gibi birincil eylemler
- **Marka kimliği öğeleri**: Logo, başlık çubuğu, uygulama ikonu
- **Navigasyon elemanları**: Seçili menü öğeleri, aktif sekme göstergesi
- **Vurgulanmış metin bağlantıları**: Tıklanabilir önemli linkler
- **İlerleme çubukları**: Yükleme göstergeleri, form ilerleme durumu

### İkincil Renk (#FFB344 - Altın Sarısı)
Kullanım alanları:
- **Dikkat çekmesi gereken öğeler**: Premium özellikler, öne çıkan içerikler
- **İkonlar ve küçük vurgular**: Kullanıcı arayüzündeki küçük vurgu öğeleri
- **İkincil butonlar**: Alternatif eylemler veya tamamlayıcı işlevler
- **Rozetler ve etiketler**: "Yeni", "Premium", "Önerilen" gibi belirteçler
- **Görsel öğeler**: İllüstrasyonlar ve animasyonlardaki vurgu unsurları (örneğin güneş)

### Üçüncül Renk (#E0E7FF - Açık Lavanta/Mavi)
Kullanım alanları:
- **Arka plan alanları**: Kartlar, paneller, içerik kutuları
- **Yumuşak vurgular**: Seçili öğelerin hafif vurgulanması
- **Ayrıştırıcı alanlar**: Farklı içerik bölümlerini ayırmak için
- **Form alanları**: Input alanlarının hafif arka planları
- **Hafif göstergeler**: Pasif durum göstergeleri, devre dışı öğeler

### Aksan Renk (#1E3A8A - Derin Lacivert)
Kullanım alanları:
- **Güçlü vurgular**: Özellikle önem taşıyan bilgiler
- **Premium içerik işaretleri**: VIP veya özel erişim gerektiren özellikler
- **Güvenlikle ilgili öğeler**: Güvenlik durumu göstergeleri
- **Derinlik oluşturma**: Katmanlı tasarımlarda derinlik hissi yaratmak
- **Özel durum bildirimleri**: Kritik bildirimler veya sistem mesajları

### Nötr Tonlar
Kullanım alanları:
- **Koyu (#1F2937)**: Ana metin içeriği, başlıklar
- **Orta (#6B7280)**: Alt başlıklar, açıklamalar, ikincil metinler
- **Açık (#9CA3AF)**: İpuçları, yer tutucu metinler, devre dışı metin
- **Çok Açık (#E5E7EB)**: Ayırıcı çizgiler, kenar çizgileri, ince sınırlar
- **Arkaplan (#F8F9FB)**: Sayfa arka planları, kenar boşlukları

### Semantik Renkler
Kullanım alanları:
- **Başarı (#10B981)**: Başarılı işlem bildirimleri, onay mesajları
- **Hata (#EF4444)**: Hata mesajları, reddedilen işlemler, uyarılar
- **Uyarı (#F59E0B)**: Dikkat gerektiren durumlar, bilgi kontrolü gerektiğinde
- **Bilgi (#3B82F6)**: Bilgilendirme mesajları, ipuçları

## Pratik Renk Kullanım Örnekleri

1. **Giriş Ekranı:**
   - Arka plan: Arkaplan (#F8F9FB)
   - "Giriş Yap" butonu: Birincil (#4338CA)
   - "Kayıt Ol" butonu: Beyaz zemin, Birincil renk sınır (#4338CA)
   - Logo: Üçüncül tonlarda bulut, İkincil tonlarda güneş
   - Form alanları: Beyaz zemin, Çok Açık sınır (#E5E7EB)
   - "Şifremi Unuttum" linki: Birincil (#4338CA)

2. **Ana Sayfa:**
   - Arka plan: Arkaplan (#F8F9FB)
   - Navigasyon çubuğu: Beyaz, aktif sekme Birincil (#4338CA)
   - İçerik kartları: Beyaz zemin, Üçüncül (#E0E7FF) vurgular
   - "Rüya Yorumu" butonu: Birincil (#4338CA)
   - "Son Yorumlarınız" kartı: Beyaz zemin, İkincil (#FFB344) ikonlar

3. **Rüya Yorumu Ekranı:**
   - Arka plan: Arkaplan (#F8F9FB)
   - Metin girişi: Beyaz, Çok Açık sınır (#E5E7EB)
   - "Yorumcu Seç" butonu: Birincil (#4338CA)
   - İpuçları paneli: Üçüncül arka plan (#E0E7FF), Koyu metin (#1F2937)

4. **Yorumcu Profili:**
   - Arka plan: Arkaplan (#F8F9FB)
   - Profil kartı: Beyaz zemin
   - Premium yorumcu işareti: İkincil (#FFB344) veya Aksan (#1E3A8A)
   - İsim: Koyu (#1F2937)
   - Uzmanlık alanı: Orta (#6B7280)

Tutarlı bir kullanıcı arayüzü için bu renk kullanım prensiplerini takip etmeniz, uygulamanıza profesyonel bir görünüm kazandıracaktır. Zamanla, renklerin ne zaman ve nerede kullanılacağı konusunda daha sezgisel bir kavrayış geliştireceksiniz.