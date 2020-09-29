import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../colors/index'

export default function FlatButton({ title, onPress, styles, textstyles }) {
    return (
        <View style={{
            width: '100%',
            marginTop: 4,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity
                style={styles}
                onPress={onPress}>
                <Text style={textstyles}>{title}</Text>
            </TouchableOpacity>
        </View>

    );
}
