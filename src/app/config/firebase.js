import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// initialize firebase instance with config from console
firebase.initializeApp(firebaseConfig);

// initialize firestore
firebase.firestore(); //

export default firebase;
