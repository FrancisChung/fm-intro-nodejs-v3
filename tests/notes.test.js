import {jest} from '@jest/globals'

jest.unstable_mockModule('../src/db.js', () => ({
    insertDB: jest.fn(),
    getDB: jest.fn(),
    saveDB: jest.fn(),
}))

const {insertDB, getDB, saveDB} = await import('../src/db.js')
const {newNote, getAllNotes, removeNote } = await import('../src/notes.js')

beforeEach(() => {
    insertDB.mockClear()
    getDB.mockClear()
    saveDB.mockClear()
})


// const add = (num, num2) => num + num2
//
// test('add takes 2 numbers and returns a sum', () => {
//     const result = add(1, 2)
//
//     expect(result).toBe(3)
// })