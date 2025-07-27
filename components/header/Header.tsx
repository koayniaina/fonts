"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "@/components/header/Header.module.css";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleclick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className={styles.navbar}>
      <main className={styles.header} ref={menuRef}>
        <section>
          <div className={styles.logo}>
            <span onClick={handleclick} className={styles.hamburger}>
              <LuMenu />
            </span>
            <span className="text-xl font-medium">
              iTech<span className="text-blue-600">Store</span>
              <p className="text-md ">information technologies</p>
            </span>
          </div>
        </section>
        {
          <section
            className={`${styles.menuNav} ${isOpen ? styles.active : ""}`}
          >
            {/* <div  className={styles.menuNav}> */}

            <Link href="#home" onClick={handleclick}>
              Home
            </Link>
            <Link href="#category" onClick={handleclick}>
              Category
            </Link>
            <Link href="#post" onClick={handleclick}>
              Post
            </Link>
            <Link href="#contact" onClick={handleclick}>
              Contact
            </Link>
            <Link href="#marque" onClick={handleclick}>
              Marques
            </Link>
            {/* </div> */}
          </section>
        }
        <section className={styles.icons}>
          <span>
            <CiSearch className={styles.icon} />
          </span>

          <Link href="login">
            <CiUser className={styles.icon} />
          </Link>

          <Link className={styles.chart} href="shop">
            <CiShoppingCart className={styles.icon} />
            <p className={styles.counts}>0</p>
          </Link>
        </section>
      </main>
    </header>
  );
}
