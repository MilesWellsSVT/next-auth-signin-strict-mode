'use client';
import { signOut, useSession } from 'next-auth/react';
import styles from './page.module.css'

export default function Home() {
  const {data} = useSession();

  return (
    <main className={styles.main}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button type="button" onClick={signOut}>Sign Out</button>
    </main>
  )
}
