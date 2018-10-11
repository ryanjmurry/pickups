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

export const registerForPickupGame = pickup => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const uid = getState().firebase.auth.uid
    const attendee = {
      going: true,
      joinDate: Date.now(),
      photoURL: photoURL || `https://api.adorable.io/avatars/80/${uid}.png`,
      displayName: user.displayName,
      host: false
    };
    try {
      await firestore.update(`pickups/${pickup.id}`, {
        [`attendees.${user.uid}`]: attendee
      });
      await firestore.set(`pickup_attendee/${pickup.id}_${user.uid}`, {
        pickupId: pickup.id,
        userUid: user.uid,
        pickupDate: pickup.date,
        host: false
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const unregisterForPickupGame = pickup => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    console.log(pickup.id)
    console.log(user.uid)
    try {
      await firestore.update(`pickups/${pickup.id}`, {
        [`attendees.${user.uid}`]: firestore.FieldValue.delete()
      });
      await firestore.delete(`pickup_attendee/${pickup.id}_${user.uid}`);
    } catch (error) {
      console.log(error);
    }
  };
};
