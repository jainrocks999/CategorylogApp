import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Config/colors/index';
import CustomButton1 from '../../Config/Button/Button1_small';
import CustomTextInput from '../../Config/TextInput/index';
import colors from '../../Config/colors/index';
import StatusBar from '../../Config/StatusBar/index';
import NewsLetter from '../../common/NewsLetter/index';
import { connect } from 'react-redux';
class Register extends Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: Colors.darkblue,
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: '#FFFFFF',
        }}>
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
          <Image
            style={{ width: 120, height: 30 }}
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071' }}
            resizeMode={'contain'}
          />
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

              <Icon name="search" size={20} color={'gray'} style={{ marginRight: 14, }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Whishlist');
              }}>
              <Icon name="heart-o" size={20} color={'gray'} style={{ marginEnd: 6 }} />
            </TouchableOpacity>
          </View>
        </View>

        <StatusBar />
        <ScrollView>
          <View style={{ paddingLeft: 20, paddingRight: 40 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 30,
              }}>
              CREATE AN ACCOUNT
            </Text>

            <CustomTextInput
              placeholder={'MOBILE (OTP will be send for verification)'}
            />
            <CustomTextInput placeholder={'Enter OTP'} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
                marginTop: 20,
              }}>
              <CustomButton1
                onPress={() => {
                  this.props.navigation.navigate('RegisterTwo');
                }}
                viewStyles={{ width: '49%' }}
                styles={{
                  marginTop: 10,
                  height: 35,
                  backgroundColor: '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
                textstyles={{
                  color: '#fff',
                  fontSize: 12,
                  alignSelf: 'center',
                }}
                title={'VERIFY OTP'}
              />

              <CustomButton1
                viewStyles={{ width: '49%' }}
                styles={{
                  marginTop: 10,
                  height: 35,
                  backgroundColor: '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
                textstyles={{
                  color: '#fff',
                  fontSize: 12,
                  alignSelf: 'center',
                }}
                title={'RESEND OTP'}
              />
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(Register);