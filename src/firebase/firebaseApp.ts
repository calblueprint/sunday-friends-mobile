import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
  } from '@env';
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

const firebaseApp = firebase;

if (!firebaseApp.apps.length) {
    firebaseApp.initializeApp(firebaseConfig);
} else {
    firebaseApp.app();
}

export default firebaseApp;