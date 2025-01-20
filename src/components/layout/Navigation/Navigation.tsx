'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/reflections', label: 'Reflections' },
    { href: '/resources', label: 'Resources' }
  ];

  const getCurrentPageName = () => {
    if (pathname === '/') return 'HOME';
    return routes.find(route => route.href === pathname)?.label.toUpperCase() || '';
  };

  return (
    <nav className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.links}>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`${styles.link} ${pathname === route.href ? styles.activeLink : ''}`}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    
      <div className={styles.divider}/>
      {/* <h1 className={styles.pageTitle}>{getCurrentPageName()}.</h1>
      <div className={styles.divider} /> */}
    </nav>
  );
};

export default Navigation;