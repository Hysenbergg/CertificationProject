import React, {useContext} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import styles from './ProfilePage.style';

const ProfilePage = () => {
  const {LogOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.constainer}>
      <Text>Profile Page</Text>
      <View style={styles.btn_container}>
        <TouchableOpacity
          style={styles.logout_btn}
          onPress={() => LogOut()}>
          <Text style={styles.logout_btn_text}>Çıkış</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
