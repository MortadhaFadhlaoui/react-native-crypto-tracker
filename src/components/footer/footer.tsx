import React from 'react'
import { ActivityIndicator } from 'react-native'
import { FooterProps } from './footer.props'
import { BLUE_SKY } from '../../theme/colors'

const Footer = ({ loading, size = 'small', color = BLUE_SKY }: FooterProps) => {
	if (!loading) return null
	return <ActivityIndicator size={size} color={color} />
}

export default Footer
