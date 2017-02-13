//add the firebase lib
import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGE_SENDER_ID,
    };
    firebase.initializeApp(config);
} catch (e) {

}

//add a provider for for google sign in
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export var firebaseRef = firebase.database().ref();
//lets exprt a ref for our bucket
export var storageRef  = firebase.storage().ref();
export default firebase;
