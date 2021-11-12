import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

const firebaseApp = firebase;

if (!firebaseApp.apps.length) {
    firebaseApp.initializeApp(firebaseConfig);
} else {
    firebaseApp.app();
}

export default firebaseApp;