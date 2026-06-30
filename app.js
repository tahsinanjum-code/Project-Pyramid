// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Firestore
import {
  getFirestore,
  doc,
  setDoc
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
// Write a test document to Firestore
async function testFirestore() {
  try {
    await setDoc(doc(db, "test", "connection"), {
      message: "Hello Firestore!",
      time: new Date().toISOString()
    });

    console.log("✅ Test document written successfully!");
  } catch (error) {
    console.error("❌ Firestore write failed:", error);
  }
}

// Write a test document to Firestore
async function testFirestore() {

  console.log("Step 1 - Function started");

  try {

    console.log("Step 2 - About to write");

    await setDoc(doc(db, "test", "connection"), {
      message: "Hello Firestore!",
      time: new Date().toISOString()
    });

    console.log("Step 3 - Write successful");

  } catch (error) {

    console.error("Step 4 - Error");
    console.error(error);

  }

}

testFirestore();
