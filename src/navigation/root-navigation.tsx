import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import { DreamScreen } from '../screens/add-dream/add-dream'
import { DreamsScreen } from '../screens/dreams/dreams'

const Stack = createStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Dreams">
				<Stack.Screen
					options={{
						headerTitleAlign: 'center',
						headerTitle: 'Dreams',
					}}
					name="Dreams"
					component={DreamsScreen}
				/>
				<Stack.Screen
					options={{
						headerTitleAlign: 'center',
						headerTitle: 'Dream',
					}}
					name="Dream"
					component={DreamScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
