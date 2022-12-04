import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyA_FgF1sfriJrxrq4Y5Xks9AwAmYPU2jnM",
    authDomain: "e-ride-stage-4-79866.firebaseapp.com",
    projectId: "e-ride-stage-4-79866",
    storageBucket: "e-ride-stage-4-79866.appspot.com",
    messagingSenderId: "143571652910",
    appId: "1:143571652910:web:69971b6becb612a5e2aabf"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
