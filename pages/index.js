/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/Link';

export default function Home() {
  return (
    <div>
        <Link prefetch={false} href={{
              pathname: '/[username]',
              query: { username:'jeffd23' },
            }}>
          <a>Jeff's profile</a>
        </Link>
    </div>
  )
}
