/* eslint-disable react/no-unescaped-entities */
//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Loader from '../components/Loader.js'
import { toast } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast! ')}>
        Toast Me
      </button>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeffd23' },
      }}>
        <a>Jeff's profile</a>
      </Link>
      <Loader show />
    </div>
  )
}
