import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXwOwka0TrjK4fEvQkgk-qw8mH74dzmNM",
    authDomain: "netflix-clone-31e4d.firebaseapp.com",
    projectId: "netflix-clone-31e4d",
    storageBucket: "netflix-clone-31e4d.appspot.com",
    messagingSenderId: "899763691887",
    appId: "1:899763691887:web:71ada150fe721425a9089a",
    measurementId: "G-03RM23DW5Q"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  const auth=firebase.auth();

  export {auth}
  export default db;

  
