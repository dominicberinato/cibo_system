
import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAq8VqKWf0oizT_NyJHH_-5LkTXnqunqa0",
      authDomain: "ciboproperty.firebaseapp.com",
      databaseURL: "https://ciboproperty.firebaseio.com",
      storageBucket: "ciboproperty.appspot.com",
      messagingSenderId: "249867809354"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
