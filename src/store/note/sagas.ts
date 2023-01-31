import { DataSnapshot } from 'firebase/database'
import { put, takeEvery, call, select } from 'redux-saga/effects'
import { ActionsTypes, NoteActions, NoteState } from './types'
import {
	addNote,
	findNoteIndexById,
	getNotes,
	mapFirebaseResponse,
	removeNote,
	updateNote,
} from '../../services/note'

function* GET_ACTION() {
	try {
		const data: DataSnapshot = yield call(getNotes)
		const notes = mapFirebaseResponse(data.val())

		yield put({
			type: NoteActions.GET_ACTION_SUCCESS.toString(),
			payload: notes,
		})
	} catch (error) {
		yield put({
			type: NoteActions.GET_ACTION_FAILED.toString(),
			payload: error,
		})
	}
}

function* ADD_ACTION({
	payload: newNote,
}: ReturnType<typeof NoteActions.ADD_ACTION>) {
	try {
		yield call(addNote, newNote)
		const { notes } = yield select(state => state.notes)

		yield put({
			type: NoteActions.GET_ACTION_SUCCESS.toString(),
			payload: [newNote, ...notes],
		})
		yield put({
			type: NoteActions.ADD_ACTION_SUCCESS.toString(),
		})
	} catch (error) {
		yield put({
			type: NoteActions.ADD_ACTION_FAILED.toString(),
			payload: error,
		})
	}
}

function* REMOVE_ACTION({
	payload: id,
}: ReturnType<typeof NoteActions.REMOVE_ACTION>) {
	try {
		yield call(removeNote, id)
		const { notes }: NoteState = yield select(state => state.notes)

		const { notes: newNotes, index } = findNoteIndexById(notes, id)

		// delete note
		if (index > -1) {
			newNotes.splice(index, 1)
		}

		yield put({
			type: NoteActions.GET_ACTION_SUCCESS.toString(),
			payload: newNotes,
		})
		yield put({
			type: NoteActions.REMOVE_ACTION_SUCCESS.toString(),
		})
	} catch (error) {
		yield put({
			type: NoteActions.REMOVE_ACTION_FAILED.toString(),
			payload: error,
		})
	}
}

function* UPDATE_ACTION({
	payload: updatedNote,
}: ReturnType<typeof NoteActions.UPDATE_ACTION>) {
	try {
		yield call(updateNote, updatedNote)
		const { notes }: NoteState = yield select(state => state.notes)

		const { notes: newNotes, index } = findNoteIndexById(notes, updatedNote.id)

		// update note
		if (index > -1) {
			newNotes[index] = updatedNote
		}
		yield put({
			type: NoteActions.UPDATE_ACTION_SUCCESS.toString(),
		})
	} catch (error) {
		yield put({
			type: NoteActions.UPDATE_ACTION_FAILED.toString(),
			payload: error,
		})
	}
}

export default function* noteSaga() {
	yield takeEvery(ActionsTypes.GET_ACTION, GET_ACTION)
	yield takeEvery(ActionsTypes.ADD_ACTION, ADD_ACTION)
	yield takeEvery(ActionsTypes.REMOVE_ACTION, REMOVE_ACTION)
	yield takeEvery(ActionsTypes.UPDATE_ACTION, UPDATE_ACTION)
}
