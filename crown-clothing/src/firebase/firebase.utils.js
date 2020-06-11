import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyBtnzWXewoEzSaukvhbfk2lDbLmvnFYM_Q",
    authDomain: "crwn-db-fb5dc.firebaseapp.com",
    databaseURL: "https://crwn-db-fb5dc.firebaseio.com",
    projectId: "crwn-db-fb5dc",
    storageBucket: "crwn-db-fb5dc.appspot.com",
    messagingSenderId: "29939490756",
    appId: "1:29939490756:web:48049dc8fd528a526e4e91",
    measurementId: "G-L81R37X6SP"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;