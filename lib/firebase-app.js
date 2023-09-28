import { initializeApp } from "firebase/app";

//web app's Firebase config loaded from .enc.local to keep it secret (not in repo)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp( firebaseConfig );

export default app;