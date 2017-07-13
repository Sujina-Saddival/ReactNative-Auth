import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
	const {containerstyle, buttonstyle} = styles
	  return (
	  	<TouchableOpacity style={buttonstyle} onPress={props.onPress}>
	  		<Text style={containerstyle}>{props.children}</Text>
	    </TouchableOpacity>
	  );
}

const styles = {
	containerstyle: {
		paddingTop: 10,
		alignSelf: 'center',
		paddingBottom: 10,
		fontSize: 15
	},
	buttonstyle: {
		alignSelf: 'stretch',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowRadius: 2,
		shadowOpacity: 0.1,
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}

export {Button};