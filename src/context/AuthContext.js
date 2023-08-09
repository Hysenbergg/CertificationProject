import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  // Yüklenme durumu ve token tuttuğumuz statelar.
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // İleride denetimcinin diğer bilgilerini bu state içerisine alacağız.
  const [userInfo, setUserInfo] = useState(null);

  // Bu fonksiyon yardımı ile denetimcinin giriş işlemini post işlemi ile beraber yapıyoruz. Gelen tokeni ise AsyncStorage 
  // içerisine kaydederek kullanıcının sürekli giriş yapmasını engelleyerek kullanıyı hatırlatmış oluyoruz.
  const Login = async (email, password) => {
    setIsLoading(true);
    const {data: responseData} = await axios.post(
      Config.LOGIN + '/login',
      JSON.stringify({
        email,
        password,
      }),
      {headers: {'Content-Type': 'application/json'}},
    );

    setUserToken(responseData.token);
      console.log(responseData)
    AsyncStorage.setItem("userToken", responseData.token);

    setIsLoading(false);
  };

  // Kullanıcının uygulamadan çıkış yaptığı fonksiyon.
  const LogOut = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  // Kullanıcı hakkında hafıza da bilgi varsa onu aldığımız fonksiyon.
  const IsLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLogged in error: ${error}`);
    }
  };

  useEffect(() => {
    IsLoggedIn();
  }, []);

  // Bilgileri Provider yardımı ile dışardan erişimlerini açmış oluyoruz.
  return (
    <AuthContext.Provider value={{Login, LogOut, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
