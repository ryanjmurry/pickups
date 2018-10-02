import moment from 'moment';

// destructures pickup received from PickupForm and adds additional information to it as it is initially created
export const createNewPickup = (user, photoURL, pickup) => {
  pickup.date = moment(pickup.date).toDate();
  return {
    ...pickup,
    hostUid: user.uid,
    hostedBy: user.displayName,
    currentCapacity: 1,
    hostPhotoURL: photoURL || '/assets/user.png',
    created: Date.now(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: Date.now(),
        photoURL: photoURL || '/assets/user.png',
        displayName: user.displayName,
        host: true
      }
    }
  };
};
