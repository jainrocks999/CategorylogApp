import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../colors/index'

export default function FlatButton({ title, onPress }) {
    return (
        <View style={{
            width: 80,
            height: 25,
            marginVertical: 10,
            marginVertical: 10,
            borderWidth: 0.5,
            borderColor: Colors.darkblue,
            justifyContent: 'center',
        }}>
            <TouchableOpacity
                style={{
                    backgroundColor: 'transparent',
                    borderRadius: 2,
                }}
                onPress={onPress}>
                <Text style={{
                    color: Colors.darkblue,
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',

                }}>ADD</Text>
            </TouchableOpacity>
        </View>

    );
}
