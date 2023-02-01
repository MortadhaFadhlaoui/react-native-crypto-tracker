import {
	get,
	ref,
	set,
	remove,
	update,
	DatabaseReference,
	DataSnapshot,
} from 'firebase/database'
import db from '../../firebase.config'
import { FirebaseResponse, Note } from '../types/types'

const dbRef = (id: number | null): DatabaseReference => {
	if (id) return ref(db, `notes/${id}`)
	return ref(db, 'notes')
}

export const getNotes = async (): Promise<DataSnapshot> => {
	return await get(dbRef(null))
}

export const addNote = async (note: Note): Promise<void> => {
	return await set(dbRef(note.id), note)
}

export const updateNote = async (note: Note): Promise<void> => {
	console.log(note)
	return await update(dbRef(note.id), note)
}

export const removeNote = async (id: number): Promise<void> => {
	return await remove(dbRef(id))
}

export const findNoteIndexById = (
	notes: Note[],
	id: number,
): { notes: Note[]; index: number } => {
	// Create new array with new ref
	const newNotes = [...notes]
	const index = newNotes.findIndex(note => note.id === id)
	return {
		notes: newNotes,
		index,
	}
}

export const mapFirebaseResponse = (
	firebaseResponse: FirebaseResponse<Note>[],
) => {
	return Object.values(firebaseResponse).map(item => item)
}
