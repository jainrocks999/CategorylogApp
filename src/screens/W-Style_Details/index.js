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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            <Text style={{ padding: 10 }}>{'Home > W-STYLE > Get Back'}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: 10,
              paddingHorizontal: 10,
            }}>
            <Image
              style={{ width: 25, height: 25, marginRight: 20 }}
              source={require('../../Assets/image/filter.png')}
            />
          </View>
          <Image
            style={{ height: 300, width: '100%' }}
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/blue_denim_jacket_for_women_by_lov.jpg?v=1598965768',
            }}
          />
          <View
            style={{
              marginTop: 5,
              paddingVertical: 30,
              backgroundColor: '#F6F6F6',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Get Back In Your Jeans
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>
              Say hello to comfort, style at great prices!
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>
              With comfort a huge style statement, say hello to your new best
              friend- the denim jeans! Hanging out with friends, a day at work,
              lounging at home, and so much more, slip into this super comfy,
              stretchable range in denim.
            </Text>

            <Image
              style={{ height: 300, width: '100%', marginTop: 20 }}
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/blue_denim_jacket_for_women_by_lov.jpg?v=1598965768',
              }}
            />

            <Text
              style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
              {'Comfy & Stylish'}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>
              Team up skinny stretch black jeans with a knotted t-shirt. Layer
              on cool comfort with an indigo blue bomber denim jacket. A classic
              all jeans look to get you back into your style game!
            </Text>

            <Image
              style={{ height: 300, width: '100%', marginTop: 20 }}
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/blue_denim_jacket_for_women_by_lov.jpg?v=1598965768',
              }}
            />

            <Text
              style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
              {'THE ONE THAT’S NOT-SO-BASIC'}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>
              Looking for a simple yet on-point style? Our favourite look this
              season is the “Step off the couch and onto the street look where
              we break up with the all-black attire and make it 10 times cooler
              with a blue denim jacket. Now you know why we’ve been taking our
              blue jean jacket wherever we go.
            </Text>

            <Image
              style={{ height: 300, width: '100%', marginTop: 20 }}
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/blue_denim_jacket_for_women_by_lov.jpg?v=1598965768',
              }}
            />

            <Text style={{ fontSize: 14, lineHeight: 20, marginTop: 10 }}>
              The next big thing doing the rounds? Comfort-fitted jeans complete
              with perfectly lived in washes and a raw hemline. The perfect
              add-on to low-key office looks and laid-back home lounging, this
              oversized denim shirt is our new obsession!
            </Text>

            <Text style={{ fontSize: 14, lineHeight: 20, marginTop: 20 }}>
              A trans-seasonal style and your first lesson in layering, the
              denim trend has taken a firm seat in the fashion circuit and we
              can’t get enough of the latest update!
            </Text>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                marginBottom: 20,
                marginTop: 10,
              }}>
              {
                'Starting at Rs. 999, choose from a huge selection of washes, stretches & fits by NUON Women, Sassy Soda and LOV online or try the styles at a Westside store.'
              }
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Icon
              name="tag"
              color={'grey'}
              size={15}
              style={{ marginHorizontal: 6 }}
            />
            <Text>
              Denim Jackets For Women, Jackets For Women, LOV, Nuon, Sassy Soda,
              Shirts For Women, Womenswear
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Icon name="facebook" size={15} style={{ marginHorizontal: 6 }} />
            <Icon name="twitter" size={15} style={{ marginHorizontal: 6 }} />
            <Icon name="pinterest-p" size={15} style={{ marginHorizontal: 6 }} />
            <Icon name="whatsapp" size={15} style={{ marginHorizontal: 6 }} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              alignContent: 'center',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            <Text style={{ textAlignVertical: 'center' }}>{'< '}</Text>
            <Text
              style={{
                textAlignVertical: 'center',
                textDecorationLine: 'underline',
              }}>
              OLDER POST
            </Text>
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
    Headine: 'Lets Talk',
    SubHeading: 'Denim',
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
