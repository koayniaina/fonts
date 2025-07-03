import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import Navbar from '../components/Navbar';

export default function Header() {
  return (
    <div className={styles.head}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <section className="flex justify-center items-center gap-2">
            <span className="material-symbols-outlined cursor-pointer">
              menu
            </span>
            <p>
              <span className="text-blue-500">iTech</span>Shop
            </p>
          </section>
        </div>
        <main className={styles.navlink}>
          <h2>Hello Nav Link</h2>
        </main>
        <main className="icons">
          <section>
            <span className="material-symbols-outlined">search</span>
          </section>
          <section>
            <Link  className="material-symbols-outlined" href={"/login"}>person</Link>
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
