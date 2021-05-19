import firebase from 'firebase';
import "firebase/database";

const config = {
    apiKey: "AIzaSyCbmamFfzcAnuNmkxmhvxd1lPDfskadoYM",
    authDomain: "garden-project-f3386.firebaseapp.com",
    projectId: "garden-project-f3386",
    storageBucket: "garden-project-f3386.appspot.com",
    messagingSenderId: "1030299604458",
    appId: "1:1030299604458:web:169c824bb7c375999c0e93",
    measurementId: "G-KBKZHN86QH"
}

const db = firebase.initializeApp(config);
export default db;