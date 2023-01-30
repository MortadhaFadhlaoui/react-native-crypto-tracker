import 'react-native-gesture-handler'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { RootNavigator } from './src/navigation/root-navigation'

export default function App() {
	return (
		<PaperProvider>
			<RootNavigator />
		</PaperProvider>
	)
}
