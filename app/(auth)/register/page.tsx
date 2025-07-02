import React from 'react'
import styles from '@/styles/Auth.module.css'
import Link from 'next/link'

export default function Register() {
  return (
    <div className={styles.register}>
        <p className='font-bold text-2xl'>Register</p>
        <form className={styles.btn}>
            <div className={styles.inputs}>
                <input type="email" placeholder='Email' />
            </div>
            <div className={styles.inputs}>
                <input type="password" placeholder='Password' />
            </div>
            <div className={styles.inputs}>
                <input type="password" placeholder='Confirm password' />
            </div>
            <button>Sing Up</button>
            <p>I have an account? <Link href='/login'>Sing in</Link> </p>
        </form>
    </div>
  )
}
