import * as React from 'react'
import { render } from '@testing-library/react-native'

import { RootNavigator } from '../../src/navigation/root-navigation'
import { Provider } from 'react-redux'
import store from '../../src/store'

describe('Testing react navigation', () => {
	test('page contains the header and Loading indicator', async () => {
		const { getByText, getByLabelText } = render(
			<Provider store={store}>
				<RootNavigator />
			</Provider>,
		)

		expect(getByText('Dreams')).toBeDefined()
		expect(getByLabelText('isLoading')).toBeDefined()
	})
})
