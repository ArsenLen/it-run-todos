import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSeB25TQWLL-tE8An6esdJXRDpEfWxPhc",
    authDomain: "todos-6baed.firebaseapp.com",
    projectId: "todos-6baed",
    storageBucket: "todos-6baed.appspot.com",
    messagingSenderId: "1057886360324",
    appId: "1:1057886360324:web:22eae278eb7a8cafa13651"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);