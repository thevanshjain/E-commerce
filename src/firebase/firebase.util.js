import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbkPDYK9tunT_6N5hGVeYovSj70wcMti0",
    authDomain: "crwn-db-fdf14.firebaseapp.com",
    databaseURL: "https://crwn-db-fdf14.firebaseio.com",
    projectId: "crwn-db-fdf14",
    storageBucket: "crwn-db-fdf14.appspot.com",
    messagingSenderId: "756678964232",
    appId: "1:756678964232:web:afc8f4e995a2d6a1238dbd",
    measurementId: "G-8QRVR6CLDG"
};

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




