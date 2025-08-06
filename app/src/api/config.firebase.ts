import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import * as firebaseAuth from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAz5KSPYKTqJhX4VzRJgGl1L1v0-oaI7uM",
  authDomain: "fpay-71f84.firebaseapp.com",
  projectId: "fpay-71f84",
  storageBucket: "fpay-71f84.firebasestorage.app",
  messagingSenderId: "163712727936",
  appId: "1:163712727936:web:f5796cb50a80649cc15f65",
  measurementId: "G-HDCRGG160Z"
};

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;
const initializeAuth = (firebaseAuth as any).initializeAuth;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: reactNativePersistence(ReactNativeAsyncStorage),
});

//const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
