import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDXZcKCeQj7eA6hBe0Iz816-HoNU8SVM5Q",
  authDomain: "nextjs-notfication.firebaseapp.com",
  projectId: "nextjs-notfication",
  storageBucket: "nextjs-notfication.appspot.com",
  messagingSenderId: "1005829144761",
  appId: "1:1005829144761:web:c4881014e15fd6643e5b68"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
