import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './context/AuthContext';

// Eklediğimiz componentler
import LoginStack from './navigations/LoginStack/LoginStack';
import BottomTab from './navigations/BottomTab';
import Loading from './components/Loading/Loading';

const Stack = createNativeStackNavigator();

function Router() {
  const {isLoading, userToken} = useContext(AuthContext);

  // yükleme durumu true ise Loading componenti görünecek.
  if(isLoading){
    return <Loading />
  }

  return (
    <NavigationContainer>
      {userToken === null ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginStack" component={LoginStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;