import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgXzADUvPAkMuCxDsqPDm7lrB5mNJFtN4",
  authDomain: "chamalink-4ca76.firebaseapp.com",
  databaseURL: "https://chamalink-4ca76-default-rtdb.firebaseio.com",
  projectId: "chamalink-4ca76",
  storageBucket: "chamalink-4ca76.appspot.com",
  messagingSenderId: "1047642386748",
  appId: "1:1047642386748:web:aeb1acad08397469d4ae39",
  measurementId: "G-5NETK6N84M"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Intialize variables
const auth = firebaseApp.auth();
const realtimeDatabase = firebaseApp.database();

export { realtimeDatabase, auth};