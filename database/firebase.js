import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC9O7GegCypxqy9wyn3en1n0EGtxY8f6bg",
  authDomain: "uas-leo.firebaseapp.com",
  projectId: "uas-leo",
  storageBucket: "uas-leo.appspot.com",
  messagingSenderId: "355089546968",
  appId: "1:355089546968:web:08603e0ac6ee6fcd23a1ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
