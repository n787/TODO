import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXvZsDg1WI-aSp8B0cuERJEJUpBkpYoPI",
    authDomain: "todo-app-ee6de.firebaseapp.com",
    databaseURL: "https://todo-app-ee6de-default-rtdb.firebaseio.com",
    projectId: "todo-app-ee6de",
    storageBucket: "todo-app-ee6de.appspot.com",
    messagingSenderId: "366452940540",
    appId: "1:366452940540:web:69f775bfc8b36d1d710179",
    measurementId: "G-9ZEJLJ3BCR"
  });

  const db = firebaseApp.firestore();

  export default db;