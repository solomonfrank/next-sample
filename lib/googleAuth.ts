import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const config = {
  apiKey: "AIzaSyBmd4NPuxOi33zLAuRx9aJsiR0gAwWyn8E",
  authDomain: "delivery-page-a199a.firebaseapp.com",
  projectId: "delivery-page-a199a",
  storageBucket: "delivery-page-a199a.appspot.com",
  messagingSenderId: "111368784344",
  appId: "1:111368784344:web:c28e491def46bc1c8c8aad",
};

// Initialize Firebase
const app = initializeApp(config);
const auth = getAuth(app);

const firebaseAuthProvider = {
  initialize: () => app,
  loginWithGoogle: async () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        return {
          token,
          user,
          credential,
        };
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);

        throw error;
        // ...
      });
  },
};

export default firebaseAuthProvider;
