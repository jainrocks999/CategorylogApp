import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import StatusBar from '../../Config/StatusBar';
import styles from './style';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
//import storage from '../../../config/storage';
//import qs from 'qs';
//import Axios from 'axios';


class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      token: '',

    };
    this.loaddata();
  }

  loaddata = async () => {
    // this.props.dispatch({type:'User_Home_Page_Request',url:'shopify/settings'})
    setTimeout(() => this.props.navigation.navigate('AppStack'), 2000);
  };

  render() {
    return (
      <View style={styles.Main}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071' }}
          resizeMode={'contain'}
        />
        <StatusBar />
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps)(SplashScreen)
