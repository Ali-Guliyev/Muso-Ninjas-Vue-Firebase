import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg1-3ITlp8-z-hfxX0UqBPZueUXZkE4nc",
  authDomain: "muso-ninjas-v1.firebaseapp.com",
  projectId: "muso-ninjas-v1",
  storageBucket: "muso-ninjas-v1.appspot.com",
  messagingSenderId: "914647094344",
  appId: "1:914647094344:web:2523e0c901fa33748d747d",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
