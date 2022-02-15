// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2b5m7Qz90SYz1I3OeQcfjtY7M2CVmpk",
  authDomain: "authentication-firebase-340ce.firebaseapp.com",
  projectId: "authentication-firebase-340ce",
  storageBucket: "authentication-firebase-340ce.appspot.com",
  messagingSenderId: "722728634753",
  appId: "1:722728634753:web:d3a8684c63caebe280c080",
  measurementId: "G-FXY87N687J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };