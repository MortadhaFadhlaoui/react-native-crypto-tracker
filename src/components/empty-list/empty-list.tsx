import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { BLUE_SKY } from '../../theme/colors'
import { EmptyListProps } from './empty-list.props'

export const EmptyList = ({
	containerStyle,
	textStyle,
	emptyText,
}: EmptyListProps) => {
	return (
		<View style={containerStyle}>
			<Text style={[styles.textStyle, textStyle]}>{emptyText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: { color: BLUE_SKY, textTransform: 'capitalize' },
})
