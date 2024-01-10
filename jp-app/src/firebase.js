import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyCA0HoefA2NJdJqmlROXGbhSv1-rJp3u4U",
  authDomain: "jpperformancecars-21a6e.firebaseapp.com",
  projectId: "jpperformancecars-21a6e",
  storageBucket: "jpperformancecars-21a6e.appspot.com",
  messagingSenderId: "232420192380",
  appId: "1:232420192380:web:6d0e96e073ba38590cd9f9",
  measurementId: "G-9RXXN6NDRP",
};

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // Add other providers as needed
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default firebase;
