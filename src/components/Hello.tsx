import React, { ReactElement } from 'react'
import { Text, View, Image } from 'react-native'

export const Hello = ({ name }: { name: string }): ReactElement => {
	return (
		<View>
			<Text>Hello, {name}!</Text>
			<Image
				source={require('../../assets/logo-react-icon.png')}
				accessibilityLabel="react icon"
			/>
		</View>
	)
}
