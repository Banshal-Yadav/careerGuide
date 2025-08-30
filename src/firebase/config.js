import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVohpU1g5VWMt8JHDIGm145JUAV4pOyxE",
  authDomain: "aicareerguide.firebaseapp.com",
  projectId: "aicareerguide",
  storageBucket: "aicareerguide.firebasestorage.app",
  messagingSenderId: "101169653882",
  appId: "1:101169653882:web:106f6a855111d8481de1b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;