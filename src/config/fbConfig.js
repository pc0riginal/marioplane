import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6oR580Gt8s-lC-6kP5Q4x78UuzC1zvcc",
    authDomain: "marioplane.firebaseapp.com",
    databaseURL: "https://marioplane.firebaseio.com",
    projectId: "marioplane",
    storageBucket: "",
    messagingSenderId: "796894004413"
  };
  firebase.initializeApp(config);

export default firebase;


