import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { EmptyListProps } from './empty-list.props'
import { BLUE_SKY } from '../../theme/colors'

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
