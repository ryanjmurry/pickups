import { LOGOUT_USER } from './authConstants';

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER
  };
};
