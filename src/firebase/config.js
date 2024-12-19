import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8b05gTNR0I9gWABsfd9pDbdRs6N1Vzbo",
  authDomain: "bhuo-db.firebaseapp.com",
  projectId: "bhuo-db",
  storageBucket: "bhuo-db.firebasestorage.app",
  messagingSenderId: "307332639964",
  appId: "1:307332639964:web:ce0066ea20beb91570d819"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);