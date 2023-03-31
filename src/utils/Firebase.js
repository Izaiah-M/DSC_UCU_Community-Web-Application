import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

// We first initialize the app with the configurations
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDCnMbDQnsjbxfYHS9tealE3Wy6_M1smy8",
  authDomain: "dsc-ucu-community.firebaseapp.com",
  projectId: "dsc-ucu-community",
  storageBucket: "dsc-ucu-community.appspot.com",
  messagingSenderId: "322086174839",
  appId: "1:322086174839:web:807263250b17a13aac0672",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;
