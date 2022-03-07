import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAH14DQPDcEPF5AEVhxGhvzRvLqMHLSUZ0",
  authDomain: "toy-store-2f8bc.firebaseapp.com",
  databaseURL: "https://toy-store-2f8bc-default-rtdb.firebaseio.com",
  projectId: "toy-store-2f8bc",
  storageBucket: "toy-store-2f8bc.appspot.com",
  messagingSenderId: "678282002518",
  appId: "1:678282002518:web:97e8ec03c5c670a5b97bf7",
  measurementId: "G-67W3982EPW",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, timestamp, storage };
