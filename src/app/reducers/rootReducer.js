import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  form: FormReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
