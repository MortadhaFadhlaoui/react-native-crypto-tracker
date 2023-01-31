import 'react-native-gesture-handler'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { RootNavigator } from './src/navigation/root-navigation'
import store from './src/store'

export default function App() {
	return (
		<StoreProvider store={store}>
			<PaperProvider>
				<RootNavigator />
			</PaperProvider>
		</StoreProvider>
	)
}
