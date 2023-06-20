'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import styles from './navbar.module.css'
import ModeTOggle from '../DarkModeToggle/ModeToggle'
import Image from 'next/image'
import MenuIcon from 'public/menu.svg'

const links = [
  { id: 0, url: '/', title: 'Home' },
  { id: 1, url: '/about', title: 'About me' },
  { id: 2, url: '/contact', title: 'Contact me' },
  { id: 3, url: '/portifolio', title: 'Portifolio' },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle((prev) => (prev === true ? false : true))
  }

  return (
    <div className={styles.container}>
      <div className={styles.toggleDiv}>
        <Link href='/' className={styles.logo}>
          VI-Media
        </Link>
        <ModeTOggle />
      </div>

      <Image
        src={MenuIcon}
        alt='toggle icon'
        className={styles.menu}
        onClick={handleClick}
      />

      <div
        className={toggle ? styles.links2 : styles.links}
        onClick={() => setToggle(false)}
      >
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
