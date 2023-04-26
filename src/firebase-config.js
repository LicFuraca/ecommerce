import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaiLnG-qFsJDKhX1XdYeHBZlboP1cBGpE",
  authDomain: "eflowcommerce-c3083.firebaseapp.com",
  projectId: "eflowcommerce-c3083",
  storageBucket: "eflowcommerce-c3083.appspot.com",
  messagingSenderId: "448962823843",
  appId: "1:448962823843:web:d5e05569c49847d4d36116",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
