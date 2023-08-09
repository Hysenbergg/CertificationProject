import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  Modal
} from 'react-native';
import {RadioButton, IconButton} from 'react-native-paper';
import CustomDescInput from '../../components/CustomDescInput';
import styles from './CompanyQuestionsPage.style';
import Questions from '../../../sorular.json';
import ImagePicker from 'react-native-image-crop-picker';

const realm = new Realm({path: 'FormDatabase.realm'});

const MyComponent = ({route}) => {
  const {selected_file_number, selected_company_type} = route.params;

  const [value, setValue] = useState('all');
  const data0 = Questions[0].tüm_barinak_türleri_icin_ortak_kriterler;
  const data1 = Questions[1].bagli_durak;
  const data2 = Questions[2].serbest_yari_acik;
  const data3 = Questions[3].serbest_acik;
  const data4 = Questions[4].sürü_sagligiveyönetimi;
  const data5 = Questions[5].hijyen;
  const [flatListData, setFlatListData] = useState(data0);

  // Modal için var ve çözümü büyük ihtimalle alt üst component mevzusundan
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

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

  /* Soru Componentini burada olusturduk cünkü ayrı bir dosya da olunca bir kategoride isaretli olan veri diğer sayfa da isaretli olarak geliyordu.*/
  const QuestionComponent = ({
    soru,
    index,
    question_adress,
    questionn_type,
  }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [aciklama, setAciklama] = useState('');
    const [question_type, setQuestionType] = useState(questionn_type);
    const [image, setImage] = useState(
      'https://reactnative.dev/img/tiny_logo.png',
    );
    const [recorded, setRecorded] = useState(false);

    const addItemToDatabase = (
      soru,
      item,
      index,
      detay,
      question_adress,
      question_type,
      image,
    ) => {
      realm.write(() => {
        realm.create('SorularveCevaplari', {
          soru_id: index,
          file_no: selected_file_number,
          question_type: question_type,
          question_address: question_adress,
          question: soru,
          answer: item,
          selected: true,
          description: detay,
          photo: image,
        });
      });
      Alert.alert('Sorular kayıt edildi.');
    };

    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then(image => {
        console.log(image);
        setImage(image.path);
      });
    };

    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then(image => {
        console.log(image);
        setImage(image.path);
      });
    };

    return (
      <View style={styles.question_shell_container}>
        <View style={styles.question_number_container}>
          <Text style={styles.question_number}>{index}. Soru</Text>
        </View>
        <View style={styles.question_container}>
          <Text style={styles.question} key={index}>
            {' '}
            {soru}
          </Text>
        </View>
        <View style={styles.question_answer_container}>
          <View style={styles.radiobutton_group_container}>
            <RadioButton.Group
              onValueChange={newValue => setSelectedValue(newValue)}
              value={selectedValue}>
              <View>
                <View style={styles.radiobutton_container}>
                  <RadioButton
                    value="Evet"
                    color="purple"
                    uncheckedColor="purple"
                  />
                  <Text style={styles.radiobutton_title}>Evet</Text>
                </View>
                <View style={styles.radiobutton_container}>
                  <RadioButton
                    value="Hayır"
                    color="purple"
                    uncheckedColor="purple"
                  />
                  <Text style={styles.radiobutton_title}>Hayır</Text>
                </View>
                <View style={styles.radiobutton_container}>
                  <RadioButton
                    value="Kapsam Dışı"
                    color="purple"
                    uncheckedColor="purple"
                  />
                  <Text style={styles.radiobutton_title}>Kapsam Dışı</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View style={styles.desc_photo_container}>
            <View>
              <CustomDescInput
                value={aciklama}
                onChangeText={setAciklama}
                placeholder="Açıklama Yazınız.."
              />
            </View>
            <View style={styles.photo_container}>
              <IconButton
                icon="camera-plus"
                iconColor="#4F1C57"
                mode="outlined"
                onPress={takePhotoFromCamera}
              />
              {/* Tıklanma efekti fazlalık */}
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  source={{uri: image}}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={
            !recorded
              ? styles.answer_saved_button_false
              : styles.answer_saved_button_true
          }>
          <IconButton
            icon="checkbox-marked-circle-outline"
            iconColor="purple"
            size={20}
            mode="outlined"
            containerColor="white"
            onPress={() => {
              setRecorded(true);
              addItemToDatabase(
                soru,
                selectedValue,
                index,
                aciklama,
                question_adress,
                question_type,
                image,
              );
            }}
          />
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
    <SafeAreaView style={styles.container}>
      <View style={styles.top_header_container}>
        <Text style={styles.top_header}> İşletme Soruları </Text>
      </View>
      <View style={styles.cat_button_container}>
        <QuestionCategoryButton
          title="Tüm İşletme"
          checkName="all"
          onPress={() => {
            setValue('all');
            setFlatListData(data0);
          }}
        />
        <QuestionCategoryButton
          title="Bağlı Durak"
          checkName="bagli"
          onPress={() => {
            setValue('bagli');
            const deneme =
              selected_company_type === 'Bagli Durak'
                ? data1
                : selected_company_type === 'Serbest Yari Acik'
                ? data2
                : data3;
            setFlatListData(deneme);
          }}
        />
        <QuestionCategoryButton
          title="Sürü Sağlığı"
          checkName="sürü"
          onPress={() => {
            setValue('sürü');
            setFlatListData(data4);
          }}
        />
        <QuestionCategoryButton
          title="Hijyen"
          checkName="hijyen"
          onPress={() => {
            setValue('hijyen');
            setFlatListData(data5);
          }}
        />
      </View>
      <FlatList
        data={flatListData}
        keyExtractor={item => item.soru_id}
        renderItem={({item}) => (
          <QuestionComponent
            soru={item.soru}
            index={item.soru_id}
            question_adress={item.soru_adresi}
            questionn_type={item.soru_türü}
          />
        )}
      />
      {/* MODAL bozuldu burası fazlalık */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={hideModal}>
        {selectedForm && (
          <View style={styles.modal_container}>
            <TouchableOpacity
              style={styles.modal_image_button}
              onPress={hideModal}>
              <Image source={{uri: selectedForm}} style={styles.modal_image} />
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </SafeAreaView>
  );
};

export default MyComponent;

/*
<TouchableOpacity onPress={() => showModal(image)}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  source={{uri: image}}
                />
              </TouchableOpacity>
              
<Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={hideModal}>
        {selectedForm && (
          <View style={styles.modal_container}>
            <TouchableOpacity
              style={styles.modal_image_button}
              onPress={hideModal}>
              <Image source={{uri: selectedForm}} style={styles.modal_image} />
            </TouchableOpacity>
          </View>
        )}
      </Modal>

*/