import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';





const firebaseConfig = {
    apiKey: "AIzaSyA4U0pGneiT_3dB8jw1_yGkoO8l8tsihXQ",
    authDomain: "discord-clone-57035.firebaseapp.com",
    projectId: "discord-clone-57035",
    storageBucket: "discord-clone-57035.appspot.com",
    messagingSenderId: "231905890742",
    appId: "1:231905890742:web:fdc89a8e79f1b7fe23f117",
    measurementId: "G-RSMECLSFY9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;