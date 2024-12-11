// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1Rg3a5AUC_zs4VszvQ-ckDcpqTQf5tA",
  authDomain: "mealmates-b0543.firebaseapp.com",
  projectId: "mealmates-b0543",
  storageBucket: "mealmates-b0543.firebasestorage.app",
  messagingSenderId: "675810665323",
  appId: "1:675810665323:web:3c9b63c1cd44804138a22e",
  measurementId: "G-XB6BDQW22Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();