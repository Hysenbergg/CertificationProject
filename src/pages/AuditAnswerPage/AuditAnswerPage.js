import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, Modal, TouchableOpacity} from 'react-native';
import CustomIconButton from '../../components/CustomIconButton/CustomIconButton';
import styles from './AuditAnswerPage.style';
import Company from '../../../Companys.json';

const realm = new Realm({path: 'FormDatabase.realm'});

const AuditAnswerPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const GoToArchive = file => {
    setSelectedForm(file)
    navigation.navigate('CompanyAnswersPage', {file});
  }

  /*const showModal = file => {
    setModalVisible(true);
    setSelectedForm(file);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedForm(null);
  };*/

  const CompanyCard = () => {
    return (
      <View style={styles.company_card_container}>
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
                  <Text style={styles.info_describe}>25 Mart 2023</Text>
                </View>
                <View style={styles.describe_button}>
                  <CustomIconButton
                    icon="arrow-right-bold-outline"
                    buttonTitle="Cevaplar"
                    onPress={() => GoToArchive(item)}
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
    <SafeAreaView style={styles.container}>
      <View style={styles.top_header_container}>
        <Text style={styles.top_header}> Denetim Cevapları </Text>
      </View>
      <CompanyCard />
    </SafeAreaView>
  );
};

export default AuditAnswerPage;