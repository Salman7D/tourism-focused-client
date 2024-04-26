import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF8XdXdJRTBP1-T_4r_sbQT3eQHrq8rHY",
  authDomain: "tourism-focused-auth.firebaseapp.com",
  projectId: "tourism-focused-auth",
  storageBucket: "tourism-focused-auth.appspot.com",
  messagingSenderId: "616276378215",
  appId: "1:616276378215:web:d18cf17faa1260ebb48ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;