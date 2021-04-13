import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvhR10tVgeb7CFboAM6weImIFnKnz3qe8",
    authDomain: "netflix-portfolio-clone.firebaseapp.com",
    projectId: "netflix-portfolio-clone",
    storageBucket: "netflix-portfolio-clone.appspot.com",
    messagingSenderId: "954046479553",
    appId: "1:954046479553:web:754267a6e395ebcc9ee840",
    measurementId: "G-PGVCE41SQD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;