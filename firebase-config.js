// استيراد Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// إعدادات Firebase من مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyAxRBvOUI13kMrtNucBV_43qlaWP6ZkyKQ",
  authDomain: "ai-hub-egypt-ss.firebaseapp.com",
  projectId: "ai-hub-egypt-ss",
  storageBucket: "ai-hub-egypt-ss.firebasestorage.app",
  messagingSenderId: "918245579159",
  appId: "1:918245579159:web:dcfd476de1f37d4b8a0cd2",
  measurementId: "G-JDTJXCQ4VJ"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };