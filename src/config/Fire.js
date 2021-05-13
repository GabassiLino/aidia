import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAmQHerCe1vvB540kkNGZaJC2dJKVrAOVU',
    authDomain: 'aidia-ab0dd.firebaseapp.com',
    databaseURL: 'https://aidia-ab0dd.firebaseio.com',
    projectId:'aidia-ab0dd',
    storageBucket:'aidia-ab0dd.appspot.com',
    messagingSenderId:'682019223029',
    appId:'1:682019223029:web:d1e2969701e58d0fff9cbc',
    measurementId: "G-TXGCQ85Y7E"
};

const fire = firebase.initializeApp(config);
export default fire;