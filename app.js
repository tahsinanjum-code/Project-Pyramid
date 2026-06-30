// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Firestore
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc
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
const db = getFirestore(app);

console.log("✅ Firebase Connected");
console.log("✅ Firestore Connected");

// Make Firestore available everywhere
window.db = db;

// Firestore helper methods
window.FirestoreService = {

  async save(collectionName, id, data) {
    await setDoc(doc(db, collectionName, id), data);
  },

  async load(collectionName, id) {
    const snap = await getDoc(doc(db, collectionName, id));
    return snap.exists() ? snap.data() : null;
  },

  async loadAll(collectionName) {
    const snap = await getDocs(collection(db, collectionName));
    return snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
  },

  async delete(collectionName, id) {
    await deleteDoc(doc(db, collectionName, id));
  }

};

console.log("✅ Firestore Service Ready");
console.log("VERSION 2 - " + new Date().toLocaleTimeString());
