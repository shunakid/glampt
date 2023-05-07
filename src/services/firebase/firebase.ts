import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDvDOd8mibDZaqJfMcSyiqHxPiuDHwuz-k',
  authDomain: 'glampt-b851d.firebaseapp.com',
  projectId: 'glampt-b851d',
  storageBucket: 'glampt-b851d.appspot.com',
  messagingSenderId: '646590061390',
  appId: '1:646590061390:web:0f2bf9c52e575ced8bdc1f',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
