import { initializeApp, getApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA87QnnVUvFTwsY0crmPqQHDEEAR61VbnM",
  authDomain: "authentication-a9950.firebaseapp.com",
  projectId: "authentication-a9950",
  storageBucket: "authentication-a9950.appspot.com",
  messagingSenderId: "496392314323",
  appId: "1:496392314323:web:eace18d90ab8546c2fa326"
};

const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const auth = getAuth(app)

export { app, auth, getApp, getAuth };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default app;