import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import homeScreen from '../screens/homeScreen/index';
import drawerPage from '../screens/DrawerPage/index';
import ProductPage from '../screens/Product/index';
import ProductDetailPage from '../screens/ProductDetails/index';
import SignInPage from '../screens/SignIn/index';
import RegisterOnePage from '../screens/RegisterOne/index';
import RegisterTwoPage from '../screens/RegisterTwo/index';
import GiftCardPage from '../screens/GiftCard/index';
import ContactUsPage from '../screens/ContactUs/index';
import AboutUsPage from '../screens/AboutUs/index';
import DisclaimerPage from '../screens/Disclaimer/index';
import MediaCenterPage from '../screens/MediaCenter/index';
import InvestorsPage from '../screens/Investors/index';
import WhishlistPage from '../screens/Whishlist/index';
import StoriesScreen from '../screens/Stories/index';
import ClubwestScreen from '../screens/Clubwest/index';
import W_StyleScreen from '../screens/W_Style/index';
import W_Style_DetailsScreen from '../screens/W-Style_Details/index';
import CustomHeader from '../common/Header/index';

import SplashScreen from '../screens/SplashScreen';

import demo from '../screens/demo';

const homeStack = createStackNavigator(
  {
    // demo: {screen: demo},
    home: {
      screen: homeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Product: {
      screen: ProductPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    ProductDetail: {
      screen: ProductDetailPage,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'home',
  },
);

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterOne: {
    screen: RegisterOnePage,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterTwo: {
    screen: RegisterTwoPage,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const GiftCardStack = createStackNavigator({
  GiftCard: {
    screen: GiftCardPage,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ContactUsStack = createStackNavigator({
  ContactUs: {
    screen: ContactUsPage,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const WhishlistStack = createStackNavigator({
  Whishlist: {
    screen: WhishlistPage,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const CorporateStack = createStackNavigator({
  AboutUs: {
    screen: AboutUsPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Disclaimer: {
    screen: DisclaimerPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  MediaCenter: {
    screen: MediaCenterPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Investors: {
    screen: InvestorsPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Stories: {
    screen: StoriesScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Clubwest: {
    screen: ClubwestScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  W_Style: {
    screen: W_StyleScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  W_Style_Details: {
    screen: W_Style_DetailsScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppStack = createDrawerNavigator(
  {
    Dashboard: homeStack,
    SignUp: AuthStack,
    GiftCard: GiftCardStack,
    ContactUs: ContactUsStack,
    Corporate: CorporateStack,
    Whishlist: WhishlistStack,
    Header: CustomHeader,
    //Notification: NotificationStack,
    // About: AboutStack,
    //Contact: ContactStack,
    //AddIssue: IssueStack,
  },
  {
    initialRouteName: 'Dashboard',
    contentComponent: drawerPage,
  },
);
const MainStack = createSwitchNavigator({
  SplashScreen: SplashScreen,
  Demo: demo,
  //Tab: bottomTab,
  AppStack: AppStack,
  Auth: AuthStack,
  // home: drawerStack,
  // Article: ArticleStack,
  // Details: {screen: ArticleDetail},
  // Search: SearchScreen,
});

const RootApp = createAppContainer(MainStack);
export default RootApp;
