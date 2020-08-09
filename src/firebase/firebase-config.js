import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBn0LZZqt6gmOaBoiph_Xry_sdzajGJ_Yk",
    authDomain: "journal-react-app.firebaseapp.com",
    databaseURL: "https://journal-react-app.firebaseio.com",
    projectId: "journal-react-app",
    storageBucket: "journal-react-app.appspot.com",
    messagingSenderId: "374690336417",
    appId: "1:374690336417:web:521ea34fe4d0f176f82ae0"
};
 
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export {
    db,
    googleAuthProvider,
    firebase
}