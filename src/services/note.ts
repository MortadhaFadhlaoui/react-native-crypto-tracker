import axios from 'axios'
import { Note } from '../types/note'

export const getNotes = (): Promise<Note> => {
	return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}
