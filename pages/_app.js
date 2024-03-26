// Global Values here
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider
      value={
        { // example
          user: {},
          username: 'jeff'
        }
      }>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
