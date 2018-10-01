import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqnjCew1FrGIbKBK_bu8qzCc1G5G2tF8k",
  authDomain: "pdx-pickups.firebaseapp.com",
  databaseURL: "https://pdx-pickups.firebaseio.com",
  projectId: "pdx-pickups",
  storageBucket: "pdx-pickups.appspot.com",
  messagingSenderId: "17255737028"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;