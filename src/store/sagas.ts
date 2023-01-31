import { all } from 'redux-saga/effects'
import noteSaga from './note/sagas'

export default function* rootSaga() {
	yield all([noteSaga()])
}
