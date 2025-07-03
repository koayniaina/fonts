import React from "react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.login}>
      <p className="font-bold text-2xl">Login</p>
      {/* <form className={styles.btn}>
            <div className={styles.inputs}>
                <input type="email" placeholder='Email' />
            </div>
            <div className={styles.inputs}>
                <input type="password" placeholder='Password' />
            </div>
            <button>Sign in</button>
            <p>I don't have an account? <Link href='/register'>Sing Up</Link> </p>
        </form> */}
    </div>
  );
}
