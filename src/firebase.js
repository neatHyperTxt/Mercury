import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA8RHIN4QXGdU-JgI1OgVqWp06ZXOvCToY",
  authDomain: "mercury-33dde.firebaseapp.com",
  projectId: "mercury-33dde",
  storageBucket: "mercury-33dde.appspot.com",
  messagingSenderId: "312030181950",
  appId: "1:312030181950:web:93e37ecade448d81836f6f",
  measurementId: "G-Y1HXKV8T1N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };