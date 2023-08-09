import React from 'react';
import {View, Text} from 'react-native';
import styles from './CustomSeperator.style';

function CustomSeperator({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.seperator}></Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: 'white',
        }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

export default CustomSeperator;
