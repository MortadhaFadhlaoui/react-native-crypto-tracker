import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DreamsScreen } from '../screens/dreams/dreams'

const Stack = createStackNavigator()

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{
						headerTitleAlign: 'center',
						headerTitle: 'Dreams',
					}}
					name="Dreams"
					component={DreamsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
