import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdn4VJC5i55PYhmxxYdT533re6ekMAX2M",
  authDomain: "clone-5e543.firebaseapp.com",
  projectId: "clone-5e543",
  storageBucket: "clone-5e543.appspot.com",
  messagingSenderId: "494964953828",
  appId: "1:494964953828:web:f233cd6cea4be57dd352f1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
