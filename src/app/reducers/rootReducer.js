import { combineReducers } from 'redux';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  modals: modalReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
});

export default rootReducer;
