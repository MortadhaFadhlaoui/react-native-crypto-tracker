import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../App'
import { Header } from '../src'

describe('<App />', () => {
	it('has text', () => {
		const { getByText } = render(<App />)
		expect(
			getByText('Open up App.tsx to start working on your app!'),
		).not.toBeNull()
	})
})

describe('<Header />', () => {
	it('has text', () => {
		const { getByText } = render(<Header />)
		expect(
			getByText('Please select the image of the crossword and clues:'),
		).not.toBeNull()
	})
})
