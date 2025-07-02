import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

export default function Header() {
  return (
    <div>
      <main className='bg-gray-900 p-2 text-blue-50 flex justify-between  px-6 gap-4'>
          <div className="span">
            <p>MDG</p>
          </div>
          <div className="contact">
            <Link href='register'>Create an acount</Link> |
            <Link href='login'>Sign in</Link>
          </div>
      </main>
      <header className={styles.header}>
        <div className={styles.hamburger}>
             <span className="material-symbols-outlined">menu</span>
        </div>
        <div className={styles.logo}>
          <p><span>iTech</span>Shop</p>
        </div>
        <main className={styles.navlink}>
          
          
        </main>
        <main className="icons">
          <section>
            <span className="material-symbols-outlined">search</span>
          </section>
          <section className='merianes'>
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="counts">
              <p>0</p>
            </div>
          </section>
        </main>
      </header>
      
    </div>
  )
}
