import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGLzmwJwA2d5LZohZ5krm6pmnDsN3a4bA",
  authDomain: "superchat-022.firebaseapp.com",
  projectId: "superchat-022",
  storageBucket: "superchat-022.firebasestorage.app",
  messagingSenderId: "629058611689",
  appId: "1:629058611689:web:6953ae242ae48f70b84378",
  measurementId: "G-HHDSG1FXJR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
