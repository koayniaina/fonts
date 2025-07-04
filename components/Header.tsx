"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.head}>
      <header className={styles.header}>
        <main>
          <Navbar />
        </main>
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
