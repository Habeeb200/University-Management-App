// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASqHfqjYAT_wxjGvROBHDYn8ZSHd2jqzU",
  authDomain: "schoolapp-7c187.firebaseapp.com",
  projectId: "schoolapp-7c187",
  storageBucket: "schoolapp-7c187.appspot.com",
  messagingSenderId: "509613991292",
  appId: "1:509613991292:web:a2b6a6fcee9e6b3825f0f9",
  measurementId: "G-KVLN2V6D5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db}
