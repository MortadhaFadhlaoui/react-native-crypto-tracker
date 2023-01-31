import React, { useState, ReactElement, useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
	addNoteAction,
	getNotesAction,
	removeNoteAction,
} from '../store/note/actions'
import { ApplicationState } from '../store/types'

export const NewMessageForm = ({
	onSend,
}: {
	onSend?: (inputText: string) => void
}): ReactElement => {
	const dispatch = useDispatch()

	const { notes } = useSelector((state: ApplicationState) => state.note)
	console.log(notes)
	const [inputText, setInputText] = useState('')

	useEffect(() => {
		/*	dispatch(
			addNoteAction({
				id: Date.now(),
				title: 'asas',
				body: 'First body',
			}),
		)
		dispatch(removeNoteAction(1675180873164))*/
		dispatch(getNotesAction())
	}, [])

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
