import React, {Component} from 'react';
import RootApp from './src/navigation/index';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import { Platform ,StatusBar,SafeAreaView} from 'react-native';
export default class App extends Component {


  render(){
    return (
      <SafeAreaView style={{flex:1}}>
      <Provider store={Store}>
        <RootApp/>
      </Provider>
      </SafeAreaView>
    );
  }
}
