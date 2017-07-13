// Import a library
import React from 'react';
import {Text, View} from 'react-native';

// create a component
const Header = (props) => {
	const {testStyle, viewStyle} = styles
  return (
  	<View style={viewStyle}>
    	<Text style={testStyle}>{props.headerText}</Text>
    </View>
    );
}

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: "center",
		alignItems: "center"
	},
	testStyle: {
		fontSize: 20
	}
}

// Export a component
export default Header;