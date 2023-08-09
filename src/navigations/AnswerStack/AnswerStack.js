import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuditAnswerPage from '../../pages/AuditAnswerPage/AuditAnswerPage';
import CompanyAnswersPage from '../../pages/CompanyAnswersPage/CompanyAnswersPage';

const Stack = createNativeStackNavigator();

function AnswerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuditAnswerPage' component={AuditAnswerPage} />
        <Stack.Screen name='CompanyAnswersPage' component={CompanyAnswersPage} />
    </Stack.Navigator>
  )
}

export default AnswerStack