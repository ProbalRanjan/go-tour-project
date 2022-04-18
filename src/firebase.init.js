// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIDw7N-yHicCa4_rMxkFzYHqD7bfL4iLg",
    authDomain: "go-tour-project.firebaseapp.com",
    projectId: "go-tour-project",
    storageBucket: "go-tour-project.appspot.com",
    messagingSenderId: "235819896254",
    appId: "1:235819896254:web:c5deb4c550edfc8355bdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;