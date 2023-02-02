// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCLSiSY9rC5GBDzNtuNxvxQWkUwOl_PtW8',
    authDomain: 'portfolio-93698.firebaseapp.com',
    projectId: 'portfolio-93698',
    storageBucket: 'portfolio-93698.appspot.com',
    messagingSenderId: '795683023780',
    appId: '1:795683023780:web:68736da3f523c6f1b3af31'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
