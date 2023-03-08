// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const prodConfig = {
    apiKey: 'AIzaSyCLSiSY9rC5GBDzNtuNxvxQWkUwOl_PtW8',
    authDomain: 'portfolio-93698.firebaseapp.com',
    projectId: 'portfolio-93698',
    storageBucket: 'portfolio-93698.appspot.com',
    messagingSenderId: '795683023780',
    appId: '1:795683023780:web:68736da3f523c6f1b3af31'
};

const devConfig = {
    apiKey: 'AIzaSyBMKYwjQIQWk_tdFgJ4lK5Q3WEnAtpBGEU',
    authDomain: 'portfolio-dev-11282.firebaseapp.com',
    projectId: 'portfolio-dev-11282',
    storageBucket: 'portfolio-dev-11282.appspot.com',
    messagingSenderId: '198597409049',
    appId: '1:198597409049:web:10f80c19c49aeb20f9ed88'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(devConfig);

export const FirebaseAuth = getAuth(FirebaseApp);