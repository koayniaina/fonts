'use client'

import Link from "next/link";
import React, { useState } from "react";
import styles from "@/components/header/Header.module.css";
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

export default function Navbar() {
  const [isOpen , setOpen] = useState(false)

  const handleclick = () =>{
    setOpen(!isOpen)
  }
  return (
    <header className={styles.navbar}>
      <main className={styles.header}>
        <section>
          <div className={styles.logo}>
            <span onClick={handleclick} className={styles.hamburger}>
              <CiMenuBurger/>
            </span>
            <span className="text-xl font-medium">
              iTech<span className="text-blue-600">Store</span>
              <p className="text-md ">information technologies</p>
            </span>
          </div>
        </section>
        {
          <section className={`${styles.menuNav} ${isOpen ? styles.active : ""}`}>
            {/* <div  className={styles.menuNav}> */}
              <Link href="/">Home</Link>
              <Link href="/category">Category</Link>
              <Link href='post'>Post</Link>
              <Link href="/contact">Contact</Link>
              <Link href='/marque'>Marques</Link>
            {/* </div> */}
          </section>
        }
        <section className={styles.icons}>
          <span>
            <CiSearch className={styles.icon} />
          </span>

          <Link href='login'>
            <CiUser className={styles.icon} />
          </Link>

          <Link className={styles.chart} href="shop">
            <CiShoppingCart className={styles.icon} />
            <p className={styles.counts}>10</p>
          </Link>
        </section>
      </main>
    </header>
  );
}
