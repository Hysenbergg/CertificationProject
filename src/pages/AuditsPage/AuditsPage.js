import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CustomIconButton from '../../components/CustomIconButton';
import styles from './AuditsPage.style';
import Company from '../../../Companys.json';
import {IconButton} from 'react-native-paper';
import Realm from 'realm';

function CompanyList({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  /* Realm schemas created */
  new Realm({
    path: 'FormDatabase.realm',
    schema: [
      {
        name: 'SorularveCevaplari',
        properties: {
          soru_id: {type: 'string', default: '0'},
          file_no: 'int',
          question_type: 'string',
          question_address: 'string',
          question: 'string',
          answer: 'string',
          selected: 'bool',
          description: 'string',
          photo: 'string',
        },
      },
    ],
  });

  // Modal açmak için fonk.
  const showModal = file => {
    setModalVisible(true);
    setSelectedForm(file);
  };

  // Modal kapatmak için fonk.
  const hideModal = () => {
    setModalVisible(false);
    setSelectedForm(null);
  };

  // İşletmelerin listelendiği kart componenti.
  const CompanyCard = () => {
    return (
      <View style={styles.company_card_container}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={hideModal}>
          {selectedForm && (
            <View style={styles.modal_container}>
              <View style={styles.modal_top_header_container}>
                <Text style={styles.modal_top_header}>
                  Değerlendirme Detayları
                </Text>
                <IconButton
                  icon="close-circle-outline"
                  iconColor="black"
                  size={36}
                  onPress={() => hideModal()}
                />
              </View>
              <View style={styles.seperator_container}>
                <Text style={styles.seperator}></Text>
              </View>
              <View style={styles.modal_inner_container}>
                <View style={styles.modal_info_company_name_container}>
                  <Text style={styles.modal_info_company_name}>
                    {selectedForm.firmaAdi}
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>
                    Firma İlgili Kişi:
                  </Text>
                  <Text style={styles.modal_info_describe}>
                    {selectedForm.firmaYetkiliAdi}
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>Firma Adres:</Text>
                  <Text style={styles.modal_info_describe}>
                    {selectedForm.firmaAdresi}
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>Firma Telefon:</Text>
                  <Text style={styles.modal_info_describe}>
                    {selectedForm.telefonNo}
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>Planlanan Tarih:</Text>
                  <Text style={styles.modal_info_describe}>25 Nisan 2023</Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>
                    Değerlendirme Türü:
                  </Text>
                  <Text style={styles.modal_info_describe}>
                    {selectedForm.degerlendirmeTuru}
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>İşletme Türü:</Text>
                  <Text style={styles.modal_info_describe}>
                    {selectedForm.firmaTuru}
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>Baş Denetçi:</Text>
                  <Text style={styles.modal_info_describe}>
                    Hasan Tarık Yurtseven
                  </Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>1. Yedek Denetçi:</Text>
                  <Text style={styles.modal_info_describe}>Engincan Gülek</Text>
                </View>
                <View style={styles.modal_info_container}>
                  <Text style={styles.modal_info_title}>2. Yedek Denetçi:</Text>
                  <Text style={styles.modal_info_describe}>Uğurcan Kuzu</Text>
                </View>
              </View>
              <View style={styles.modal_button_container}>
                {/* Butonlar burada yer alıyor. */}
                <TouchableOpacity
                  style={styles.modal_button}
                  onPress={() => {
                    hideModal();
                    // secili firmanının idsini ve türünü soru sayfasına yönelterek tür secimini doğru yapıyor.
                    const selected_file_number = selectedForm.firma_id;
                    const selected_company_type = selectedForm.firmaTuru;

                    navigation.navigate('CompanyQuestionsPage', {
                      selected_file_number,
                      selected_company_type,
                    });
                  }}>
                  <Text style={styles.modal_button_title}>İşletme Soru</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modal_button}
                  onPress={() => {
                    const selected_company_id = selectedForm.firma_id;
                    navigation.navigate('ReportPage', {
                      selected_company_id,
                    });
                    hideModal();
                  }}>
                  <Text style={styles.modal_button_title}>Rapor Oluştur</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Modal>
        <FlatList
          data={Company}
          keyExtractor={item => item.firma_id}
          renderItem={({item}) => (
            <View style={styles.company_card_inner_container}>
              <Text style={styles.company_title}>{item.firmaAdi}</Text>
              <View style={styles.info_container}>
                <Text style={styles.info_title}>Firma Telefon:</Text>
                <Text style={styles.info_describe}>{item.telefonNo}</Text>
              </View>
              <View style={styles.info_container}>
                <Text style={styles.info_title}>Firma Adres:</Text>
                <Text style={styles.info_describe}>{item.firmaAdresi}</Text>
              </View>
              <View style={styles.info_button_container}>
                <View style={styles.info_container}>
                  <Text style={styles.info_title}>Denetim Tarihi:</Text>
                  <Text style={styles.info_describe}>23 Nisan 2023</Text>
                </View>
                <View style={styles.describe_button}>
                  <CustomIconButton
                    icon="arrow-right-bold-outline"
                    buttonTitle="Detaylar"
                    onPress={() => showModal(item)}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.shell}>
      <View style={styles.container}>
        <Text style={styles.top_header}> Planlanmış Denetimler </Text>
      </View>
      <CompanyCard />
    </SafeAreaView>
  );
}

export default CompanyList;
