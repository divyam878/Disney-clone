import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDMugoJU5BCpVSNztqwPLvg0sRKrh2MuuI",
    authDomain: "disneyplus-clone-778e0.firebaseapp.com",
    projectId: "disneyplus-clone-778e0",
    storageBucket: "disneyplus-clone-778e0.appspot.com",
    messagingSenderId: "731014986629",
    appId: "1:731014986629:web:2d4111157aca95ef8122ec"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;