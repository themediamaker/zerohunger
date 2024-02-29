import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBT0DJjJn-sTicZjXM8oJOH0gCtpD11gWo",
  authDomain: "sonalsoulmates-38114.firebaseapp.com",
  projectId: "sonalsoulmates-38114",
  storageBucket: "sonalsoulmates-38114.appspot.com",
  messagingSenderId: "808772386533",
  appId: "1:808772386533:web:71924218b53cfc926a5e0c",
  // measurementId: "G-0KBL3TBNRW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
// const analytics = getAnalytics(app);
export { auth };

