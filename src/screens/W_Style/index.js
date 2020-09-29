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
import Icon1 from 'react-native-vector-icons/Ionicons';
import StatusBar from '../../Config/StatusBar/index';
import { connect } from 'react-redux';
import NewsLetter from '../../common/NewsLetter/index';

import CustomHeader from '../../common/Header/index';

class W_style extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>
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
              style={{ flexDirection: 'row' }}
              onPress={() => {
                this.props.navigation.navigate('Whishlist');
              }}>
              <Icon
                name="heart-o"
                size={20}
                color={'gray'}
                style={{ marginEnd: 6 }}
              />
              <Text>0</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar />
        <ScrollView>
          <View style={{ backgroundColor: '#FAFAFA' }}>
            <Text style={{ padding: 10 }}>{'Home > W-STYLE'}</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
              <Image
                style={{ width: 25, height: 25, marginRight: 20 }}
                source={require('../../Assets/image/filter.png')}
              />
            </View>
            <FlatList
              data={arr}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    margin: 10,
                    elevation: 10,
                    height: 350,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('W_Style_Details');
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 230,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: 'black',
                    }}>
                    <Image
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                      }}
                      source={item.image}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 20,
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: 'black',
                      marginVertical: 5,
                    }}>
                    {item.Headine}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 12,
                      fontWeight: '200',
                      color: 'black',
                      marginVertical: 5,
                    }}>
                    {item.SubHeading}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'black',
                        marginVertical: 5,
                        marginRight: 5,
                      }}>
                      Read More
                    </Text>
                    <Icon1 name="arrow-forward" size={15} />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const arr = [
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/mens_grey_jeans_by_westside_nuon.jpg?v=1598711716',
    },
    Headine: 'Get Back',
    SubHeading: 'In Your Jeans',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/yellow_tunics_for_men_by_eta.jpg?v=1598019783',
    },
    Headine: 'Handbook to Festive Styling',
    SubHeading: 'Menswear',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/shorts_and_tees_for_men.jpg?v=1594219801',
    },
    Headine: 'Casual Rotation',
    SubHeading: 'Guide To Menswear',
  },
];
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(W_style);
