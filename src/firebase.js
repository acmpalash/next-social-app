// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "acm-nextjs-social.firebaseapp.com",
  projectId: "acm-nextjs-social",
  storageBucket: "acm-nextjs-social.firebasestorage.app",
  messagingSenderId: "978215702923",
  appId: "1:978215702923:web:edb1e61c637baf756bdf8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
