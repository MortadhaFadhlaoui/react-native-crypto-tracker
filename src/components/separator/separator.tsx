import React, { memo } from 'react'
import { View } from 'react-native'
import { SeparatorProps } from './separator.props'
import { styles } from './separator.styles'

export const Separator = memo(({ style }: SeparatorProps) => {
	return <View style={[styles.separator, style]} />
})
