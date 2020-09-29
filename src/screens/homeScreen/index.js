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
import Axios from 'axios';

import CardView from 'react-native-cardview';
//import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';

//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CustomButton from '../../Config/Button/Button';
import CustomButton1 from '../../Config/Button/Button1';
import AddButton from '../../Config/Button/AddButton';
import Colors from '../../Config/colors/index';

import { SliderBox } from 'react-native-image-slider-box';
import ExpandableItemComponent from './expandableList';
import { connect } from 'react-redux';
import NewsLetter from '../../common/NewsLetter/index';
import Shopify from 'react-native-shopify';
import Loader from '../../Util/loading/index';
import storage from '../../Config/storage';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
//import ListView from '../../Config/List/expandableList';

let obj = [];
let storyArray = [];
let slider1Array = [];
let slider1FinalArray = [];
let slider2Array = [];
let slider2FinalArray = [];
let homepage_custom_banner = [];
let homepage_custom_banner_final = [];
let homeBrandsArray = [];
let homeBrandsFinalArray = [];
var imageURL = '';
let imageInfo = '';
let imagePath = '';

class HomePage extends Component {
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
      spinner: true,
      listDataSource: CONTENT,
      Blockdata: '',
      visible: false,
    };
    this.loaddata();

  }

  loaddata = async () => {
    //let imagePath ='';
    await Axios.get(
      'https://shopifyapp.westside.com/api/shopify/settings',
    ).then((response) => {
      if (response.data.success == true) {
        this.setState({
          spinner: false,
        });
        imagePath = response.data.image_path;

        console.log('Base URL : ' + imagePath);

        let obj1 = response.data.data;
        let obj2 = JSON.parse(obj1).asset;
        let obj3 = obj2.value;
        let obj4 = JSON.parse(obj3).current;
        console.log('data : ======: ' + JSON.stringify(obj4));

        let obj5 = obj4.sections['1573224979622'];

        // let mainBlockOrder = obj5.block_order;
        // let blocksObj = obj5.blocks;
        // let storieArray = [];
        // for (var i = 0; i < mainBlockOrder.length; i++) {
        //   let obj = blocksObj.sections[mainBlockOrder[i]];
        //   storieArray.push(obj);
        //   console.log('sasfsfsfs' + JSON.stringify(storieArray));
        // }

        let obj5Array = Object.entries(obj5.blocks);

        console.log('obj5Array', obj5Array);

        for (let i = 0; i < obj5.block_order.length; i++) {
          for (let j = 0; j < obj5Array.length; j++) {
            const blockOrder = obj5.block_order[i];
            const block = obj5Array[j];
            if (blockOrder == block[0]) {
              storyArray.push(block[1].settings);
            }
          }
        }


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let slider1obj1 = obj4.sections['1540952363851'];
        let slider1obj2 = slider1obj1.blocks['1540952363851-0'].settings;
        slider1Array.push(slider1obj2);
        let slider1obj3 = slider1obj1.blocks['1583728674920'].settings;
        slider1Array.push(slider1obj3);
        let slider1obj4 = slider1obj1.blocks['1591299353031'].settings;
        slider1Array.push(slider1obj4);
        let slider1obj5 = slider1obj1.blocks['1590139796439'].settings;
        slider1Array.push(slider1obj5);
        let slider1obj6 = slider1obj1.blocks['1596211879671'].settings;
        slider1Array.push(slider1obj6);
        let slider1obj7 = slider1obj1.blocks['1597679413621'].settings;
        slider1Array.push(slider1obj7);

        for (let userObject of slider1Array) {
          console.log('image URL : ' + userObject);
          let imgurl = userObject.image_slide_mb.slice(22);
          imageURL = imagePath + imgurl;
          // userObject = imageURL;
          imageInfo = imageURL;
          console.log('slider ka    kya kare : ' + imageInfo);
          slider1FinalArray.push(imageInfo);
        }
        console.log('sliderrrrrr-------------' + JSON.stringify(slider1Array));
        console.log(
          'slider1FinalArrayyyyyyyyyyyyyyy-------------' +
          JSON.stringify(slider1FinalArray),
        );

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let slider2obj1 = obj4.sections['1598940171935'];
        let slider2obj2 = slider2obj1.blocks['1598940171935-0'].settings;
        slider2Array.push(slider2obj2);
        let slider2obj3 = slider2obj1.blocks['1598940299007'].settings;
        slider2Array.push(slider2obj3);
        let slider2obj4 = slider2obj1.blocks['1600354784588'].settings;
        slider2Array.push(slider2obj4);
        let slider2obj5 = slider2obj1.blocks['1600354793363'].settings;
        slider2Array.push(slider2obj5);

        for (let userObject of slider2Array) {
          console.log('image URL-------22222222222222222222 : ' + userObject);
          let imgurl = userObject.image_slide_mb.slice(22);
          imageURL = imagePath + imgurl;
          imageInfo = imageURL;
          console.log('slider ka    kya kare : ' + imageInfo);
          slider2FinalArray.push(imageInfo);
        }
        console.log(
          'sliderrrrrr-------22222222222222222222-------------' +
          JSON.stringify(slider2Array),
        );
        console.log(
          'slider -------22222222222222222222-------------' +
          JSON.stringify(slider2FinalArray),
        );

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let homepage_custom_banner1 = obj4.sections['1573130753130'].settings;
        homepage_custom_banner.push(homepage_custom_banner1);
        let homepage_custom_banner2 = obj4.sections['1573131159670'].settings;
        homepage_custom_banner.push(homepage_custom_banner2);
        let homepage_custom_banner3 = obj4.sections['1573131307783'].settings;
        homepage_custom_banner.push(homepage_custom_banner3);
        let homepage_custom_banner4 = obj4.sections['1573132408807'].settings;
        homepage_custom_banner.push(homepage_custom_banner4);
        let homepage_custom_banner5 = obj4.sections['1573132466520'].settings;
        homepage_custom_banner.push(homepage_custom_banner5);
        let homepage_custom_banner6 = obj4.sections['1593709880920'].settings;
        homepage_custom_banner.push(homepage_custom_banner6);

        // let homepage_custom_banner6 =
        //   obj4.sections['1573132508088'].settings.image_mob;
        // homepage_custom_banner.push(homepage_custom_banner6);

        for (let userObject of homepage_custom_banner) {
          console.log('homepage_custom_banner --- shopify : ' + userObject);
          let imgurl = userObject.image_mob.slice(22);
          imageURL = imagePath + imgurl;
          imageInfo = imageURL;
          console.log('slider ka    kya kare : ' + imageInfo);
          homepage_custom_banner_final.push(imageInfo);
        }
        console.log(
          'homepage_custom_banner-------------' +
          JSON.stringify(homepage_custom_banner),
        );
        console.log(
          'homepage_custom_banner_final-------------' +
          JSON.stringify(homepage_custom_banner_final),
        );

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let homeBrands = obj4.sections['home-brands'];
        let homeBrands1 = homeBrands.blocks['1573191306630'].settings;
        homeBrandsArray.push(homeBrands1);

        let homeBrands2 = homeBrands.blocks['1573204484463'].settings;
        homeBrandsArray.push(homeBrands2);

        let homeBrands3 = homeBrands.blocks['1573204504897'].settings;
        homeBrandsArray.push(homeBrands3);

        let homeBrands4 = homeBrands.blocks['1574166775338'].settings;
        homeBrandsArray.push(homeBrands4);

        let homeBrands5 = homeBrands.blocks['1573204514577'].settings;
        homeBrandsArray.push(homeBrands5);

        let homeBrands6 = homeBrands.blocks['1573204522614'].settings;
        homeBrandsArray.push(homeBrands6);

        let homeBrands7 = homeBrands.blocks['1573204531382'].settings;
        homeBrandsArray.push(homeBrands7);

        let homeBrands8 = homeBrands.blocks['1573204551251'].settings;
        homeBrandsArray.push(homeBrands8);

        let homeBrands9 = homeBrands.blocks['1573204560907'].settings;
        homeBrandsArray.push(homeBrands9);

        let homeBrands10 = homeBrands.blocks['1573204799566'].settings;
        homeBrandsArray.push(homeBrands10);

        let homeBrands11 = homeBrands.blocks['1573204858419'].settings;
        homeBrandsArray.push(homeBrands11);

        let homeBrands12 = homeBrands.blocks['1573204869778'].settings;
        homeBrandsArray.push(homeBrands12);

        let homeBrands13 = homeBrands.blocks['1573204879482'].settings;
        homeBrandsArray.push(homeBrands13);

        let homeBrands14 = homeBrands.blocks['1573204891985'].settings;
        homeBrandsArray.push(homeBrands14);

        let homeBrands15 = homeBrands.blocks['1573204902915'].settings;
        homeBrandsArray.push(homeBrands15);

        let homeBrands16 = homeBrands.blocks['1573204914235'].settings;
        homeBrandsArray.push(homeBrands16);

        let homeBrands17 = homeBrands.blocks['1573204924713'].settings;
        homeBrandsArray.push(homeBrands17);

        let homeBrands18 = homeBrands.blocks['1573204943276'].settings;
        homeBrandsArray.push(homeBrands18);

        let homeBrands19 = homeBrands.blocks['1573204956635'].settings;
        homeBrandsArray.push(homeBrands19);

        let homeBrands20 = homeBrands.blocks['1573204969241'].settings;
        homeBrandsArray.push(homeBrands20);

        let homeBrands21 = homeBrands.blocks['1573204979925'].settings;
        homeBrandsArray.push(homeBrands21);

        let homeBrands22 = homeBrands.blocks['1573204992570'].settings;
        homeBrandsArray.push(homeBrands22);

        let homeBrands23 = homeBrands.blocks['1573205003827'].settings;
        homeBrandsArray.push(homeBrands23);

        let homeBrands24 = homeBrands.blocks['1573205017793'].settings;
        homeBrandsArray.push(homeBrands24);

        let homeBrands25 = homeBrands.blocks['1573205029073'].settings;
        homeBrandsArray.push(homeBrands25);

        let homeBrands26 = homeBrands.blocks['1573205045014'].settings;
        homeBrandsArray.push(homeBrands26);

        let homeBrands27 = homeBrands.blocks['1573205056943'].settings;
        homeBrandsArray.push(homeBrands27);

        let homeBrands28 = homeBrands.blocks['1573205067093'].settings;
        homeBrandsArray.push(homeBrands28);

        for (let userObject of homeBrandsArray) {
          console.log('image URL : ' + userObject.image);
          let imgurl = userObject.image.slice(22);
          imageURL = imagePath + imgurl;
          userObject.image = imageURL;
          console.log('kya kare : ' + userObject.image);
        }

        console.log('home brands : ' + JSON.stringify(homeBrandsArray));

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.setState({});
      } else {
      }
    });
  };
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
  // When slider click -- By Rishabh
  onSlider1Click = (index) => {
    let imageItem = '';
    slider1FinalArray.map((item, i) => {
      if (index == i) {
        imageItem = item;
      }
    });
    if (imageItem != '') {
      slider1Array.map((item) => {
        let imgurl = item.image_slide_mb.slice(22);
        let imageURL = imagePath + imgurl;
        if (imageURL == imageItem) {
          this.props.navigation.navigate('Product', { productInfo: item });
        }
      });
    }
  };

  onSlider2Click = (index) => {
    let imageItem = '';
    slider2FinalArray.map((item, i) => {
      if (index == i) {
        imageItem = item;
      }
    });
    if (imageItem != '') {
      slider2Array.map((item) => {
        let imgurl = item.image_slide_mb.slice(22);
        let imageURL = imagePath + imgurl;
        if (imageURL == imageItem) {
          console.log('slider2Array', slider2Array);
          this.props.navigation.navigate('Product', { productInfo: item });
        }
      });
    }
  };

  onHomePageClick = (index) => {
    let imageItem = '';
    homepage_custom_banner_final.map((item, i) => {
      if (index == i) {
        imageItem = item;
      }
    });
    if (imageItem != '') {
      homepage_custom_banner.map((item) => {
        let imgurl = item.image_mob.slice(22);
        let imageURL = imagePath + imgurl;
        if (imageURL == imageItem) {
          console.log('slider2Array', slider2Array);
          this.props.navigation.navigate('Product', { productInfo: item });
        }
      });
    }
  };

  searchIndex() {
    if (this.state.visible == false) {
      console.log('rohit12' + this.state.visible);
      this.setState({
        visible: true,
        //itemValue: item.Id,
      });
    } else {
      this.setState({
        visible: false,
        //itemValue: item.Id,
      });
    }
  }

  rendersearch = () => {
    if (this.state.visible == true) {
      return (
        <View style={{ padding: 4, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              borderWidth: 1,
              width: '96%',
              // height: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              borderRadius: 1,
              marginTop: 4,
            }}>
            <TextInput
              placeholder="Search"
              //labelFontSize={14}
              value={this.state.search}
              style={{
                color: '#000',
                fontSize: 14,
                height: 40,
                width: '98%',
                paddingHorizontal: 10,
              }}
              //keyboardType="email-address"
              onChangeText={Email => {
                this.setState({ Email });
              }}
            />
          </View>

        </View>

      )
    } else {

    }
  }

  render() {
    const { isFetching } = this.props;

    for (let userObject of storyArray) {
      console.log('image URL : ' + userObject.image);
      let imgurl = userObject.image.slice(22);
      imageURL = imagePath + imgurl;
      userObject.image = imageURL;
      console.log('kya kare : ' + userObject.image);
    }

    console.log('blockData - - ' + JSON.stringify(storyArray));

    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
        />
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
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
                  this.searchIndex();
                }}>
                <Icon
                  name="search"
                  size={20}
                  color={'gray'}
                  style={{ marginRight: 14 }}
                />
              </TouchableOpacity>

              {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Whishlist');
              }}>
              <Icon
                name="heart-o"
                size={20}
                color={'gray'}
                style={{marginEnd: 6}}
              />
            </TouchableOpacity> */}
            </View>
          </View>

          <StatusBar />

          {/* {this.rendersearch()} */}
          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

          <FlatList
            data={storyArray}
            horizontal={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ margin: 7 }}
                onPress={() => {
                  // Alert.alert('touched');
                  this.props.navigation.navigate('Product', {
                    productInfo: item,
                  });
                }}>
                <View
                  style={{
                    borderRadius: 10,
                    height: 72,
                    width: 72,
                    borderColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      borderRadius: 10,
                      height: '99%',
                      width: '99%',
                    }}
                    source={{ uri: item.image }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: '200',
                    color: 'black',
                    marginVertical: 5,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />

          {/* <SliderBox
            images={this.state.imagess}
            sliderBoxHeight={250}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
          /> */}
          <SliderBox
            //ImageComponent={FastImage}
            images={slider1FinalArray}
            sliderBoxHeight={500}
            onCurrentImagePressed={(index) => this.onSlider1Click(index)}
            dotColor="#000"
            inactiveDotColor="#424242"
            paginationBoxVerticalPadding={10}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'contain'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            dotStyle={{
              width: 20,
              height: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              marginTop: -26,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            imageLoadingColor="#2196F3"
            ImageComponentStyle={{
              //borderRadius: 15,
              width: '100%',
            }}
          />
          <SliderBox
            //ImageComponent={FastImage}
            images={slider2FinalArray}
            sliderBoxHeight={650}
            onCurrentImagePressed={(index) => {
              //Alert.alert('touched');
              this.onSlider2Click(index);

              console.log(`image ${index} pressed`);
            }}
            dotColor="#000"
            inactiveDotColor="#424242"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            dotStyle={{
              width: 20,
              height: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            imageLoadingColor="#2196F3"
          />

          <FlatList
            data={homepage_custom_banner_final}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginTop: 15 }}
                onPress={() => {
                  // Alert.alert('hi');
                  console.log(
                    'homepage_custom_banner_final',
                    homepage_custom_banner_final,
                  );
                  this.onHomePageClick(index);
                  // this.props.navigation.navigate('Product',{productInfo:item});
                }}>
                <View
                  style={{
                    borderRadius: 10,
                    height: 630,
                    borderColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={{ uri: item }}
                    resizeMode={'cover'}
                  />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}>
            <Text
              style={{
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              BRANDS
            </Text>
            <View style={{ width: '99%', justifyContent: 'center', alignItems: 'center' }}>
              <FlatList
                style={{ width: '99%', padding: 20, margin: 10, alignSelf: 'center' }}
                data={homeBrandsArray}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      marginVertical: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('Product', {
                        productInfo: item,
                      });
                    }}>
                    <View
                      style={{
                        backgroundColor: '#F6F6F6',
                        borderRadius: 50,
                        height: 100,
                        width: 100,

                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                      }}>
                      <Image
                        style={{
                          borderRadius: 40,
                          height: '99%',
                          width: '99%',
                        }}
                        source={{ uri: item.image }}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>

          <View style={{ padding: 10, marginBottom: 20 }}>
            <Text
              style={{
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              JOIN OUR NEWSLETTER
            </Text>

            {this.state.listDataSource.map((item, key) => (
              <ExpandableItemComponent
                key={item.category_name}
                onClickFunction={this.updateLayout.bind(this, key)}
                item={item}
              />
            ))}
            <View
              style={{
                width: '99%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // alignContent: 'center',
                paddingVertical: 30,
                paddingBottom: 30,
                borderBottomWidth: 0.2,
                borderColor: 'grey',
              }}>
              <Icon name="facebook" size={20} style={{ marginHorizontal: 16 }} />
              <Icon name="twitter" size={20} style={{ marginHorizontal: 16 }} />
              <Icon name="instagram" size={20} style={{ marginHorizontal: 16 }} />
              <Icon name="youtube" size={20} style={{ marginHorizontal: 16 }} />
            </View>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {'COPYRIGHT@2019 WESTSIDE LIMITED'}
            </Text>
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

const mapStateToProps = (state) => {
  console.log('hhhhhhhhhhhhhhh' + state.Home)
  return {
    isFetching: state.isFetching,
    Home: state.Home,
  };
};

export default connect(mapStateToProps)(HomePage);
