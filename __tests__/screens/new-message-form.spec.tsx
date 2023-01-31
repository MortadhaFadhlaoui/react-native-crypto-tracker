import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { DreamsScreen } from '../../src/screens/dreams/dreams'
import '@testing-library/jest-native/extend-expect'

describe('NewMessageForm', () => {
	describe('clicking send', () => {
		// Interaction
		it('clears the message field', () => {
			const { getByPlaceholderText, getByText } = render(<DreamsScreen />)

			fireEvent.changeText(getByPlaceholderText('Message'), 'Hello world')
			fireEvent.press(getByText('Send'))

			expect(getByPlaceholderText('Message')).toHaveProp('value', '')
		})

		/**
		 * Verifying Actions
		 * Mock function
		 */
		it('calls the onSend prop', () => {
			const messageText = 'Hello world'
			const sendHandler = jest.fn()
			const { getByPlaceholderText, getByText } = render(<DreamsScreen />)

			fireEvent.changeText(getByPlaceholderText('Message'), 'Hello world')
			fireEvent.press(getByText('Send'))

			expect(sendHandler).toHaveBeenCalledWith(messageText)
		})
	})
})
