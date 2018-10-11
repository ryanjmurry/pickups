import moment from 'moment';

// converts object to array and assigns id as the 0th position in that new array
export const objectToArray = object => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
  }
}

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
