// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Firestore
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXRwQuyO3jvj8aHyb90lbl90pGLFJ1VP0",
  authDomain: "project-pyramid-35343.firebaseapp.com",
  projectId: "project-pyramid-35343",
  storageBucket: "project-pyramid-35343.firebasestorage.app",
  messagingSenderId: "500227816045",
  appId: "1:500227816045:web:0c3e5e839b947012421d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

console.log("✅ Firebase Connected Successfully!");
console.log("✅ Firestore Connected Successfully!");
