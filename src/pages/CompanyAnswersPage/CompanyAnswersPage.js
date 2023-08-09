import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal
} from 'react-native';
import styles from './CompanyAnswersPage.style';

const realm = new Realm({path: 'FormDatabase.realm'});

function CompanyAnswersPage({route}) {
  var questions = realm.objects('SorularveCevaplari');
  const {file} = route.params;
  const [value, setValue] = useState('tüm_sorular');

  // Modal image için.
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  // soru tipi üzerinden filtreleme işlemi yapıyoruz.
  questions = questions
    .filter(item => item.question_type == value)
    .map(
      ({
        file_no,
        question_type,
        question,
        answer,
        description,
        soru_id,
        photo,
      }) => ({
        file_no,
        question_type,
        question,
        answer,
        description,
        soru_id,
        photo,
      }),
    );

  // dosya numarası üzerinden ikinci bir filtreleme işlemi yapıyoruz. İlgili firma bilgileri gelmesi için.
  questions = questions
    .filter(item => item.file_no == file.firma_id)
    .map(
      ({
        file_no,
        question_type,
        question,
        answer,
        description,
        soru_id,
        photo,
      }) => ({
        file_no,
        question_type,
        question,
        answer,
        description,
        soru_id,
        photo,
      }),
    );

  // Modal açmak için fonk.
  const showModal = image => {
    setModalVisible(true);
    setSelectedForm(image);
  };

  // Modal kapatmak için fonk.
  const hideModal = () => {
    setModalVisible(false);
    setSelectedForm(null);
  };

  const AnswerComponent = ({index, question, answer, description, image}) => {
    return (
      <View style={styles.question_answer_shell}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: -10,
          }}>
          <View style={styles.question_number_container}>
            <Text style={styles.question_number}>{index}. Soru</Text>
          </View>
        </View>
        <View style={styles.question_inner_container}>
          <View style={styles.question_container}>
            <Text style={styles.question}>{question}</Text>
          </View>
          <View style={styles.answer_desc_container}>
            <View style={styles.answer_container}>
              <Text style={styles.answer_title}>Cevap: </Text>
              <Text style={styles.answer}>{answer}</Text>
            </View>
            <View style={styles.answer_container}>
              <Text style={styles.answer_title}>Açıklama: </Text>
              <Text style={styles.answer}>{description}</Text>
            </View>
          </View>
          <View style={styles.photo_container}>
            <View style={styles.photo_title_container}>
              <Text style={styles.photo_title}>Fotograf: </Text>
            </View>
            <View style={styles.photo_inner_container}>
              <TouchableOpacity onPress={() => showModal(image)}>
                <Image style={styles.photo} source={{uri: image}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  /* Kategori Butonlarının Componenti Secilen kategoriye göre soru sayfası gelecek. */
  const QuestionCategoryButton = ({title, checkName, onPress}) => {
    return (
      <TouchableOpacity
        style={
          value === checkName
            ? styles.cat_button_check
            : styles.cat_button_default
        }
        onPress={onPress}>
        <Text
          style={
            value === checkName
              ? styles.cat_button_title_check
              : styles.cat_button_title_default
          }>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.shell_container}>
      <View style={styles.top_header_container}>
        <Text style={styles.top_header}>Soru Cevapları</Text>
      </View>
      <View style={styles.cat_button_container}>
        <QuestionCategoryButton
          title="Tüm Sorular"
          checkName="tüm_sorular"
          onPress={() => {
            setValue('tüm_sorular');
          }}
        />
        <QuestionCategoryButton
          title="Bağlı Durak"
          checkName="bagli_durak"
          onPress={() => {
            setValue('bagli_durak');
          }}
        />
        <QuestionCategoryButton
          title="Sürü Sağlığı"
          checkName="sürü_sagligiveyönetimi"
          onPress={() => {
            setValue('sürü_sagligiveyönetimi');
          }}
        />
        <QuestionCategoryButton
          title="Hijyen"
          checkName="hijyen"
          onPress={() => {
            setValue('hijyen');
          }}
        />
      </View>
      <FlatList
        data={questions}
        keyExtractor={item => item.soru_id}
        renderItem={({item}) => (
          <AnswerComponent
            index={item.soru_id}
            question={item.question}
            answer={item.answer}
            description={item.description}
            image={item.photo}
          />
        )}
      />
      {/* MODAL Componenet */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={hideModal}>
        {selectedForm && (
          <View
            style={styles.modal_container}>
            <TouchableOpacity
              style={styles.modal_image_button}
              onPress={hideModal}>
              <Image
                source={{uri: selectedForm}}
                style={styles.modal_image}
              />
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </SafeAreaView>
  );
}

export default CompanyAnswersPage;
