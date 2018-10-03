import moment from 'moment';

export const updateProfile = user => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    if (user.dateOfBirth) {
      user.dateOfBirth = moment(user.dateOfBirth).toDate();
    }
    try {
      await firebase.updateProfile(user);
    } catch (error) {
      console.log(error);
    }
  };
};