// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMzztX-SeA_4eoknxzelw6YCvnQuO4ytY",
    authDomain: "e-commerce-bbe44.firebaseapp.com",
    projectId: "e-commerce-bbe44",
    storageBucket: "e-commerce-bbe44.appspot.com",
    messagingSenderId: "384159622086",
    appId: "1:384159622086:web:ec57ded0032370baf8c8c7",
    measurementId: "G-5TVD7NJWSP"
  };
  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth= getAuth(app);


export  { db, auth };