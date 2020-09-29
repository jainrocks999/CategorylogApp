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

//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CustomButton from '../../Config/Button/Button';
import CustomButton1 from '../../Config/Button/Button1';
import AddButton from '../../Config/Button/AddButton';
import Colors from '../../Config/colors/index';
import { connect } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
//import ExpandableItemComponent from './expandableList';

import NewsLetter from '../../common/NewsLetter/index';

//import ListView from '../../Config/List/expandableList';
var arr = [
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_DENIM.jpg?v=1588088383',
    },
    ItemName: 'Denim',
    details: 'details',
    price: '₹ 6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_DRESS_TIME.jpg?v=1588088401',
    },

    ItemName: 'Dress Time',
    details: 'details',
    price: '₹ 6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_T-SHIRTS.jpg?v=1588088420',
    },

    ItemName: 'T-shirts',
    details: 'details',
    price: '₹ 6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_KURTAS.jpg?v=1588088433',
    },

    ItemName: 'Kurtas',
    details: 'details',
    price: '₹ 6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_TOPS.jpg?v=1588088455',
    },
    ItemName: 'Tops',
    details: 'details',
    price: '₹ 6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_SHOES.jpg?v=1588088468',
    },
    ItemName: 'Shoes',
    details: 'details',
    price: '₹ 6.68',
  },
];

class FeaturedScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerIcon: () => (
      // <Image
      //     source={require('../../Assets/Drawer/share.png')}
      //     style={{ width: 20, height: 20, borderWidth: 1 }}
      // />
      <Icon name="home" style={{ fontSize: 30 }} />
    ),
  });

  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      listDataSource: CONTENT,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 20,
                marginTop: 40,
              }}>
              MY WHISHLIST
            </Text>
            <Text style={{ fontSize: 14 }}>
              {'Wishlist is not saved permanently yet. Please '}
              <Text
                onPress={() => {
                  this.props.navigation.navigate('SignIn');
                }}
                style={{ color: 'blue' }}>
                log in
              </Text>{' '}
              {'or '}
              <Text
                style={{ color: 'blue' }}
                onPress={() => {
                  this.props.navigation.navigate('RegisterOne');
                }}>
                Create Account
              </Text>{' '}
              to save it.
            </Text>

            <Text style={{ fontSize: 12, marginVertical: 30 }}>No items!</Text>
          </View>

          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>Email / Share Your Wishlist :</Text>
            <View
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={{
                  uri:
                    'https://s3.amazonaws.com/media.myshopapps.com/iwish/share/img/email_icon.jpg',
                }}
              />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={{
                  uri:
                    'https://s3.amazonaws.com/media.myshopapps.com/iwish/share/img/fb_icon.jpg',
                }}
              />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Image
                style={{
                  height: 35,
                  width: 35,
                }}
                source={{
                  uri:
                    'https://s3.amazonaws.com/media.myshopapps.com/iwish/share/img/twt_icon.jpg',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'SHOP',
    subcategory: [
      { id: 1, val: 'WOMAN' },
      { id: 2, val: 'MAN' },
      { id: 3, val: 'KIDS' },
      { id: 4, val: 'SHOES & BAGS' },
      { id: 5, val: 'HOME' },
      { id: 6, val: 'STUDIOWEST' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'SITES AND STORIES',
    subcategory: [
      { id: 1, val: 'ABOUT US' },
      { id: 2, val: 'CONTACT US' },
      { id: 3, val: 'STORE LOCATOR' },
      { id: 4, val: 'INVESTORS' },
      { id: 5, val: 'MEDIA CENTERS' },
      { id: 6, val: 'CLUBWEST' },
    ],
  },
];

/* ///////////////////////////////////////////////////////////////////////////////////////////// */

var Brands = [
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Accessories_c8082a4f-1cf8-4ad0-b2f5-374304b0e232_110x.jpg?v=1578658031',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Ascot_be260eb8-6f93-4010-bfbf-d19d0875a40c_110x.jpg?v=1578658053',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Baby-hop2_116fd786-45ef-4f64-9bd8-e6d0036ba393_110x.jpg?v=1578658064',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Baby-hop_c30f368d-e30b-4a1f-ba54-8c3f8c30ad4f_110x.jpg?v=1578658073',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/bombay-paisley_165425d7-1d43-4661-b4ff-46dd5d6dd392_110x.jpg?v=1578658088',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/diza_8c43e422-cf3c-4a8f-8fd2-9b954c2d030e_110x.jpg?v=1578658247',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/ETA_700964ce-c0d5-4728-949e-289ab4448c03_110x.jpg?v=1578658257',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/gia-curves_108da3b4-5462-431e-8bc7-28cf1c6b0024_110x.jpg?v=1578658268',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Home_5b881d8e-5b64-4910-9047-2c1a3d0010db_110x.jpg?v=1578658282',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Luna_c90ed277-80a7-474e-8c55-21cac545b101_110x.jpg?v=1578658305',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Nuon_f907d4c1-b3f7-45dc-91e0-896348ab2b6f_110x.jpg?v=1578658316',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/nuon-woman_d1f0f77e-2b11-4a35-b579-a73517e87044_110x.jpg?v=1578658327',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Saxy-soda_b8772fc6-fd19-4396-907a-afecc4d895b4_110x.jpg?v=1578658337',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Sleepwear_7f48eaf6-f2f1-4791-8363-80af5e665484_110x.jpg?v=1578658383',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Soleplay_cd5b2cc2-44a2-41f2-a55a-9e5a27056882_110x.jpg?v=1578658396',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Studio-fit_b0336d03-1c5f-4b94-8144-c2c6eba3039a_110x.jpg?v=1578658411',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Studio-west_c42976cc-838c-4007-b015-67af5d3f2776_110x.jpg?v=1578658464',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/utsa_fa095147-488f-45ca-aa5f-053a47a74496_110x.jpg?v=1578658477',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Utsa-kids_13adad1f-ecfa-4b0b-aaa5-678a82bba9ad_110x.jpg?v=1578658488',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Vark_b934aac5-fc25-41d7-9b25-2a2c8f2a592a_110x.jpg?v=1578658503',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Wardbrode_4513fecc-64f1-42c0-96e2-1709e7a2e984_110x.jpg?v=1578658520',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/zuba_7ec499dd-4b6d-4e47-a011-76d2ff090899_110x.jpg?v=1578658674',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/yellow_59140453-0304-409c-953d-0243518150fa_110x.jpg?v=1578658665',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Girls_c5af6b6f-c791-470d-9850-2801e2cb328b_110x.jpg?v=1578658637',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Boy_1ea7606c-fecc-47a6-9dd8-d6485a43303c_110x.jpg?v=1578658622',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Wunder-love_ef73b683-27ef-4299-955a-f3d4431e9ddd_110x.jpg?v=1578658606',
    },
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Wardbrode_4513fecc-64f1-42c0-96e2-1709e7a2e984_110x.jpg?v=1578658520',
    },
  },
];
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(FeaturedScreen);
