import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Config/colors/index';
import CustomButton from '../../Config/Button/Button';
import CustomButton1 from '../../Config/Button/Button1';
import CustomTextInput from '../../Config/TextInput/index';
import colors from '../../Config/colors/index';
import StatusBar from '../../Config/StatusBar/index';
import NewsLetter from '../../common/NewsLetter/index';
import { ScrollView } from 'react-native-gesture-handler';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'SIGN IN',
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
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071',
            }}
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
        <ScrollView>
          <View style={{ paddingLeft: 10, paddingRight: 40 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>MY ACCOUNT</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 40 }}>
              I am already registered on westside.com
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 20,
              }}>
              Log in with your registered e-mail address and password
            </Text>
            <CustomTextInput placeholder={'Email'} />
            <CustomTextInput placeholder={'Password'} />
            <Text
              style={{
                fontSize: 12,
                marginTop: 15,
                marginBottom: 5,
                textDecorationLine: 'underline',
              }}>
              Have you forgotten your password ?
            </Text>
            <CustomButton
              title={'LOGIN'}
              onPress={() => this.props.navigation.navigate('Drawer')}
              bgcolor={'black'}
            />

            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 40 }}>
              I want a westside.com user account
            </Text>
            <Text style={{ fontSize: 12, marginTop: 20, marginLeft: 10 }}>
              Sign up to access the latest in fashion
            </Text>

            <CustomButton1
              onPress={() => {
                this.props.navigation.navigate('RegisterOne');
              }}
              styles={{
                marginTop: 10,
                width: '99%',
                height: 35,
                justifyContent: 'center',
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}
              textstyles={{
                color: '#fff',
                fontSize: 13,
                alignSelf: 'center',
              }}
              title={'REGISTER NOW'}
            />
          </View>
        </ScrollView>
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

export default connect(mapStateToProps)(LoginScreen);
