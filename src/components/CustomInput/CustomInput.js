import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './CustomInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomInput({
  title,
  placeholder,
  value,
  onChangeText,
  passwordSecure = false,
  iconName,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={passwordSecure}
        selectionColor="#472256"
      />
      <Text style={styles.title}>{title}</Text>
      <Icon name={iconName} size={25} color='#989595' />
    </View>
  );
}

export default CustomInput;
