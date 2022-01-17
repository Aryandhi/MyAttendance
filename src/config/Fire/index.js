import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCCae9OqcVnYwRJq14p8RYFbMVIhe7cW0U',
  authDomain: 'myattendance-785db.firebaseapp.com',
  projectId: 'myattendance-785db',
  storageBucket: 'myattendance-785db.appspot.com',
  messagingSenderId: '1025260549710',
  appId: '1:1025260549710:web:095227f05ae9db6bb2b51f',
  databaseURL:
    'https://myattendance-785db-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const Fire = initializeApp(firebaseConfig);
export default Fire;
