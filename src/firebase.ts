import 'firebase/app';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-DybLdoFYzh3f546CqyufWUVJSecSGZw',
  authDomain: 'netflix-clone-69467.firebaseapp.com',
  projectId: 'netflix-clone-69467',
  storageBucket: 'netflix-clone-69467.appspot.com',
  messagingSenderId: '908503215694',
  appId: '1:908503215694:web:05e2666534e22d366f5d1f',
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { auth };
export default db;
