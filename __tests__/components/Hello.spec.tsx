import React from 'react'
import { render } from '@testing-library/react-native'
import { Hello } from '../../src'

describe('Hello', () => {
	it('renders the correct message Text', () => {
		const { getByText } = render(<Hello name="Josh" />)
		expect(getByText('Hello, Josh!')).toBeDefined()
	})

	it('displays the react logo Image', () => {
		const { getByLabelText } = render(<Hello name="Josh" />)
		expect(getByLabelText('react icon')).toBeDefined()
	})
})
