// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuUfheZQCa3XEfuLJLy__tMq5KrhxyPKM",
  authDomain: "wanderlust-3daf6.firebaseapp.com",
  projectId: "wanderlust-3daf6",
  storageBucket: "wanderlust-3daf6.appspot.com",
  messagingSenderId: "383262728715",
  appId: "1:383262728715:web:b1c21c94043b6d813f1d0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
