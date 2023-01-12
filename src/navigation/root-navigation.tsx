import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { Cryptos } from '../screens/cryptos'

const Stack = createStackNavigator()

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: styles.headerStyle,
				}}>
				<Stack.Screen
					options={{
						headerTitle: 'Cryptos',
					}}
					name="Cryptos"
					component={Cryptos}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	headerStyle: {
		elevation: 0,
		shadowColor: 'transparent',
	},
	headerTitleStyle: {
		alignSelf: 'center',
	},
})
