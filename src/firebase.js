import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ7_EnoWWldr6uqU0L3Mfl6ATAVQm1HdM",
  authDomain: "fir-reacttutcrud.firebaseapp.com",
  databaseURL: "https://fir-reacttutcrud-default-rtdb.firebaseio.com",
  projectId: "fir-reacttutcrud",
  storageBucket: "fir-reacttutcrud.appspot.com",
  messagingSenderId: "790607403737",
  appId: "1:790607403737:web:c213a8b774044cb7b83cc8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()