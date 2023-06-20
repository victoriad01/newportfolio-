import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portifolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery to see</h1>
      <div className={styles.items}>
        <Link href='/portifolio/illustrations' className={styles.item}>
          <span className={styles.title}>General</span>
        </Link>
        <Link href='/portifolio/web' className={styles.item}>
          <span className={styles.title}>Web Applications</span>
        </Link>
        <Link href='/portifolio/mobile' className={styles.item}>
          <span className={styles.title}>Mobile Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portifolio
