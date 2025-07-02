import React from 'react'
import styles from '@/styles/Auth.module.css'

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.auth}>
        {children}
    </div>
    
  );
}
