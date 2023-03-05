import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDJHaqN3MnrHnHEM3CNOg-Q4eV70d4fLkQ",
    authDomain: "unichat-b1497.firebaseapp.com",
    projectId: "unichat-b1497",
    storageBucket: "unichat-b1497.appspot.com",
    messagingSenderId: "858154471325",
    appId: "1:858154471325:web:f8ff2ebb8be77f608a6974"
  }).auth();