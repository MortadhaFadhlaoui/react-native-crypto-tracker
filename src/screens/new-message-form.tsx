import React, { useState, ReactElement } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

export const NewMessageForm = ({
	onSend,
}: {
	onSend?: (inputText: string) => void
}): ReactElement => {
	const [inputText, setInputText] = useState('')

	const handleSend = () => {
		if (onSend) {
			onSend(inputText)
		}
		setInputText('')
	}

	return (
		<View>
			<TextInput
				placeholder="Message"
				value={inputText}
				onChangeText={setInputText}
			/>
			<Pressable onPress={handleSend}>
				<Text>Send</Text>
			</Pressable>
		</View>
	)
}
