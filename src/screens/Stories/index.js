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
import { connect } from 'react-redux';
//import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';

//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CustomButton from '../../Config/Button/Button';
import CustomButton1 from '../../Config/Button/Button1';
import AddButton from '../../Config/Button/AddButton';
import Colors from '../../Config/colors/index';

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
class StoriesScreen extends Component {
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
      images: [
        {
          uri:
            'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/C1_850x1305_2a34dfac-9642-4792-9ddf-48ebc47c62a3.jpg?v=1596215466',
        },
        {
          uri:
            'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/C2_850x1305_e4153b0a-ef7b-4b92-9fc2-ebe0638d86a8.jpg?v=1596215642',
        },
        {
          uri:
            'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/C3_850x1305_b9f6f4a2-fdf6-488f-946f-94a58b61e4e0.jpg?v=1596215581',
        },
        {
          uri:
            'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/WS_M_copy_ed287267-68c4-48fb-ba43-a06da348d97b.jpg?v=1593709948',
        },
      ],
      imagess: [
        require('../../Assets/slider/man.jpg'), // Local image
        require('../../Assets/slider/woman.jpg'), // Local image
        require('../../Assets/slider/man1.jpg'), // Local image
        require('../../Assets/slider/woman1.jpg'), // Local image
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
      ],
      sliderImages: [
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/M.B1G1_850x1075_d0eccc9b-d733-41e0-a0d4-47d3127622a6.jpg?v=1598115718',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/M.M5_850x1075_7cdcf160-6bd7-423c-8bd4-1cce626a0faa.jpg?v=1598253941',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/M5_850x1075_New_7d84c40b-e19d-4078-94d5-1c14b7c7b7f4.jpg?v=1597983132',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/M3_850x1075_be2c4dd5-fa4c-4b5a-8453-5823c5444621.jpg?v=1597983208',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Value_Hero_M1_850x1075_ccc63235-3421-45e7-8c20-c6f0c29c875e.jpg?v=1597983276',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/hero_M-100.jpg?v=1596798979',
      ],
      sliderImages1: [
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/V2_850x1305_d839e7ca-59d1-482f-b19f-e03eb40991de_1024x1024_crop_center.jpg?v=1597291388',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/V1_850x1305_ab7e51f6-7ba8-42df-94d8-33dd0fcdc884_1024x1024_crop_center.jpg?v=1597291546',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/V6_850x1305_Womens_13dd47c6-d672-4317-b309-082f95b66fa1_1024x1024_crop_center.jpg?v=1597291733',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/V3_850x1305_051d6c1a-7899-4780-b100-0e0f556cda4d_1024x1024_crop_center.jpg?v=1597291479',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/V4_850x1305_1b8d533f-611b-4e85-8f40-373aea00dda4_1024x1024_crop_center.jpg?v=1597291621',
      ],
    };
  }

  updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };

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
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 10,
              marginVertical: 5,
            }}>
            GET BACK IN YOUR JEANS
          </Text>
          <FlatList
            data={arr}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ margin: 1, width: '49%', marginBottom: 10 }}
                onPress={() => {
                  // Alert.alert('touched');
                  this.props.navigation.navigate('ProductDetail');
                }}>
                <View
                  style={{
                    height: 300,
                    borderColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: '100%',
                      width: '99%',
                    }}
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#000',
                    marginVertical: 5,
                  }}>
                  {item.ItemName}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#000', fontWeight: 'bold' }}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />
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

export default connect(mapStateToProps)(StoriesScreen);
