import { auth, googleAuthProvider } from '../lib/firebase'
import { signInWithPopup, signOut } from "firebase/auth"
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../lib/context'
import Loader from '../components/Loader.js'
import { toast } from 'react-hot-toast'

export default function Enter(props) {
  const { user } = useContext(UserContext) // gets user and username from global context from hooks
  if (user) {
    console.log('--- user.email = ', user.email)
  }

  return (
    <main>
      {!user ? <SignInButton /> : <SignOutButton /> }
    </main>
  )
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
  }
  return (
    <button
      className="btn-google"
      onClick={signInWithGoogle}
    >
      <img src={'/google.png'} />
      Sign in with Google
    </button> // img from /public directory
  )
}

// Sign out button
function SignOutButton() {
  const [loading, setLoading] = useState(false)
  const { username } = useContext(UserContext)

  useEffect(() => {
    setLoading(!username)
    if (username) {
      toast.success('Signed In')
    }
  }, [username])

  return (
    <div>
      <p>Hello, {username} {loading && <Loader show />}</p>
      <button
        onClick={() =>
          signOut(auth)
        }
      >
        Sign Out
      </button>
    </div>
  )
}
