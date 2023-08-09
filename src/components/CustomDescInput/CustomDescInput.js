import React from 'react';
import { View, TextInput } from 'react-native';

function CustomDescInput({ value, onChangeText, placeholder }) {
  return (
    <View style={{ paddingLeft:5, borderWidth: 1, borderRadius: 10, borderColor: '#4F1C57', height: 70 }}>
        <TextInput 
            style={{fontSize: 18}}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            multiline={true}
        />
    </View>
  )
}

export default CustomDescInput