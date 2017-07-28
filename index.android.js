// Import a library
import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/index/Header'
import Login from './src/components/accounts/Login'
import {Button, Spinner} from './src/components/index/'

// create a component
class App extends Component {
  state = {loggIn: false}

  componentWillMount() {
    // To connect with the firebase
    firebase.initializeApp({
      apiKey: "AIzaSyCPHRHHPDhz8MzAqKy2lWMkXIJ5KV-2L00",
      authDomain: "testing-ddb01.firebaseapp.com",
      databaseURL: "https://testing-ddb01.firebaseio.com",
      projectId: "testing-ddb01",
      storageBucket: "testing-ddb01.appspot.com",
      messagingSenderId: "548165723217"
    });

    // To check session exists or not
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggIn: true})
      }
      else {
        this.setState({loggIn: false})
      }
    });
  }

  // To render logout page if user already exists
  renderPage(){
    switch (this.state.loggIn){
      case true:
      return (<Button onPress={this.sessionDestroy.bind(this)}>Log Out</Button>);
      case false:
       return <Login />;
      default:
      <Spinner size="small" />;
    }
  }

  // To logout
  sessionDestroy(){
    this.setState({ loggIn: false})
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'React Login'}/>
      {this.renderPage()}
      </View>
      );
  }
}

// Render it to the device

AppRegistry.registerComponent('auth', () => App);
