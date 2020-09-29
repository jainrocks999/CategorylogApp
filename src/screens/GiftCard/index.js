import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';
import { connect } from 'react-redux';
var arr = [
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_DENIM.jpg?v=1588088383',
    },
    ItemName: 'Denim',
    details: 'details',
    price: '$6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_DRESS_TIME.jpg?v=1588088401',
    },

    ItemName: 'Dress Time',
    details: 'details',
    price: '$6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_T-SHIRTS.jpg?v=1588088420',
    },

    ItemName: 'T-shirts',
    details: 'details',
    price: '$6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_KURTAS.jpg?v=1588088433',
    },

    ItemName: 'Kurtas',
    details: 'details',
    price: '$6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_TOPS.jpg?v=1588088455',
    },
    ItemName: 'Tops',
    details: 'details',
    price: '$6.68',
  },
  {
    image: {
      uri:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Main_page_SHOES.jpg?v=1588088468',
    },
    ItemName: 'Shoes',
    details: 'details',
    price: '$6.68',
  },
];

class GiftCard extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ elevation: 20, height: 80 }}>
          <View
            style={{
              marginTop: 10,
              backgroundColor: '#FFFFFF',
              width: '100%',
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                marginLeft: 120,
                height: 35,
                paddingHorizontal: 20,
                borderBottomWidth: 5,
                borderBottomColor: '#B1D13F',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '#023A5E',
              }}
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  letterSpacing: 2,
                  color: '#fff',
                }}>
                WESTSIDE
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#C9A444',
                }}
                onPress={() => this.props.navigation.toggleDrawer()}>
                <Text style={{ marginRight: 5, color: '#fff' }}>MENU</Text>
                <Icon name="bars" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ marginLeft: 10, textDecorationLine: 'underline' }}>
            WESTSIDE E-GIFT CARD
          </Text>
          <Text style={{ marginLeft: 10 }}>RELOAD</Text>
        </View>

        <StatusBar />
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              marginTop: 50,
              borderBottomWidth: 0.7,
            }}>
            <Text style={{ fontSize: 22, marginBottom: 10 }}>
              WESTSIDE E-GIFT CARD
            </Text>
            <Text
              style={{ fontSize: 18, paddingHorizontal: 10, marginBottom: 15 }}>
              &quot;Endless Possibilities&quot;is what Westside stands for and
              here comes another surprise for our consumers- Westside Insta
              gifts!!! Now if you forget your wife’s birthday gift or your best
              friend’s anniversary gift- take a deep breath….here’s Westside
              E-Gift cards that can be immediately mailed to your associate,
              friends or family members. They can show the E-Gift card at the
              store and redeem it against any product of their choice. Instant
              Gifting, endless experiences!!!
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <Image
              //resizeMode={'cover'}
              style={{ height: 40, width: 130 }}
              source={{
                uri:
                  'https://giftbig.s3.amazonaws.com/microsite/product/EGCGBWSS002/d/image/605_microsite.jpg',
              }}
            />
            <Image
              //resizeMode={'cover'}
              style={{ height: 40, width: 130 }}
              source={{
                uri:
                  'https://giftbig.s3.amazonaws.com/microsite/product/GCRLDWS001/d/image/1342_microsite.png',
              }}
            />
          </View>

          <FlatList
            data={arr}
            horizontal={true}
            style={{ marginHorizontal: 40, marginTop: 20 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ margin: 20 }}
                onPress={() => {
                  Alert.alert('touched');
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    height: 90,
                    width: 120,
                    borderColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      borderRadius: 5,
                      height: '99%',
                      width: '99%',
                    }}
                    source={item.image}
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
                  {item.ItemName}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 10,
              marginVertical: 5,
            }}>
            --------------------------------------- OR CONTINUE WITH
            -----------------------------------
          </Text>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(GiftCard);