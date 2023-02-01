// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup'

// configure env
jest.mock('@env', () => ({
	FIREBASE_API_KEY: 'AIzaSyDHgNwGt4Roy_hHCpUAvcmbvzPQkxLEjpg',
	FIREBASE_AUTH_DOMAIN: 'reactnativetdd-3f084.firebaseapp.com',
	FIREBASE_DATABASE_URL:
		'https://reactnativetdd-3f084-default-rtdb.europe-west1.firebasedatabase.app',
	FIREBASE_PROJECT_ID: 'reactnativetdd-3f084',
	FIREBASE_STORAGE_BUCKET: 'reactnativetdd-3f084.appspot.com',
	FIREBASE_MESSAGE_SENDER_ID: '451918025082',
	FIREBASE_APP_ID: '1:451918025082:web:b14c5ed482d931144b06c3',
}))

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock')

	// The mock for `call` immediately calls the callback which is incorrect
	// So we override it with a no-op
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	Reanimated.default.call = () => {}

	return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
