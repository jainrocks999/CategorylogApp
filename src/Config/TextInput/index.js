import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Colors from '../colors/index';
export default function CustomTextInput({onChangeText, placeholder}) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          paddingHorizontal: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.grey,
          width: '100%',
        }}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={onChangeText}
      />
    </View>
  );
}
