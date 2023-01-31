import React, { useState, ReactElement } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../store/types'

export const NewMessageForm = ({
	onSend,
}: {
	onSend?: (inputText: string) => void
}): ReactElement => {
	const note = useSelector((state: ApplicationState) => state.note)
	console.log(note)
	const [inputText, setInputText] = useState('')

	const handleSend = () => {
		if (onSend) {
			onSend(inputText)
		}
		setInputText('')
	}

	return (
		<View>
			<Pressable onPress={handleSend}>
				<Text>Send</Text>
			</Pressable>
		</View>
	)
}
