import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAwPUaF5wQLp0ukkDDEx4PW3d7sMkZW3vs",
    authDomain: "eshop-79e59.firebaseapp.com",
    projectId: "eshop-79e59",
    storageBucket: "eshop-79e59.appspot.com",
    messagingSenderId: "88143675164",
    appId: "1:88143675164:web:52ad8c7941c01c4eb9c4d9",
    measurementId: "G-Y7V6HQT1WS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  export {db, auth};
  
