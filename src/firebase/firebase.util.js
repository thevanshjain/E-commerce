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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
   
    if(!snapShot.exists) {
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error creating user',error.message);
        }
        }
        return userRef;
    };


export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectsToAdd.forEach( obj=> {
        const newDocRef=collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    return await batch.commit()
};

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedCollection.reduce((accumulator, collection)=>{
        accumulator[collection.title.toLowerCase()]= collection;
        return accumulator;
    },{});
};


export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




