import { NoteActions } from './types'
import { Note } from '../../types/types'

export const getNotesAction = () => {
	return NoteActions.GET_ACTION()
}

export const addNoteAction = (note: Note) => {
	return NoteActions.ADD_ACTION(note)
}

export const removeNoteAction = (id: number) => {
	return NoteActions.REMOVE_ACTION(id)
}

export const updateNoteAction = (note: Note) => {
	return NoteActions.UPDATE_ACTION(note)
}
