import React from 'react';
import {Text, View} from 'react-native';

const Card = (props) => {
	const {containerstyle} = styles
	  return (
	  	<View style={styles.containerstyle}>
	  	{props.children}
	    </View>
	  );
}

const styles = {
	containerstyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowRadius: 2,
		shadowOpacity: 0.1,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}

export {Card};