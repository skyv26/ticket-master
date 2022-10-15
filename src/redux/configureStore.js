import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ticketSlice from './ticketSlice';

const reducer = combineReducers({
  tickets: ticketSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
