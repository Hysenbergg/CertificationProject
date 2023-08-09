# CertificationProject
Projenin yapılış amacı, Burdur ilinde yürütülmekte olan Süt Sığırcılığı İşletmeleri Belgelendirme Programı'nı yürüten Burdur Mehmet Akif Ersoy Üniversitesi Hayvancılıkta Standardizasyon ve Belgelendirme Merkezi'nin denetim ekibi için geliştirilmiştir.

### Proje'nin İçerdiği Teknolojiler
- React Native
- AsyncStorage
- Realm DB(local database)

## Uygulama İçeriği
Mobil uygulama, denetim ekiplerinin işletmenin denetimini gerçekleştirdiği ve işletmenin sertifikayı alabilmesi için karşılaması gereken soruları barındırıyor.
Denetmenin soruları görüntülediği ve kaydı açılan işletmenin soru cevaplarını kayıt edebildiği bir mobil uygulama.
Verilerin internetin olmadığı bir ortamda da kayıt edilebilmesi için offline bir ortamda kayıt yapabilecek bir veri tabanına ihtiyaç vardı. Bu sorun Realm DB ile çözüldü.
Veriler kayıt edildikten sonra internetin olduğu bir nokta da verileri ana veri tabanına gönderme işlemi yapılıyor.
