import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuditsPage from '../../pages/AuditsPage';
import CompanyQuestionsPage from '../../pages/CompanyQuestionsPage';
import ReportPage from '../../pages/ReportPage/ReportPage';

const Stack = createNativeStackNavigator();

function AuditsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuditsPage' component={AuditsPage} />
        <Stack.Screen name='CompanyQuestionsPage' component={CompanyQuestionsPage} />
        <Stack.Screen name='ReportPage' component={ReportPage} />
    </Stack.Navigator>
  )
}

export default AuditsStack