import { auth, firestore } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'

// Custom hook to read auth record and user profile doc
export function useUserData() {
    const [user] = useAuthState(auth)
    const [username, setUsername] = useState(null)
  
    // listen to any changes to the 'user' object
    // when the user object changes, we can fetch a new user document from the firestore database
    useEffect(() => {
      let unsubscribe // flag to turn off realtime subscription
      
      if (user) {
        const userRef = doc(firestore, 'users', user.uid)
        unsubscribe = onSnapshot(userRef, (doc) => {
          // firebase returns a function that when called will unsubscribe from doc.data()
          // provide the latest document information from the database (whenever it updates)
          setUsername(doc.data()?.username)
        })
      } else {
        setUsername(null)
      }
      
      return unsubscribe
    }, [user])

    return { user, username }
}
