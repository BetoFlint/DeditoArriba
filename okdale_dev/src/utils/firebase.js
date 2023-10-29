// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCraaTIpBpFYJy8hnUNHYQ62tAlW2ZwPXM",
  authDomain: "okdaledev.firebaseapp.com",
  projectId: "okdaledev",
  storageBucket: "okdaledev.appspot.com",
  messagingSenderId: "421914053703",
  appId: "1:421914053703:web:f34ee4dd972b6febab7562",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
