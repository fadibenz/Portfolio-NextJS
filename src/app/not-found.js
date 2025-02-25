"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Custom404.module.css';

export default function Custom404() {
  return (
    <div className={styles.notFound}>
      <div className={styles.contentContainer}>
        <p className={styles.message}>
          <span className={styles.firstLetter}>C</span>ome back soon, I will add this page soon enough.
        </p>
        <div className={styles.dash}></div>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.linkText}>Return Home</span>
        </Link>
      </div>
    </div>
  );
}