import React,{Component} from 'react';
import {Text} from 'react-native'
import firebase from 'firebase';
import {CardSection, Card, Button, Input, Spinner} from '../index/';

class Login extends Component {
  state = {email: '', password: '', error: '', loading: false}

// Login Button action
  onButtonPressed(){
    const{email, password} = this.state
    this.setState({error: '', loading: true})
    // This are Synchornous methods
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.successResponse.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.successResponse.bind(this))
      .catch(this.failureResponse.bind(this));
      });
    }

  // To stop the spinner for success message
  successResponse(){
    this.setState({
      loading: false,
      email: '',
      password: ''
    })
  }

  failureResponse(){
    this.setState({
      loading: false,
      error: "Opps!! Authentication Failed!"
    })
  }

  // Function to show Spinner or button
  renderButton(){
    if(this.state.loading){
      return <Spinner size='small' />;
    }
    else{
      return (<Button onPress={this.onButtonPressed.bind(this)}>Login</Button>);
    }
  }

  render() {
    return (
      <Card>
      <CardSection>
      <Input name="Name" changeText={email => this.setState({email})} value={this.state.email} placeholder="someone@nobody.com" />
      </CardSection>
      <CardSection>
         <Input name="Password" changeText={password => this.setState({password})} value={this.state.password} secureTextEntry={true} placeholder="password" />
      </CardSection>

      <Text style={styles.errorStyle}>
        {this.state.error}
      </Text>

      <CardSection>
      {this.renderButton()}
      </CardSection>
      </Card>
      );
    
  }
}
const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

export default Login;