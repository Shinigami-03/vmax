// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHBjr7UgltKBcXQc2EM0U9qDHv36be1YI",
    authDomain: "vmax-3a344.firebaseapp.com",
    projectId: "vmax-3a344",
    storageBucket: "vmax-3a344.appspot.com",
    messagingSenderId: "276741029911",
    appId: "1:276741029911:web:28256474ed0137f7555c52",
    measurementId: "G-EMB27GZZED"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth so it can be used in other files
export { auth };
