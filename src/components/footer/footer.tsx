import React from 'react'
import { ActivityIndicator } from 'react-native'
import { BLUE_SKY } from '../../theme/colors'
import { FooterProps } from './footer.props'

const Footer = ({ loading, size = 'small', color = BLUE_SKY }: FooterProps) => {
	if (!loading) return null
	return <ActivityIndicator size={size} color={color} />
}

export default Footer
