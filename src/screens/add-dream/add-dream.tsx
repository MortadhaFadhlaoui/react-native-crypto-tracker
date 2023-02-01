import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { styles } from './add-dream.styles'
import { DreamScreenProps } from '../../navigation/types'
import { addNoteAction, updateNoteAction } from '../../store/note/actions'
import { WHITE } from '../../theme/colors'
import { DefaultStyles } from '../../theme/styles'
import { DreamType } from '../../types/enum'

export const DreamScreen = ({ navigation, route }: DreamScreenProps) => {
	const dispatch = useDispatch()
	const note = route.params?.note
	const [value, setValue] = useState<string>(note?.body ?? '')

	const handleConfirm = () => {
		dispatch(
			!note
				? // is adding
				  addNoteAction({
						id: Date.now(),
						type: DreamType.GOOD,
						body: value,
				  })
				: // is updating
				  updateNoteAction({
						...note,
						body: value,
				  }),
		)
		navigation.navigate('Dreams')
	}

	return (
		<View style={DefaultStyles.container}>
			<TextInput
				onChangeText={setValue}
				style={{ backgroundColor: WHITE }}
				value={value}
				multiline
				placeholder="Write your dream ..."
			/>
			<Button
				mode="elevated"
				disabled={value === ''}
				labelStyle={styles.labelStyle}
				style={styles.confirm}
				// eslint-disable-next-line react-native/no-raw-text
				onPress={handleConfirm}>
				Confirm
			</Button>
		</View>
	)
}
