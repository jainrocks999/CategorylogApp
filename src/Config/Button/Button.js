import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../colors/index';

export default function FlatButton({title, onPress, bgcolor, colorText}) {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 4,

        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 35,
          //justifyContent: 'center',
          backgroundColor: bgcolor,
          justifyContent: 'center',

          alignItems: 'center',
          marginVertical: 10,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            alignSelf: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
