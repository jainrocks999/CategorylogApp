import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  UIManager,
  Platform,
  Alert,
} from 'react-native';
import CardView from 'react-native-cardview';
//import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';

import NewsLetter from '../../common/NewsLetter/index';
import { connect } from 'react-redux';
import ExpandableItemComponent from '../homeScreen/expandableList';

class Investors extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View
          style={{
            // marginTop: 10,
            backgroundColor: '#FFFFFF',
            width: '100%',
            padding: 8,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{ height: 30, width: 30, marginLeft: 8 }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            {/* <Image
              source={require('../../assets/Images/menu2.jpg')}
              style={styles.menu}
              resizeMode={'stretch'
            /> */}
            <Icon name="bars" size={24} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Dashboard');
            }}>
            <Image
              style={{ width: 120, height: 30 }}
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071',
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Search');
              }}>
              {/* <Image
              source={require('../../assets/Images/search.png')}
              style={{width: 30, height: 25}}
              resizeMode={'center'}
            /> */}

              <Icon
                name="search"
                size={20}
                color={'gray'}
                style={{ marginRight: 14 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Whishlist');
              }}>
              <Icon
                name="heart-o"
                size={20}
                color={'gray'}
                style={{ marginEnd: 6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar />
        <Text>Investors</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(Investors);
