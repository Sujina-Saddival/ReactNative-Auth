// Import a library
import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
// import firebase from 'firebase';
import Header from './src/components/index/Header'
import Login from './src/components/accounts/Login'

// create a component
class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyDWMGgG_AkYKO4oQiMX6joC5F3TKugjmTU",
  //     authDomain: "authentication-1d698.firebaseapp.com",
  //     databaseURL: "https://authentication-1d698.firebaseio.com",
  //     projectId: "authentication-1d698",
  //     storageBucket: "authentication-1d698.appspot.com",
  //     messagingSenderId: "928461276370"
  //   });
  // }

  render() {

    return (
      <View style={{flex: 1}}>
      <Header headerText={'React Login'}/>
      <Login/>
      </View>
      );
  }
}

// Render it to the device

AppRegistry.registerComponent('auth', () => App);
