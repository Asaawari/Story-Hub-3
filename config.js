import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDvEwU7kki9GlibeXz0pdaOGsT14XrCtpg",
    authDomain: "story-hub-12c75.firebaseapp.com",
    databaseURL: "https://story-hub-12c75.firebaseio.com",
    projectId: "story-hub-12c75",
    storageBucket: "story-hub-12c75.appspot.com",
    messagingSenderId: "242997514856",
    appId: "1:242997514856:web:971c3a92a052ca7ed861dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();