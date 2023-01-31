import { NoteState } from './note/types'

export interface ApplicationState {
	note: NoteState
}

export interface ErrorPayload {
	isLoading: boolean
	error: Error | null
}
