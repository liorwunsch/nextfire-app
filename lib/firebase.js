import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAbLW7J-gUUuh2ygeXpI2vhRM6GXZK3ehI",
    authDomain: "nextfire-935d9.firebaseapp.com",
    projectId: "nextfire-935d9",
    storageBucket: "nextfire-935d9.appspot.com",
    messagingSenderId: "899176204261",
    appId: "1:899176204261:web:479f6fcce888864a32910c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
