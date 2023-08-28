import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './contacts/filterSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});

export default rootReducer;

