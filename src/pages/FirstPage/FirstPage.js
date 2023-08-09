import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './FirstPage.style';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.maku_logo}
          source={require('../../assets/maku_logo.png')}
        />
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BaskanPage')}>
            <Text style={styles.button_text}>Başkanın Girişi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.button_text}>Denetmen Girişi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.haytek_logo_container}>
          <Image style={styles.haytek_logo} source={require('../../assets/HaytekLogo-removebg.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
