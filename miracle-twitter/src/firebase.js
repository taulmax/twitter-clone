import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJAqedXMNHMY42bRQlMom4FqpI-CRdNwQ",
  authDomain: "miracle-twitter.firebaseapp.com",
  databaseURL: "https://miracle-twitter.firebaseio.com",
  projectId: "miracle-twitter",
  storageBucket: "miracle-twitter.appspot.com",
  messagingSenderId: "299970620221",
  appId: "1:299970620221:web:65913b8d95a110685b7354",
};

export default firebase.initializeApp(firebaseConfig);
