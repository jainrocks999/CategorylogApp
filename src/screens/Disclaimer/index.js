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

import ExpandableItemComponent from '../homeScreen/expandableList';
import { connect } from 'react-redux';
class Disclaimer extends React.Component {
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
        <ScrollView>
          <View style={{ paddingHorizontal: 10, margin: 8, marginbottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
              DISCLAIMER
            </Text>
            <Text style={{ fontSize: 20, marginTop: 15 }}>Dear Job Seeker,</Text>

            <Text style={{ fontSize: 12, marginTop: 20, lineHeight: 20 }}>
              As a socially aware and responsible organisation, we would like to
              spread a word of caution amongst all job seekers.
            </Text>

            <Text style={{ marginTop: 20, fontSize: 12, lineHeight: 20 }}>
              Our attention has been drawn to some fraudulent individuals /
              agencies / job portals approaching job seekers through emails/ sms
              / links on WhatsApp etc. and offering job opportunities in various
              Tata companies and demanding money by way of a refundable security
              deposit or other fees. Offers are also being made on fake
              letterheads using the TATA Logo and fraudulent signatures of HR
              department personnel of various Tata companies. Please note that
              Westside follows a merit-based recruitment process and does not
              demand / accept any money whether by way of security deposit or
              otherwise from applicants for jobs.
            </Text>

            <Text style={{ marginTop: 20, fontSize: 12, lineHeight: 20 }}>
              If anyone receives an interview call letter stating that it is
              from or for a Tata company, he / she should immediately check the
              authenticity of the same and refrain from submitting any original
              documents or making any form of payment either in cash or through
              bank remittances. Anyone dealing with such fake interview calls
              would be doing so at his / her own risk and Westside will not be
              held responsible for any loss or damage suffered by such persons,
              directly or indirectly.
            </Text>

            <View style={{ lineHeight: 20 }}>
              <Text style={{ marginTop: 20, fontSize: 12 }}>
                In case of any queries please contact us at
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 5,
                  textDecorationLine: 'underline',
                  fontSize: 12,
                  lineHeight: 20,
                }}>
                Human.resources@trent-tata.com
              </Text>
            </View>
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

export default connect(mapStateToProps)(Disclaimer);
