import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import StatusBar from '../../Config/StatusBar';
import styles from './style';
import { connect } from 'react-redux';
import Axios from 'axios';
//import connection from '../../../Redux/Constants';
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
    console.log('hello hello ')
    setTimeout(() => this.props.navigation.navigate('AppStack'), 2000);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', }}>
        <Image
          style={{ width: 120, height: 120 }}
          source={{ uri: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071' }}
          resizeMode={'contain'}
        />
        <StatusBar />
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  console.log('Kapil jain' + JSON.stringify(state))
  //console.log('Kapil jain'+JSON.stringify(Token))
  return {
    isFetching: state.isFetching,
    //Token:state.Token,
  }
}

export default connect(mapStateToProps)(SplashScreen)
