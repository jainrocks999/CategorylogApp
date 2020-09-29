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
import colors from '../../Config/colors';

class MediaCenter extends React.Component {
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
          <View style={{ paddingHorizontal: 10 }}>
            <Text>
              Home {' > '}
              Media Center
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
              MEDIA CENTER
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
              CLICK ON THE LINKS BELOW FOR A DETAILED LOOK.
            </Text>
          </View>
          <FlatList
            data={arr}
            renderItem={({ item }) => (
              <View
                style={{
                  marginHorizontal: 20,
                  width: '80%',
                  margin: 7,
                  flexDirection: 'row',
                }}>
                <Icon name="newspaper-o" size={40} />
                <View style={{ marginLeft: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '200',
                      color: 'black',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      fontWeight: '700',
                      marginVertical: 10,
                    }}>
                    Download PDF
                  </Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    borderWidth: 0.2,
                    borderColor: colors.lightGrey,
                  }}></View>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>
    );
  }
}

var arr = [
  {
    title: 'Westside store launch Pondicherry Press release',
  },
  { title: 'Westside store launch Pondicherry Press release' },
  { title: 'Westside store launch Anand Press release' },
  { title: 'Westside store launch Gwalior Press release' },
  { title: 'Westside store launch Ujjain Press release' },
  { title: 'Westside store launch Bengaluru Press release' },
  { title: 'Westside store launch Shivamogga Press release' },
  { title: 'Westside store launch Aizwal Press release' },
  { title: 'Westside store launch Baramati Press release' },
  { title: 'Westside store launch Palakkad Press release' },
  { title: 'Westside store launch Pune Press release' },
  { title: 'Chennai Press release' },
  { title: 'Press Release - Borivali' },
  { title: 'Westside store launch Press Release - Varthur Bengaluru' },
  { title: 'Final - Press release - YF' },
  { title: 'Reopens PR - Vizag' },
  { title: 'Revised PR - Jodhpur' },
  { title: 'Agra Store Launch Press Release' },
  { title: 'Bangalore Store Launch Press Release' },
  { title: 'Chennai Store Launch Press Release' },
  { title: 'Gurgaon Store Launch Press Release' },
  { title: 'Hyderabad Store Launch Press Release' },
  { title: 'Kolhapur Store Launch Press Release' },
  { title: 'Kurla Store Launch Press Release' },
  { title: 'Muzaffarpur Store Launch Press Release' },
  { title: 'Navi Mumbai Store Launch Press Release' },
  { title: 'Ranchi Store Launch Press Release' },
  { title: 'Sagar Store Launch Press Release' },
  { title: 'Silchar Store Launch Press Release' },
  { title: 'Westside Bhatinda Store Launch' },
  { title: 'Westside Chennai Store Launch' },
  { title: 'Westside opens its doors to fashion enthusiasts in Jamshedpur' },
  { title: 'Westside store launch Belgaum Press release' },
  { title: 'Westside store launch Jalpaiguri Press release' },
  { title: 'Westside store launch Kolkata Press release' },
  { title: 'Westside store launch Maninagar Press release' },
  { title: 'Westside store launch Solan Press release' },
  { title: 'Westside store launch Yamuna Nagar Press release' },
];
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(MediaCenter);
