import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

const addContacts = (state, action) => {
    const normalizedData = action.payload.name.toLowerCase();
    
        const iterateName = state.find(contact =>
            contact.name.toLowerCase().includes(normalizedData),
        );
        if (iterateName === undefined) {
            return [...state, action.payload];
        } else {
            alert(`${iterateName.name} is already in contacts`);
            return state;
        }
};
      
const items = createReducer(initialState, {
    [actions.addContact]: addContacts,
    [actions.deleteContact]:(state, action) => state.filter(({id}) => id !== action.payload)
})
const filter = createReducer('', {
    [actions.chengeFilter]: (_, action) => action.payload,
})
export default combineReducers({
    items,
    filter
})


// const items = (state = initialState , {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             {
               
//              const normalizedData = payload.name.toLowerCase();
    
//             const iterateName = state.find(contact =>
//              contact.name.toLowerCase().includes(normalizedData),
//              );
//     if (iterateName === undefined) {
//      return [...state, payload];
//     } else {
//         alert(`${iterateName.name} is already in contacts`);
//         return state;
    
//   };
//             }
                
            
//         case types.DELETE:
//             return state.filter(({id}) => id !== payload)
//         default:
//             return state;
//     }
    
// }

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.FILTER:
//             return  payload;
        
//         default:
//             return state;
//     }
// }
