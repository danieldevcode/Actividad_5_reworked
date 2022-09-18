// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDShudcU2zRtOlPULuxzabY2Jg9jUztynw",
  authDomain: "soy-haven-348517.firebaseapp.com",
  projectId: "soy-haven-348517",
  storageBucket: "soy-haven-348517.appspot.com",
  messagingSenderId: "971130641144",
  appId: "1:971130641144:web:b9863cc436c94b5492790d",
  measurementId: "G-0TGF218002",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
