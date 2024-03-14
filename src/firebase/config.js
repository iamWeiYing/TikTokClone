// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8DgQsYBOHJvjR_89KjjlopACnU8pKWdc",
    authDomain: "tiktok-clone-d8dcf.firebaseapp.com",
    projectId: "tiktok-clone-d8dcf",
    storageBucket: "tiktok-clone-d8dcf.appspot.com",
    messagingSenderId: "994019086062",
    appId: "1:994019086062:web:a61627208836c4c694adff",
    measurementId: "G-4V5B85KKQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);