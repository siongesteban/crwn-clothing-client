import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { env } from './env';

const config = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  appId: env.REACT_APP_FIREBASE_APP_ID,
  authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase, auth, firestore, signInWithGoogle };
