import { initializeApp, getApps, getApp } from "firebase/app";
//@ts-ignore
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXnUl7jZqJDvAjDJ2MJZgx2VDJDvCIFPA",
    authDomain: "campusminds.firebaseapp.com",
    projectId: "campusminds",
    storageBucket: "campusminds.appspot.com",
    messagingSenderId: "380922165054",
    appId: "1:380922165054:web:461b1550d18ff8086cde6f",
    measurementId: "G-06PPHCDVRY"
};

// Check if Firebase is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
