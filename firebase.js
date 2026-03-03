import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEv6q7QvI7bz5fqAxpbn7oGvksoC7a6a0",
  authDomain: "exhibit-a-ef081.firebaseapp.com",
  projectId: "exhibit-a-ef081",
  storageBucket: "exhibit-a-ef081.firebasestorage.app",
  messagingSenderId: "388796153041",
  appId: "1:388796153041:web:60c874a7ccf2066cb2d9f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
