import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomSeperator from '../../components/CustomSeperator';
import styles from './BaskanPage.style';
//import {AuthContext} from '../../context/AuthContext';

function BaskanPage() {
  //const {Login} = useContext(AuthContext);

  const [email, setEmail] = useState('tarik@hasantarik.com');
  const [password, setPassword] = useState('123123');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/loginImage.png')}
        />
      </View>
      <View style={styles.custom_seperator_container}>
        <CustomSeperator title="Baskan Girişi" />
        <Text style={styles.title}>Hoş Geldiniz</Text>
      </View>
      <View style={styles.custom_components_container}>
        <View style={styles.custom_input_container}>
          <CustomInput
            title="E-Mail"
            value={email}
            onChangeText={setEmail}
            iconName="account"
          />
          <CustomInput
            title="Şifre"
            value={password}
            onChangeText={setPassword}
            passwordSecure={true}
            iconName="key"
          />
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('Logine tıklandı.');
            }}>
            <Text style={styles.button_text}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BaskanPage;
