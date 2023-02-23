// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNEb3A3nTEw_6TjHuierYq8nMCpdSN8oA",
  authDomain: "video-a9a2d.firebaseapp.com",
  projectId: "video-a9a2d",
  storageBucket: "video-a9a2d.appspot.com",
  messagingSenderId: "718285385310",
  appId: "1:718285385310:web:4adfa79a1a03b534968ecf",
  measurementId: "G-KPMSQZTXCK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);

