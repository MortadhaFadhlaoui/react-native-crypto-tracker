import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { EmptyListProps } from './empty-list.props'
import { styles } from './empty-list.styles'

export const EmptyList = memo(
	({ containerStyle, textStyle, emptyText }: EmptyListProps) => {
		return (
			<View style={[styles.container, containerStyle]}>
				<Text style={[styles.textStyle, textStyle]}>{emptyText}</Text>
			</View>
		)
	},
)
