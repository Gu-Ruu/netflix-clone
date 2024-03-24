// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr3NI090voI7EeZnq02sAzEG4EEBmzfak",
  authDomain: "netflix-clone-53d06.firebaseapp.com",
  projectId: "netflix-clone-53d06",
  storageBucket: "netflix-clone-53d06.appspot.com",
  messagingSenderId: "664039575666",
  appId: "1:664039575666:web:4f843a31de667051d8b2eb",
  measurementId: "G-F4R2T2SK9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
