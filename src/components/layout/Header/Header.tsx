// src/components/layout/Header/Header.tsx
'use client'
import { useDate } from '@/hooks/useDate'
import styles from './Header.module.css'

export function Header() {
  
  return (
    <header className={styles.header}>
      <span className="text-sm">Know me more</span>
      <h1 className={styles.title}>
        <span className="underline">Fadi Benzaima</span>
      </h1>
    </header>
  )
}