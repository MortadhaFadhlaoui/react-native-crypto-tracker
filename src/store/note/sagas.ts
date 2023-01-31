import { AxiosResponse } from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'
import { ActionsTypes, NoteActions } from './types'
import { getNotes } from '../../services/note'
import { Note } from '../../types/note'

function* GET_ACTION() {
	try {
		const response: AxiosResponse<Note> = yield call(getNotes)
		yield put({
			type: NoteActions.GET_ACTION.toString(),
			payload: response.data,
		})
	} catch (error) {
		console.error(error)
	}
}

export default function* noteSaga() {
	yield takeEvery(ActionsTypes.GET_ACTION, GET_ACTION)
}
