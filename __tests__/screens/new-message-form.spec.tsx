import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { NewMessageForm } from '../../src/screens/new-message-form'
import '@testing-library/jest-native/extend-expect'

describe('NewMessageForm', () => {
	describe('clicking send', () => {
		// Interaction
		it('clears the message field', () => {
			const { getByPlaceholderText, getByText } = render(<NewMessageForm />)

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
			const { getByPlaceholderText, getByText } = render(
				<NewMessageForm onSend={sendHandler} />,
			)

			fireEvent.changeText(getByPlaceholderText('Message'), 'Hello world')
			fireEvent.press(getByText('Send'))

			expect(sendHandler).toHaveBeenCalledWith(messageText)
		})
	})
})
