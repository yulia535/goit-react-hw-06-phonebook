import { createAction } from '@reduxjs/toolkit'


const addContact = createAction('phonebook/add');
// const addContact = (data) => ({
//     type: types.ADD,
//     payload: {
//         ...data,
//     }
// })
const deleteContact = createAction('phonebook/delete');
// const deleteContact = (id) => ({
//     type: types.DELETE,
//     payload: id
// })
const chengeFilter = createAction('phonebook/filter');
// const chengeFilter = (value) => ({
//     type: types.FILTER,
//     payload: value
// })
// eslint-disable-next-line
export default  {addContact, deleteContact, chengeFilter}

