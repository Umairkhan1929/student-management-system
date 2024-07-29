// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDPD8sDKeDVa5V0AeoYIXeesQsNcBApqY",
  authDomain: "student-management-syste-39caa.firebaseapp.com",
  projectId: "student-management-syste-39caa",
  storageBucket: "student-management-syste-39caa.appspot.com",
  messagingSenderId: "939566341197",
  appId: "1:939566341197:web:e8ca99d07ce82a3dc21004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
const db = getFirestore(app);

export { db }