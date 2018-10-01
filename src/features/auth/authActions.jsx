import { SubmissionError } from 'redux-form';

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
    } catch (error) {
      throw new SubmissionError({
        _error: 'Login Failed'
      })
    }
  };
};
