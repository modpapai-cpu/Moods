import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseConfigured = Object.values(config).every(Boolean);
const app = firebaseConfigured ? initializeApp(config) : null;

export const auth = app ? getAuth(app) : null;
const databaseURL = import.meta.env.VITE_FIREBASE_DATABASE_URL;
export const databaseConfigured = Boolean(app && databaseURL);
export const database = databaseConfigured ? getDatabase(app, databaseURL) : null;
export const storage = app ? getStorage(app) : null;
export const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
