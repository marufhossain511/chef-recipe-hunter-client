// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMRv6pSahFOht-OKCebYkblCWhdSmi_TM",
  authDomain: "assignment-10-chef-recipie.firebaseapp.com",
  projectId: "assignment-10-chef-recipie",
  storageBucket: "assignment-10-chef-recipie.appspot.com",
  messagingSenderId: "706082365187",
  appId: "1:706082365187:web:5074d45b2ea3a967fcd336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app