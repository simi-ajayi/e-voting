// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCCO_I525SBSYPTf4AQl3dUaO4I1GflU9I",
    authDomain: "eksgmipu.firebaseapp.com",
    databaseURL: "https://eksgmipu-default-rtdb.firebaseio.com",
    projectId: "eksgmipu",
    storageBucket: "eksgmipu.appspot.com",
    messagingSenderId: "151307086520",
    appId: "1:151307086520:web:3249da8cc3674a91b8224d",
    measurementId: "G-XDNPTDX25E"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);