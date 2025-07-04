"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.head}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <section className="flex justify-center items-center gap-2">
            <span
              onClick={handleclick}
              className="material-symbols-outlined cursor-pointer"
            >
              menu
            </span>
            <p>
              <span className="text-blue-500">iTech</span>Shop
            </p>
          </section>
        </div>
        {isOpen ? (
          <nav className={`${styles.navbar} ${isOpen ? styles.navmenu : ""}`}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        ) : null}
        <main className="icons">
          <section>
            <span className="material-symbols-outlined">search</span>
          </section>
          <section>
            <Link className="material-symbols-outlined" href={"/login"}>
              person
            </Link>
          </section>
          <section className="merianes">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="counts">
              <p>0</p>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}
