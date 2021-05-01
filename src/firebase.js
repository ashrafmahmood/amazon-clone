import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDqAJzqHFvgHLgVzi61muJih-MzK_DQVpY",
    authDomain: "clone-60a1b.firebaseapp.com",
    projectId: "clone-60a1b",
    storageBucket: "clone-60a1b.appspot.com",
    messagingSenderId: "58929597237",
    appId: "1:58929597237:web:70ae6a5473218f78a4da7c",
    measurementId: "G-KZV8QMZ8RQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
