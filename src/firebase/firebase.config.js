// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7E32oa3W06o9S3ut45p8kggV5dgCun3M",
  authDomain: "tourism-2d1ca.firebaseapp.com",
  projectId: "tourism-2d1ca",
  storageBucket: "tourism-2d1ca.appspot.com",
  messagingSenderId: "419754014036",
  appId: "1:419754014036:web:3d3c8b93e90c8897aa04c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
