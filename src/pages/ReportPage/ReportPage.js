import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './ReportPage.style';

const realm = new Realm({path: 'FormDatabase.realm'});

/*
  Burada kaydedilmiş soruların cevaplarının bulunduğu realm objesi çağrılacak.
  
  Ardından obje içerisinden id ile eşleyerek içerisinde hayır cevabı olan soruları getirilecek.

  Ve hazırlanan bir başka soru cevap alanının oluşturulması.

  En son ise bunları da kayıt ederek e-imza alınacaktır.
*/

const ReportPage = ({route}) => {
  const {selected_company_id} = route.params;
  var answers = realm.objects('SorularveCevaplari');
  const seciliFirma = answers
    .filter(item => item.file_no === selected_company_id)
    .map(
      ({file_no, question_type, question, answer, description, soru_id}) => ({
        file_no,
        question_type,
        question,
        answer,
        description,
        soru_id,
      }),
    );
  const cevabiHayirOlanlar = seciliFirma
    .filter(item => item.answer === 'Hayır')
    .map(
      ({file_no, question_type, question, answer, description, soru_id}) => ({
        file_no,
        question_type,
        question,
        answer,
        description,
        soru_id,
      }),
    );
  console.log(cevabiHayirOlanlar);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Burası Raporların listelendiği sayfa olacak.
      </Text>
      <Text style={styles.text}>SEÇİLİ İD: {selected_company_id}</Text>
      <FlatList
        data={cevabiHayirOlanlar}
        renderItem={({item}) => (
          <View>
            <Text>
              {item.question_type} kategorisinde {item.soru_id}. sorunun cevabı
              Hayır.
            </Text>
          </View>
        )}
      />
      {/*
        cevabiHayirOlanlar.map(item => {
          return(
            <View>
              <Text>{item.question_type} kategorisinde {item.soru_id}. sorunun cevabı Hayır.</Text>
            </View>
          )
        })
      */}
    </SafeAreaView>
  );
};

export default ReportPage;
