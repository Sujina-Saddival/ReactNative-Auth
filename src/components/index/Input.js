import React from 'react';
import {TextInput,View,Text} from 'react-native';

const Input = (props) => {
  const {textInputStyle, textStyle, containerStyle} = styles
	  return (
	  	<View style={containerStyle}>
	  		<Text style = {textStyle}>
	  		{props.name}
	  		</Text>
	  		<TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.changeText} style={textInputStyle} secureTextEntry={props.secureTextEntry} />
	  	</View>
	  );
}

const styles = {
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
  	fontSize: 18,
  	lineHeight: 23,
  	flex: 2
  },
  textStyle: {
  	paddingLeft: 20,
  	paddingRight: 20,
  	fontSize: 18,
  	marginTop: 10
  },
  containerStyle: {
  	height: 40,
  	flex: 1,
  	flexDirection: 'row',
  	alignSelf: 'center'
  }
}

export {Input};