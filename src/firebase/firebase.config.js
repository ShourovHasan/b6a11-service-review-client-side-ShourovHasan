// Import the functions you need from the SDKs you need
import { initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUddjg44FZ2i5h4LpByjj8aKMfj0y9V34",
  authDomain: "dentistry-services.firebaseapp.com",
  projectId: "dentistry-services",
  storageBucket: "dentistry-services.appspot.com",
  messagingSenderId: "843588299368",
  appId: "1:843588299368:web:bfbfafb2bdacd50582e9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;