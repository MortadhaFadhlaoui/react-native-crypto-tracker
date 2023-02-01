import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Note } from '../types/types'

export type RootStackParamList = {
	Dreams: undefined
	Dream: { note: Note | undefined }
}

export type DreamScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Dream'
>

export type DreamsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Dreams'
>
