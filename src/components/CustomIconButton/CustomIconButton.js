import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const CustomIconButton = ({icon, buttonTitle, onPress}) => (
  <View style={{ alignItems: 'center', }} >
    <Button
      icon={icon}
      mode="contained"
      contentStyle={{flexDirection: 'row-reverse'}}
      buttonColor='#4F1C57'
      textColor="white"
      onPress={onPress}
      >
      {buttonTitle}
    </Button>
  </View>
);

export default CustomIconButton;