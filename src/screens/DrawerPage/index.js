import React from 'react';
import {
  Linking,
  View,
  Alert,
  ScrollView,
  ActivityIndicator,
  Share,
  Text,
  Picker,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import StatusBar from '../../Config/StatusBar/index';
import { connect } from 'react-redux';
class MyDrawer extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      name: 'yogi',
      mobile: '',
      Number: '',
      currentpage: '',
    };
  }
  getprofile = () => {
    this.props.navigation.navigate('Profile');
  };
  renderDrawerItem = (route) => {

    const onpress =
      route.key === 'Logins'
        ? () =>
          AsyncStorage.clear().then((p) =>
            this.props.navigation.navigate(route.key),
          )
        : route.key === 'SignIn'
          ? () => this.props.navigation.navigate('SignIn')
          : route.key === 'Register'
            ? () => this.props.navigation.navigate('RegisterOne')
            : route.key === 'GiftCard'
              ? () => this.props.navigation.navigate('GiftCard')
              : route.key === 'ContactUs'
                ? () => this.props.navigation.navigate('ContactUs')
                : //Ye ho gya thik hai
                route.key === 'logout'
                  ? () => this.Logout()
                  : () => {
                    this.setState({ currentpage: route.key });
                    this.props.navigation.navigate(route.key);
                    AsyncStorage.getItem('user').then((Name) => {
                      this.setState({ name: Name });
                    });
                    AsyncStorage.getItem('contact_number').then((number) => {
                      this.setState({ Number: number });
                    });
                    AsyncStorage.getItem('Profile_Image').then((pi) => {

                      if (pi) {
                        this.setState({
                          pimage: {
                            uri:
                              'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
                              pi,
                          },
                        });
                      }
                    });
                  };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 12,
            padding: 4,
            fontWeight: '600',
          }}>
          {route.label}
        </Text>
      </TouchableOpacity>
    );
  };

  renderDrawerItem1 = (route) => {

    const onpress =
      route.key === 'Logins'
        ? () =>
          AsyncStorage.clear().then((p) =>
            this.props.navigation.navigate(route.key),
          )
        : route.key === 'SignIn'
          ? () => this.props.navigation.navigate('SignIn')
          : route.key === 'Register'
            ? () => this.props.navigation.navigate('RegisterOne')
            : route.key === 'GiftCard'
              ? () => this.props.navigation.navigate('GiftCard')
              : route.key === 'ContactUs'
                ? () => this.props.navigation.navigate('ContactUs')
                : route.key === 'AboutUs'
                  ? () => this.props.navigation.navigate('AboutUs')
                  : route.key === 'Desclaimer'
                    ? () => this.props.navigation.navigate('Disclaimer')
                    : route.key === 'MediaCenter'
                      ? () => this.props.navigation.navigate('MediaCenter')
                      : route.key === 'Investors'
                        ? () => this.props.navigation.navigate('Investors')
                        : //Ye ho gya thik hai
                        route.key === 'logout'
                          ? () => this.Logout()
                          : () => {
                            this.setState({ currentpage: route.key });
                            this.props.navigation.navigate(route.key);
                            AsyncStorage.getItem('user').then((Name) => {
                              this.setState({ name: Name });
                            });
                            AsyncStorage.getItem('contact_number').then((number) => {
                              this.setState({ Number: number });
                            });
                            AsyncStorage.getItem('Profile_Image').then((pi) => {

                              if (pi) {
                                this.setState({
                                  pimage: {
                                    uri:
                                      'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
                                      pi,
                                  },
                                });
                              }
                            });
                          };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 13,
            padding: 4,
          }}>
          {route.label}
        </Text>
      </TouchableOpacity>
    );
  };

  renderDrawerItem2 = (route) => {

    const onpress =
      route.key === 'Logins'
        ? () =>
          AsyncStorage.clear().then((p) =>
            this.props.navigation.navigate(route.key),
          )
        : route.key === 'AboutUs'
          ? () => this.props.navigation.navigate('AboutUs')
          : route.key === 'Desclaimer'
            ? () => this.props.navigation.navigate('Disclaimer')
            : route.key === 'MediaCenter'
              ? () => this.props.navigation.navigate('MediaCenter')
              : route.key === 'Investors'
                ? () => this.props.navigation.navigate('Investors')
                : //Ye ho gya thik hai
                route.key === 'logout'
                  ? () => this.Logout()
                  : () => {
                    this.setState({ currentpage: route.key });
                    this.props.navigation.navigate(route.key);
                    AsyncStorage.getItem('user').then((Name) => {
                      this.setState({ name: Name });
                    });
                    AsyncStorage.getItem('contact_number').then((number) => {
                      this.setState({ Number: number });
                    });
                    AsyncStorage.getItem('Profile_Image').then((pi) => {

                      if (pi) {
                        this.setState({
                          pimage: {
                            uri:
                              'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
                              pi,
                          },
                        });
                      }
                    });
                  };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginVertical: 5,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 13,
            padding: 4,
          }}>
          {route.label}
        </Text>
      </TouchableOpacity>
    );
  };

  renderDrawerItem3 = (route) => {

    const onpress =
      route.key === 'Logins'
        ? () =>
          AsyncStorage.clear().then((p) =>
            this.props.navigation.navigate(route.key),
          )
        : route.key === 'Product'
          ? () => this.props.navigation.navigate('Product')
          : route.key === 'Stories'
            ? () => this.props.navigation.navigate('Stories')
            : route.key === 'Clubwest'
              ? () => this.props.navigation.navigate('Clubwest')
              : route.key === 'W_Style'
                ? () => this.props.navigation.navigate('W_Style')
                : route.key === 'MediaCenter'
                  ? () => this.props.navigation.navigate('MediaCenter')
                  : route.key === 'Investors'
                    ? () => this.props.navigation.navigate('Investors')
                    : //Ye ho gya thik hai
                    route.key === 'logout'
                      ? () => this.Logout()
                      : () => {
                        this.setState({ currentpage: route.key });
                        this.props.navigation.navigate(route.key);
                        AsyncStorage.getItem('user').then((Name) => {
                          this.setState({ name: Name });
                        });
                        AsyncStorage.getItem('contact_number').then((number) => {
                          this.setState({ Number: number });
                        });
                        AsyncStorage.getItem('Profile_Image').then((pi) => {

                          if (pi) {
                            this.setState({
                              pimage: {
                                uri:
                                  'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
                                  pi,
                              },
                            });
                          }
                        });
                      };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            padding: 4,
            fontWeight: 'bold',
          }}>
          {route.label}
        </Text>
      </TouchableOpacity>
    );
  };

  componentDidMount() {

    AsyncStorage.getItem('use').then((Name) => {
      this.setState({ name: Name });
    });
    AsyncStorage.getItem('contact_number').then((number) => {
      this.setState({ Number: number });
    });
    AsyncStorage.getItem('Profile_Image').then((pi) => {

      if (pi) {
        this.setState({
          pimage: {
            uri:
              'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
              pi,
          },
        });
      }
    });
  }
  setlog = () => {
    AsyncStorage.clear();
    AsyncStorage.setItem('USER_ID', '');
    // LanguagesString.setLanguage('en')
    this.props.navigation.navigate('Other');
  };
  sharefb = () => {
    Linking.openURL('https://www.facebook.com/chandrakar.ajay/');
  };
  shareTwitter = () => {
    Linking.openURL('https://twitter.com/chandrakar_ajay?lang=en');
  };
  Logout = () => {

    Alert.alert(
      'Are you want to logout ?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {
            cancelable: false;
          },
          style: 'cancel',
        },
        { text: 'ok', onPress: () => this.setlog() },
      ],
      { cancelable: false },
    );
    // Alert.alert("Logout","Are u want to logout ?");
  };
  ShareVoter = () => {
    Linking.openURL('https://www.nvsp.in/');
  };
  shareinsta = () => {
    Linking.openURL('https://www.instagram.com/chandrakar_ajay/?hl=en');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar />
        <View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomWidth: 0.5,
              marginTop: 10,
            }}>
            {this.renderDrawerItem({
              label: 'SIGN IN',
              key: 'SignIn',
              color: 'gray',
            })}
            <Text
              style={{
                textAlignVertical: 'center',
                marginHorizontal: 5,
                fontWeight: 'bold',
              }}>
              |
            </Text>
            {this.renderDrawerItem({
              label: 'REGISTER',
              key: 'Register',
              color: '#fff',
            })}
          </View>

          <View style={{ marginRight: 60, marginLeft: 10 }}>
            <View style={{ marginTop: 40, marginBottom: 20 }}>
              {this.renderDrawerItem3({
                label: 'NEW IN',
                key: 'Product',
                color: '#fff',
              })}
            </View>

            {this.renderDrawerItem3({
              label: 'WOMAN',
              key: 'Product',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'MAN',
              key: 'Product',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'KIDS',
              key: 'Product',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'SHOES & BAGS',
              key: 'Product',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'HOME',
              key: 'Product',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'STUDIOWEST',
              key: 'Product',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'STORIES',
              key: 'Stories',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'CLUBWEST',
              key: 'Clubwest',
              color: '#fff',
            })}
            {this.renderDrawerItem3({
              label: 'W-Style',
              key: 'W_Style',
              color: '#fff',
            })}
          </View>
          <View
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              marginRight: 60,
            }}></View>

          <View style={{ marginLeft: 10, padding: 4, marginTop: 10 }}>
            {this.renderDrawerItem1({
              label: 'GIFT CARD',
              key: 'GiftCard',
              color: '#fff',
            })}
            {this.renderDrawerItem1({
              label: 'CONTACT US',
              key: 'ContactUs',
              color: '#fff',
            })}
            <Text style={{ marginTop: 5, padding: 4 }}>STORE LOCATOR</Text>
            <Text style={{ marginTop: 5, padding: 4 }}>{'+ CORPORATE'}</Text>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            {this.renderDrawerItem2({
              label: 'ABOUT US',
              key: 'AboutUs',
              color: '#fff',
            })}
            {this.renderDrawerItem2({
              label: 'DISCLAIMER',
              key: 'Desclaimer',
              color: '#fff',
            })}
            {this.renderDrawerItem2({
              label: 'MEDIA CENTER',
              key: 'MediaCenter',
              color: '#fff',
            })}
            {this.renderDrawerItem2({
              label: 'INVESTORS',
              key: 'Investors',
              color: '#fff',
            })}
            <Text style={{ fontSize: 13, marginBottom: 5, padding: 4 }}>
              TATA CODE OF CONDUCT
            </Text>
            <Text style={{ fontSize: 12, padding: 4, marginBottom: 10 }}>
              WHISTLER BLOWER POLICY
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    //  backgroundColor: '#fff',
  },
  bluebox: {
    width: '100%',
    height: 110,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  ImageStyle: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '40%',
    marginLeft: 10,
    height: 40,
  },
  TextStyle: {
    color: '#000',
    marginTop: 4,
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  return {
    isFetching: state.Menu.isFetching,
    Menu: state.Menu.Menu,
  };
};

export default MyDrawer;
