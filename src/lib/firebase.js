import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNciTK7GwpnM3vTjc89Ba9LvipSXFdklg",
  authDomain: "poc-challenge-36c44.firebaseapp.com",
  projectId: "poc-challenge-36c44",
  storageBucket: "poc-challenge-36c44.appspot.com",
  messagingSenderId: "156971086530",
  appId: "1:156971086530:web:85a3caee44cc51f086c15b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
