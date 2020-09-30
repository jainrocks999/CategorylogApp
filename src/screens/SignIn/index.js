import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Config/colors/index';
import CustomButton from '../../Config/Button/Button';
import CustomButton1 from '../../Config/Button/Button1';
import CustomTextInput from '../../Config/TextInput/index';
import styles from './style';
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
        style={styles.Main}>
        <View
          style={styles.second}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="bars" size={24} color={'gray'} />
          </TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071',
            }}
            resizeMode={'contain'}
          />
          <View style={styles.view}>
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
          <View style={styles.viewone}>
            <Text style={styles.textheading}>MY ACCOUNT</Text>
            <Text style={styles.textheadingsecond}>
              I am already registered on westside.com
            </Text>
            <Text
              style={styles.text}>
              Log in with your registered e-mail address and password
            </Text>
            <CustomTextInput placeholder={'Email'} />
            <CustomTextInput placeholder={'Password'} />
            <Text
              style={styles.textdecording}>
              Have you forgotten your password ?
            </Text>
            <CustomButton
              title={'LOGIN'}
              onPress={() => this.props.navigation.navigate('Drawer')}
              bgcolor={'black'}
            />

            <Text style={styles.textset}>
              I want a westside.com user account
            </Text>
            <Text style={styles.textsetone}>
              Sign up to access the latest in fashion
            </Text>

            <CustomButton1
              onPress={() => {
                this.props.navigation.navigate('RegisterOne');
              }}
              styles={styles.btnset}
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
