// src/store.js (or wherever your store file is located)
import { createStore } from 'redux';  // Correct way to import createStore
import RooTred from './redux/reduser/Main';  // Your root reducer

// Create the Redux store
const store = createStore(RooTred);

export default store;
