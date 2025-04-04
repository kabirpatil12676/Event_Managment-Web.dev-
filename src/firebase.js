import { initializeApp } from "firebase/app";
import { data } from "react-router-dom";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtwI21eoAto0lYBZSL40K3YoQ6szdPv94",
    authDomain: "event-management-bc274.firebaseapp.com",
    projectId: "event-management-bc274",
    storageBucket: "event-management-bc274.firebasestorage.app",
    messagingSenderId: "550494798297",
    appId: "1:550494798297:web:702202ca625d0a1c1819c8",
    databaseURL: "https://event-management-bc274-default-rtdb.firebaseio.com",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);