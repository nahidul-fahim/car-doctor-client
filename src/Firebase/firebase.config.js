// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMG_-sIO1suT35E18KnygWG6hYMems-U",
  authDomain: "cars-doctor-demo-project.firebaseapp.com",
  projectId: "cars-doctor-demo-project",
  storageBucket: "cars-doctor-demo-project.appspot.com",
  messagingSenderId: "376548134119",
  appId: "1:376548134119:web:a1a40abd14e3b3a80ce642"
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;