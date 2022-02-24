import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const db = firebase.initializeApp(firebaseConfig).firestore();

export { db };
