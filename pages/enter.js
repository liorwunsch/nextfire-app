import { auth, googleAuthProvider } from '../lib/firebase'
import { signInWithPopup, signOut } from "firebase/auth"

export default function EnterPage(props) {
  const user = null
  const username = null

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {!user ?
        <SignInButton />
        :
        !username ? <UsernameForm /> : <SignOutButton />
      }
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
  return (
    <button
      onClick={() =>
        signOut(auth)
      }
    >
      Sign Out
    </button>
  )
}

function UsernameForm() {
  return null
}
