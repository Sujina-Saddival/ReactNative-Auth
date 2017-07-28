import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native'

const Spinner = ({size}) => {
	return(
		<View style={styles.viewSpinner}>
		<ActivityIndicator size={size || 'large'} />
		</View>
	);
}

const styles = {
	viewSpinner: {
		flex: 1,
		alignSelf: 'center'
	}
}
export {Spinner}