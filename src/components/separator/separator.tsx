import React from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { SeparatorProps } from './separator.props'
import { WHITE } from '../../theme/colors'

const Separator = ({ style }: SeparatorProps) => {
	return <View style={[styles.separator, style]} />
}

const styles = StyleSheet.create({
	separator: {
		backgroundColor: WHITE,
		height: 2,
		paddingVertical: hp('1'),
	},
})

export default Separator
