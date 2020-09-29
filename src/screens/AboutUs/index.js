import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Text,
  TextInput,
  Image,
  Dimensions,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import CustomHeader from '../../common/Header/index';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.loaddata();
  }
  renderItemView = (item) => {
    if (this.state.visible == true) {
      if (this.state.itemValue == item.id) {
        return (
          <View
            style={{
              backgroundColor: '#fff',
              marginEnd: 10,
              margin: 10,
              borderRadius: 8,
              paddingVertical: 10,
              marginBottom: 4,
            }}>
            <View
              style={{
                width: '100%',

                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.text}
              </Text>
            </View>
          </View>
        );
      }
    }
  };
  getVisible(item) {
    if (this.state.visible == false) {
      console.log('rohit12' + this.state.visible);
      this.setState({
        visible: true,
        itemValue: item.id,
      });
    } else {
      this.setState({
        visible: false,
        itemValue: item.id,
      });
    }
  }

  loaddata = async () => {
    const { Nor, PageNo } = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);

    console.log('bdb' + userid);
    this.props.dispatch({
      type: 'User_Design_Details_Request',
      url: '/NewTMApi/DDetail?UserId=7&PageNo=1&Nor=10&search=',
      token: token,
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
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 12, color: '#666666' }}>
              {'Home > About Us'}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
              ABOUT US
            </Text>
          </View>
          <FlatList
            data={arr}
            style={{ backgroundColor: '#fff' }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.getVisible(item)}>
                  <View
                    style={{
                      marginHorizontal: 20,
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#000',
                        fontWeight: 'bold',
                        fontFamily: 'Poppins-Bold',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {item.Heading}
                    </Text>
                    <Icon name="angle-down" size={20} color="grey" />
                  </View>
                </TouchableOpacity>

                {this.renderItemView(item)}
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const arr = [
  {
    Heading: 'ABOUT TRENT',
    text:
      "Established in 1998 as part of the Tata Group,Trent Ltd. operates Westside, one of India's largest and fastest growing chains of retail stores. \n \nOur vision is to design and deliver fashion & lifestyle brands, while always keeping it fresh. We are young, agile, risk-takers who love including everyone in this exhilarating journey. With over 200 outlets across Westside, Zudio, Landmark and Star Bazaar -- bringing a modern retail experience to India is our beat.\n\nAt Trent we are excited about fashion, food, beauty, home and technology. We are about fast, clean and innovative retail that makes the little things we do seem so stylish yet so effortless. Being part of the TATA fold, our core values echo sustainability, compliance and engaging in mindful business. \n\nAbout our Brands \n\n\nWESTSIDE: Our lead fashion brand with over 22 labels all designed in-house, across women’s wear, menswear, kidswear, footwear, lingerie, cosmetic, perfumes, accessories and home furniture. \n\nZUDIO: Aggressively popping all over India, we bring to the fore irresistible fashion at unmatched prices. We create everything in-house and love cool-spirited people who are trend sussed. We enjoy forming tribes and creating amazing opportunities along the way. \n\nLANDMARK: Inspiring the child in all of us, we are a playground for books, toys, music, lifestyle accessories, technology, sporting goods and more. We collaborate and source around the world and trade our business with innovation. \n\nSTAR BAZAAR: Trent ventured into the hypermarket business in 2004 with Star Bazaar. Keeping things forever fresh, our clean and modern formats make daily grocery, food and shopping for your household easy. We are a bunch of foodies and traders who aspire to make everyday shopping a fun experience.\n\n",
    addres: 'indore',
    id: '1',
  },
  {
    Heading: 'ABOUT WESTSIDE',
    text:
      "Our vision is - to design & deliver 22 fashion brands that are authentic, trusted for trend, offer exceptional value and sell it in an environment that offers an overall experience.\n\nOur Customer Promise is - First Price. Right Price. With a collection that's self-assisted, curated with fashion solutions highlighting incredible value and edited monthly launches. We are famous for Our Point of View as it comes alive through our backwalls & 'See It Buy It'. The tables drive Seasonal Statement Lines that excite with style and value. Our service is efficient, our space is easy to navigate and our returns policy is simple and customer friendly.\n\nWe are confident, optimistic, colourful and have a youthful spirit.",
    name: 'yogendra',
    addres: 'bhopal',
    id: '2',
  },
  {
    Heading: 'MISSION STATEMENT',
    text:
      'Our mission is to create value for all our stakeholders \n\nIn order to achieve this goal, we shall develop a comprehensive understanding of their needs, strive to win their confidence, and offer them best-in-class products and services at affordable prices. \n\nWe shall always be in the forefront of fashion and services by anticipating and exceeding the expectations of our customers. \n\nWe will continue to scale new heights of excellence through teamwork. Our leadership will be the product of our styling, quality and service consciousness. We will continue to scale new heights of excellence through teamwork, in an atmosphere that encourages creativity and innovativeness. \n\nIt is our policy to satisfy our customers with the range, quality and value of the products we offer. However, if they are dissatisfied with any item that they might have purchased we would take the necessary measures to assist them. \n\nWe expect our customers to return unused merchandise along with its receipt within 30 days; we would exchange the returned items or give our customers a complete refund. In the event that they do not have the receipt we would offer them an exchange or provide them a gift voucher to the current or last known selling price. \n\nOur vision is to Design and deliver fashion brands. \n\nWe have complete confidence in the quality of our merchandise however should our customers have any grievances, we would be happy to address them once they are brought to our attention.',
    name: 'narendsra',
    addres: 'dewas',
    id: '3',
  },
  {
    Heading: 'AIDING THE COMMUNITY',
    text:
      'India is a youthful country where a large percentage of the population is in the younger age brackets. \n\nWe believe that these young people shall be the backbone of the nation in the coming years. We believe that these young people shall be the backbone of the nation in the coming years. It is therefore our intention to focus on socially underprivileged children in order to provide them with a chance to have a better life tomorrow. \n\nWe shall work towards improving the future of socially underprivileged children. We shall dedicate resources commensurate with our business requirements to community activities that work towards improving the future of socially underprivileged children. We shall also use our assets and our expertise in the retail business to further the cause of such communities. \n\nWere it not for the active participation of our customers, our social policy might never have been activated. We are truly grateful for their generosity in supporting our socially conscious endeavours.\n\n Light a Diya, Help a Child – Purchase a diya and light it at Westside during the Diwali Promotion. Funds collected will be donated to NGOs to help bringing smiles to the faces of underprivileged children. Click Here to Know More \n\nAngels Tree – Purchase a “Silver Star” or a “Gold Star” during our Christmas Promotion, and decorate our Angels Tree. The money collected will be donated to various NGOs across the country working with underprivileged children.',
    name: 'saurav',
    addres: 'ujjain',
    id: '4',
  },
];

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(AboutUs);
