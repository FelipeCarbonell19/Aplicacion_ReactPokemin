
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB6ZswoyP91AwQ4V-kUqtJRETnGuOS8BY",
  authDomain: "pokeapp-2216c.firebaseapp.com",
  projectId: "pokeapp-2216c",
  storageBucket: "pokeapp-2216c.appspot.com",
  messagingSenderId: "355670371515",
  appId: "1:355670371515:web:c243f39253dc0511e30d9e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}

