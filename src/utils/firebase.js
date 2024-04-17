// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE8trQSXYG2jfEorSxOD0wjeTibc4ojkM",
  authDomain: "netflixgpt-f499c.firebaseapp.com",
  projectId: "netflixgpt-f499c",
  storageBucket: "netflixgpt-f499c.appspot.com",
  messagingSenderId: "310854927032",
  appId: "1:310854927032:web:958756218c4121ea84ea4d",
  measurementId: "G-N5XM1WMR4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()  // Whenever you called api whether it is  createrUserWithEmailAndPassword  so we keeping this file here and we are centerling accessing anywhere we don,t want to write again and again while doing authentication