// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtwI21eoAto0lYBZSL40K3YoQ6szdPv94",
  authDomain: "event-management-bc274.firebaseapp.com",
  databaseURL: "https://event-management-bc274-default-rtdb.firebaseio.com",
  projectId: "event-management-bc274",
  storageBucket: "event-management-bc274.firebasestorage.app",
  messagingSenderId: "550494798297",
  appId: "1:550494798297:web:702202ca625d0a1c1819c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
