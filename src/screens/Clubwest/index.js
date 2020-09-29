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
import CustomButton from '../../Config/Button/Button';
import StatusBar from '../../Config/StatusBar/index';
import colors from '../../Config/colors';
import { connect } from 'react-redux';
import NewsLetter from '../../common/NewsLetter/index';
class Clubwest extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFF', flex: 1, paddingHorizontal: 10 }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{ height: 40, width: 30 }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            {/* <Image
              source={require('../../assets/Images/menu2.jpg')}
              style={styles.menu}
              resizeMode={'stretch'}
            /> */}
            <Icon name="bars" size={30} />
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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Search');
              }}>
              {/* <Image
              source={require('../../assets/Images/search.png')}
              style={{width: 30, height: 25}}
              resizeMode={'center'}
            /> */}

              <Icon name="search" size={25} style={{ marginRight: 20 }} />
            </TouchableOpacity>
            <Icon name="heart-o" size={25} />
          </View>
        </View>
        <StatusBar />
        <ScrollView>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.lightGrey,
              padding: 20,
              margin: 10,
              marginTop: 20,
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              CLUBWEST - VIEW POINTS
            </Text>
            <TextInput
              style={{ borderBottomWidth: 0.5, paddingHorizontal: 10 }}
              placeholder={'Mobile No.'}
            />
            <CustomButton
              title={'END OTP'}
              onPress={() => this.props.navigation.navigate('Drawer')}
              bgcolor={'black'}
            />
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>OR</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            Register for Westside.com
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            For Clubwest related queries,{'\n'} please call (022)-67009183
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            CLUBWEST IS A TWO-TIER PROGRAM,{'\n'}
            WHICH CONSISTS OF CLUBWEST CLASSIC {'&'}
            {'\n'}
            CLUBWEST GOLD
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 20,
              marginTop: 20,
            }}>
            <View>
              <Image
                style={{ height: 100, width: '100%', borderRadius: 5 }}
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/clubwest_classic.jpg?8117',
                }}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                CLUBWEST CLASSIC
              </Text>
            </View>
            <View>
              <Image
                style={{ height: 100, width: '100%', borderRadius: 5 }}
                resizeMode={'contain'}
                source={{
                  uri:
                    'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/clubwest_gold.jpg?8117',
                }}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                CLUBWEST GOLD
              </Text>

              <Text
                style={{
                  marginTop: 20,
                  fontSize: 14,
                }}>
                Enroll at ₹ 199 on purchase of{'\n'} ₹ 5000 in a single
                transaction
              </Text>
            </View>
          </View>
          <View style={{ borderWidth: 1, marginVertical: 20 }}></View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            To get a Clubwest Membership, contact the Clubwest desk at the
            nearest Westside store
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            <Text style={{ textDecorationLine: 'underline' }}>Click here</Text>{' '}
            for detailed Terms and Conditions of Clubwest Program{' '}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Clubwest Membership benefits
          </Text>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              Earn every time you Shop
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              Exclusive Birthday Discount
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              No questions asked exchanges
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              Free home delivery for alterations on purchases over Rs.2500
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              Clubwest cards are accepted across All Landmark stores.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              <Text
                style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>
                {'Click here '}
              </Text>
              for detailed Clubwest membership benefits.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 10, width: 10 }}
              source={require('../../Assets/image/dot.png')}
              resizeMode={'center'}
            />
            <Text
              style={{
                marginLeft: 5,
                textAlignVertical: 'center',
                fontSize: 14,
              }}>
              Read More:{' '}
              <Text
                style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>
                {' Welcome Kit'}
              </Text>
            </Text>
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

export default connect(mapStateToProps)(Clubwest);
