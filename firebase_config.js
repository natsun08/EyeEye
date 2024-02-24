// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth,initializeAuth,initializeRecaptchaConfig, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANvIiVEQdxjTGOs0JF4vSxdWv9-R6vyLg",
  authDomain: "eyeeye-31840.firebaseapp.com",
  databaseURL: "https://eyeeye-31840-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eyeeye-31840",
  storageBucket: "eyeeye-31840.appspot.com",
  messagingSenderId: "616891630617",
  appId: "1:616891630617:web:a29015df351a237aebd688",
  measurementId: "G-Y5WJ0CTBT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
initializeRecaptchaConfig(auth);

export {app, analytics, auth}

