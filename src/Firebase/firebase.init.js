import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzKmu00K6yJ07I33kUxuKd4y8VFJgK00Y",
  authDomain: "gadget-freak-96a3d.firebaseapp.com",
  projectId: "gadget-freak-96a3d",
  storageBucket: "gadget-freak-96a3d.appspot.com",
  messagingSenderId: "484868377705",
  appId: "1:484868377705:web:85c19a8e0781405c37e6f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;