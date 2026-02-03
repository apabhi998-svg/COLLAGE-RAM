// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_Kx7FSJv8SmdI_KRThr6vRst_zlUA4jA",
    authDomain: "collage--ram-app.firebaseapp.com",
    projectId: "collage--ram-app",
    storageBucket: "collage--ram-app.firebasestorage.app",
    messagingSenderId: "141929525933",
    appId: "1:141929525933:web:2f504d1d0ee721aca90c24",
    measurementId: "G-TPS6Z6YER3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);