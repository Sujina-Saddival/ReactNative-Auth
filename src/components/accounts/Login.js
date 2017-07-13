import React from 'react';
import {TextInput} from 'react-native';
import {CardSection, Card, Button} from '../index/';

const Login = (props) => {
  const {textStyle, imageContainerStyle} = styles
    return (
      <Card>
        <CardSection>
        <TextInput style={{height: 10,width: 10}}/>
        </CardSection>
        <CardSection>
          <Button onPress={() => console.log("pressed!!")}>Login</Button>
        </CardSection>
      </Card>
    );
}

const styles = {
  textStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}
export default Login;