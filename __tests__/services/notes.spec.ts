import { findNoteIndexById } from '../../src/services/note'
import { DreamType } from '../../src/types/enum'
import { Note } from '../../src/types/types'

// mock
const notes: Note[] = [{ id: 1, body: 'test1', type: DreamType.GOOD }]

// scenarios
describe('findNoteIndexById', () => {
	it('returns the index note', () => {
		const result = findNoteIndexById(notes, 1)

		const expected = 0
		expect(result).toEqual(expected)
	})

	it('returns the -1 - note not found', () => {
		const result = findNoteIndexById(notes, 2)

		const expected = -1

		expect(result).toEqual(expected)
	})
})
