import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portifolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery to see</h1>
      <div className={styles.items}>
        <Link href='https://pay-u-bf064.web.app/#/' className={styles.item}>
          <span className={styles.title}>Pay-U</span>
        </Link>
        <Link href='https://joint-network.web.app/' className={styles.item}>
          <span className={styles.title}>Joint Network</span>
        </Link>
        <Link
          href='https://oluwafemi-vi-lendsqr-fe-test.web.app/'
          className={styles.item}
        >
          <span className={styles.title}>Lendsqr</span>
        </Link>
        <Link href='https://github.com/victoriad01' className={styles.item}>
          <span className={styles.title}>Other</span>
        </Link>
      </div>
    </div>
  )
}

export default Portifolio
