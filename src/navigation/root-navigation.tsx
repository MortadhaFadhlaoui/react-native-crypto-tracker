import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { NewMessageForm } from '../screens/new-message-form'
import { TRANSPARENT } from '../theme/colors'

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
					component={NewMessageForm}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	headerStyle: {
		elevation: 0,
		shadowColor: TRANSPARENT,
	},
})
