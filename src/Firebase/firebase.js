import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIdu_qMYXN8YJOvmk8NdcDc5K30R5eCmg",
  authDomain: "project-2-321b9.firebaseapp.com",
  databaseURL: "https://project-2.firebaseio.com",
  projectId: "project-2-321b9",
  storageBucket: "project-2-321b9.appspot.com",
  messagingSenderId: "637908496727",
  appId: "2:637908496727:web:a4284b4c99e329d5",
  measurementId: "G-9VP01NDSXJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);