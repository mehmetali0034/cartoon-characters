Bu proje, Rick and Morty adlı bir çizgi dizisinin karakterlerini ve bölümlerini görüntülemek ve favorilere eklemek için bir web uygulaması oluşturuyor. Projenin bazı ana özellikleri şunlardır:

Temalar ve Renk Modu: theme.js dosyasında temalar oluşturularak, uygulamanın arayüzünün renklerini ve görünümünü özelleştirebileceğiniz bir yapı sunulmuş. Ayrıca, uygulamanın ışık/dark modunu kolayca değiştirebilirsiniz.

Ana Sayfa (Home): Karakterlerin ve bölümlerin listelendiği ana sayfa. Home.js dosyasında, Rick and Morty API'sinden veri çekilerek, karakterlerin listesi DataGrid bileşeniyle gösteriliyor. Arama çubuğu, karakter isimlerini filtrelemek için kullanılabilir.

Karakter Detay Sayfası (RickMortyDetail): Bir bölümdeki karakterlerin detaylarını gösteren sayfa. Bu detaylar, karakterin resmi, adı, durumu, türü ve cinsiyeti gibi bilgileri içerir. Bu sayfa, RickMortyCharacterDetail bileşeniyle karakterlerin listesini oluşturur.

Favori Karakterler Sayfası (MyFavorite): Kullanıcının favori karakterlerini görebileceği sayfa. Redux kullanılarak favori karakterlerin durumu yönetilir. Favorilere ekleme ve çıkarma işlemleri yapılabilmektedir. Ayrıca, karakterler arasında arama yapılabilir.

Redux Kullanımı: Favori karakterlerin durumunun yönetimi için Redux kullanılmıştır. Favori ekleme ve çıkarma işlemleri Redux eylemleri aracılığıyla gerçekleştirilir.

Material-UI Entegrasyonu: Kullanıcı arayüzü için Material-UI bileşenleri kullanılmıştır. Bu bileşenler, uygulamanın daha modern ve kullanıcı dostu olmasını sağlar.

Stil ve Tasarım: Uygulama boyunca, Material-UI bileşenlerinin yanı sıra özel stiller de kullanılmıştır. Renkler, kenar yumuşatma ve gölgeler gibi detaylar, uygulamanın estetik görünümünü artırır.

Bu proje, React ve Material-UI gibi popüler teknolojileri kullanarak, modern ve kullanıcı dostu bir web uygulaması geliştirmek için güçlü bir örnek sunuyor. Ayrıca, Redux gibi durum yönetimi kütüphanelerini etkin bir şekilde kullanarak, uygulama durumunun yönetimini kolaylaştırıyor.
