import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ64_CJuaWJFiklZqYh2X_EYsf3vymGlQ",
  authDomain: "image-app-ts.firebaseapp.com",
  projectId: "image-app-ts",
  storageBucket: "image-app-ts.appspot.com",
  messagingSenderId: "84392786275",
  appId: "1:84392786275:web:ba679ad4c4fb37cd9b7b56",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
