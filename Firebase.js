import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdbPyL6H3SwkvsuOVTE5gpSY5ZQEZ7rX8",
  authDomain: "rnfirebaseauth-905c9.firebaseapp.com",
  projectId: "rnfirebaseauth-905c9",
  storageBucket: "rnfirebaseauth-905c9.appspot.com",
  messagingSenderId: "294552225977",
  appId: "1:294552225977:web:f738855c99fa93ba71b368",
  measurementId: "G-2BRBL052EN",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();
export default Firebase;

db.settings({
  timestampsInSnapshots: true,
});
