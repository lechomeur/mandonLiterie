// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeIh86NDopTzD80u29ddYxJYSN6_-4iDg",
  authDomain: "madonliterie.firebaseapp.com",
  databaseURL: "https://madonliterie-default-rtdb.firebaseio.com",
  projectId: "madonliterie",
  storageBucket: "madonliterie.firebasestorage.app",
  messagingSenderId: "310452281250",
  appId: "1:310452281250:web:25b81867b2872d087c9cfb",
  measurementId: "G-BGJJWSFNY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);