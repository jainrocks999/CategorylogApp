import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton1 from '../../Config/Button/Button1_small';
import StatusBar from '../../Config/StatusBar/index';
import { connect } from 'react-redux';
import CustomTextInput from '../../Config/TextInput/index';
import colors from '../../Config/colors';
import styles from './style';
class ContactUs extends React.Component {
  render() {
    return (
      <View style={styles.Main}>
        <View
          style={styles.second}>
          <TouchableOpacity
            style={styles.image}
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
              style={styles.imageone}
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

          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={styles.textheading}>
              CONTACT US
            </Text>
            <Text style={styles.textheading}>
              FOR CUSTOMER SUPPORT, FEEDBACK AND QUERIES
            </Text>
            <Text style={styles.emailtext}>Email</Text>
            <Text>mywestside@trent-tata.com</Text>
            <Text style={styles.emailtext}>
              westside@trent-tata.com
            </Text>

            <Text style={styles.emailtext}>Social Media</Text>
            <Text>Facebook @westsidefanpage</Text>
            <Text>Instagram @westsidestores</Text>
            <Text>
              Twitter @westsidestores{' '}
            </Text>

            <Text style={styles.emailtext}>Telephone</Text>
            <Text>+91-022-6700 9000</Text>
            <Text>+91-022-6700 9026 / 27</Text>
            <Text>+91-022-6700 9183 </Text>
            <Text style={styles.emailtext}>
              Toll Free Number: 18002099901{' '}
            </Text>
          </View>

          <View style={styles.viewdata}>
            <Text
              style={styles.text}>
              ENQUIRY FORM
            </Text>
            <CustomTextInput placeholder={'Name*'} />
            <CustomTextInput placeholder={'Email*'} />
            <CustomTextInput placeholder={'Mobile No*'} />
            <View
              style={styles.renderview}>
              <TextInput
                style={{
                  paddingHorizontal: 10,
                }}
                placeholder={'Your Comment*'}
                placeholderTextColor={colors.lightGrey}
              />
            </View>
            <CustomButton1
              onPress={() => {
                this.props.navigation.navigate('RegisterTwo');
              }}
              viewStyles={{ width: '49%' }}
              styles={styles.viewtwo}
              textstyles={styles.textsetone}
              title={'SEND'}
            />
          </View>
          <Text
            style={styles.btnset}>
            OUR CORPORATE OFFICE
          </Text>
          <View
            style={styles.viewsecond}>
            <View
              style={{
                marginBottom: 10,
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
                Address
              </Text>
            </View>

            <Text>Trent Limited, Trent House,</Text>
            <Text>G Block, Plot No C - 60,</Text>
            <Text>
              Beside Citibank, Bandra Kurla Complex,
            </Text>
            <Text>Bandra (East), Mumbai 51</Text>
          </View>
          <View
            style={styles.viewsecond}>
            <View
              style={{
                marginBottom: 10,
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={styles.viewvalue}>
                Telephone
              </Text>
            </View>

            <Text>+91-022-6700 9000</Text>
            <Text>+91-022-6700 9026 / 27</Text>
            <Text>
              Toll Free Number: 18002099901{' '}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 30,
              marginTop: 20,
            }}>
            <View
              style={{
                marginBottom: 10,
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
                Email
              </Text>
            </View>

            <Text style={{ fontSize: 12 }}>mywestside@trent-tata.com</Text>
            <Text style={{ fontSize: 12, marginBottom: 20 }}>
              westside@trent-tata.com
            </Text>
          </View>

          <View
            style={{
              marginLeft: 10,
              marginRight: 30,
              marginTop: 20,
            }}>
            <View
              style={{
                marginBottom: 10,
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
                Fax
              </Text>
            </View>

            <Text style={{ fontSize: 12 }}>+91-022-26106193</Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 30,
              marginTop: 40,
            }}>
            <Text style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
              For Franchise related queries
            </Text>

            <Text style={{ fontSize: 12 }}>write to</Text>
            <Text style={{ fontSize: 12 }}>
              Mr. Satish Prajapati at satish.prajapati@trent-tata.com
            </Text>
            <Text style={{ fontSize: 12 }}>Contact Number: +91 8291168774</Text>
          </View>

          <View
            style={{
              marginLeft: 10,
              marginRight: 30,
              marginTop: 40,
            }}>
            <Text style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
              For investor related queries
            </Text>

            <Text style={{ fontSize: 12 }}>write to</Text>
            <Text style={{ fontSize: 12 }}>
              investor.relations@trent-tata.com or{' '}
            </Text>
            <Text style={{ fontSize: 12 }}>
              Call the Secretarial Department: 022-67008090
            </Text>
          </View>

          <View
            style={{
              marginLeft: 10,
              marginRight: 30,
              marginTop: 40,
            }}>
            <Text style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
              For Grievance related queries
            </Text>

            <Text style={{ fontSize: 12 }}>please contact</Text>
            <Text style={{ fontSize: 12 }}>Name : Ms. Kudav</Text>
            <Text style={{ fontSize: 12 }}>
              Mail ID : mywestside@trent-tata.com
            </Text>
            <Text style={{ fontSize: 12 }}>Telephone:+91-022-6700 9183</Text>
            <Text style={{ fontSize: 12 }}>Toll Free Number:18002099901</Text>
          </View>

          <View
            style={{
              marginLeft: 10,
              marginRight: 30,
              marginTop: 40,
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Nodal officer for the purpose of
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>
              coordination with IEPF Authority:
            </Text>
            <Text style={{ fontSize: 12 }}>
              Name: Mr. M. M. Surti, Company Secretary.
            </Text>
            <Text style={{ fontSize: 12 }}>
              Email id: investor.relations@trent-tata.com
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

export default connect(mapStateToProps)(ContactUs);
