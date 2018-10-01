import { combineReducers } from 'redux';
import modalReducer from '../../features/modals/modalReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  modals: modalReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
