import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDapNT1bxYTMLrXCmnHoICziMs9DEFBTFQ",
  authDomain: "jerins-parlour-b8847.firebaseapp.com",
  projectId: "jerins-parlour-b8847",
  storageBucket: "jerins-parlour-b8847.appspot.com",
  messagingSenderId: "831198751308",
  appId: "1:831198751308:web:9b441969cc9d28f89022e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;