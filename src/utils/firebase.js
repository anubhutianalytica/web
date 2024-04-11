// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqpc4dpiFTDn8FHYhlU0x3o7vS_gldMfA",
  authDomain: "anubhuti-website.firebaseapp.com",
  projectId: "anubhuti-website",
  storageBucket: "anubhuti-website.appspot.com",
  messagingSenderId: "612942568950",
  appId: "1:612942568950:web:e0a19b4d10a9b7f663bbd7",
  measurementId: "G-K2RNZT0ZME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);