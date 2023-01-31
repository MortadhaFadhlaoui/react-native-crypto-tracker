import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SeparatorProps } from './separator.props'
import { WHITE } from '../../theme/colors'

const Separator = ({ style }: SeparatorProps) => {
	return <View style={[styles.separator, style]} />
}

const styles = StyleSheet.create({
	separator: {
		backgroundColor: WHITE,
		height: 2,
		paddingVertical: 15,
	},
})

export default Separator
