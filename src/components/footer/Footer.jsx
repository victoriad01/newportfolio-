import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const year = new Date().getFullYear()

import TwitterIcon from 'public/twitter.png'
import GitHubIcon from 'public/GitHub-Mark.png'
import LinkedInIcon from 'public/LinkedIn_icon.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>VI-Media @{new Date().getFullYear()}. Alright reserved!</p>

      <div className={styles.icons}>
        <Link href='https://twitter.com/victor_iyanu_'>
          <Image
            src={TwitterIcon}
            height={15}
            width={15}
            alt='Twitter account'
            className={styles.icon}
          />
        </Link>
        <Link href='https://github.com/victoriad01' className={styles.icon}>
          <Image
            src={GitHubIcon}
            height={15}
            width={15}
            alt='Github account'
            className={styles.icon}
          />
        </Link>

        <Link href='https://www.linkedin.com/in/victor-iyanu/'>
          <Image
            src={LinkedInIcon}
            height={15}
            width={15}
            alt='LinkedIn account'
            className={styles.icon}
          />
        </Link>
      </div>
    </div>
  )
}

export default Footer
