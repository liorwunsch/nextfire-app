import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAbLW7J-gUUuh2ygeXpI2vhRM6GXZK3ehI",
  authDomain: "nextfire-935d9.firebaseapp.com",
  projectId: "nextfire-935d9",
  storageBucket: "nextfire-935d9.appspot.com",
  messagingSenderId: "899176204261",
  appId: "1:899176204261:web:479f6fcce888864a32910c"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider() 

export const firestore = getFirestore(app)
export const storage = getStorage()
