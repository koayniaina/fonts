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
    <main>
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
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        {/* <span id="home" className="cursor-pointer" onClick={handleclick}>
          Home
        </span>
        <span id="about" className="cursor-pointer" onClick={handleclick}>
          Home
        </span>
        <span id="contact" className="cursor-pointer" onClick={handleclick}>
          Home
        </span> */}
      </div>
    </main>
  );
}
