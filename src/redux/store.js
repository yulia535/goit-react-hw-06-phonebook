
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import contactsReducer from './reducer'
import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger];

 
const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware,
})
export default store;