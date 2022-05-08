import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDphGKsLjcTHnCmaVN_gIY7sKKJNoJHGtE",
  authDomain: "creando-oportunidades-8a8c1.firebaseapp.com",
  projectId: "creando-oportunidades-8a8c1",
  storageBucket: "creando-oportunidades-8a8c1.appspot.com",
  messagingSenderId: "458162695102",
  appId: "1:458162695102:web:5bc02eda944cd9e01227ef",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
