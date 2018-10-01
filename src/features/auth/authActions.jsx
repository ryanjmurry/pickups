import { SubmissionError } from 'redux-form';

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
    } catch (error) {
      throw new SubmissionError({
        _error: 'Login Failed'
      });
    }
  };
};

export const signUpUser = user => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      // creates a new firebase user in firebase.auth
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      // updates the new user's displayName to be the name coming in from the form
      await createdUser.updateProfile({
        displayName: user.name
      });

      // creates a new user object with the name given in the form and a serverTimestamp to get date joined
      let newUser = {
        displayName: user.name,
        dateJoined: firestore.FieldValue.serverTimestamp()
      };

      // creates new document in the users collection in firestore with the same id as the createdUser id
      await firestore.set(`users/${createdUser.uid}`, { ...newUser });
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const socialLogin = selectedProvider => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      // logins firebase user with social login
      // set socal login provider and specifies that the type of login it should be should be a popup
      let user = await firebase.login({
        provider: selectedProvider,
        type: 'popup'
      });

      //checks against uder object created if they are a new user
      // if they are a new user, this specifies which data should be stored in firestore under the users collection
      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          createdAt: firestore.FieldValue.serverTimestamp()
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
