import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './CustomButton.style';

function CustomButton({ title, onPress, loading }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading} >
        {
          loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText} >{title}</Text>
          )
        }
    </TouchableOpacity>
  )
}

export default CustomButton