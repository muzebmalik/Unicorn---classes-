import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBvUTXp13dnTRVr2hVWikDccllxLAcm_-E",
  authDomain: "unicornclasses-56cd4.firebaseapp.com",
  projectId: "unicornclasses-56cd4",
  storageBucket: "unicornclasses-56cd4.firebasestorage.app",
  messagingSenderId: "592370600854",
  appId: "1:592370600854:web:94766611cca2350c296bb7",
  measurementId: "G-PT8SEJ6L65"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics }; 