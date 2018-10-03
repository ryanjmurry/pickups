export const updateProfile = user => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.updateProfile(user);
    } catch (error) {
      console.log(error);
    }
  };
};