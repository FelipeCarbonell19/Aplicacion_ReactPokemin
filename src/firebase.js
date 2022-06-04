
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgY9f16W0o-CqqamvICqxbdcQNsftMG3k",
  authDomain: "pokeapp-8cbe2.firebaseapp.com",
  projectId: "pokeapp-8cbe2",
  storageBucket: "pokeapp-8cbe2.appspot.com",
  messagingSenderId: "222581828208",
  appId: "1:222581828208:web:ce6300fd126c1c87a9e2b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}

