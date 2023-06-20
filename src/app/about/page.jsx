import React from 'react'

import styles from './page.module.css'
import Image from 'next/image'
import Bg_Image from 'public/hd3.png'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={Bg_Image}
          fill={true}
          alt='backgorund image'
          className={styles.img}
        />
        <div className={styles.header}>
          <h2>My Tech Story</h2>
          <p>
            The journey so far in the Web and Mobile Application Development.
          </p>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.item}>
          <p className={styles.title}>Who I am?</p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            cupiditate unde vero velit amet itaque. Exercitationem beatae illum
            id aliquid vero, tempore blanditiis, iure laboriosam impedit, esse
            quo velit minus fugit officia molestiae earum in cupiditate.
            Doloribus iusto repudiandae architecto laboriosam, eius neque amet
            totam quasi deleniti voluptatum consequatur sed!
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>What I do?</p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            cupiditate unde vero velit amet itaque. Exercitationem beatae illum
            id aliquid vero, tempore blanditiis, iure laboriosam impedit, esse
            quo velit minus fugit officia molestiae earum in cupiditate.
            Doloribus iusto repudiandae architecto laboriosam, eius neque amet
            totam quasi deleniti voluptatum consequatur sed!
          </p>
          <Button url='/contact' text='Contact me!' />
        </div>
      </div>
    </div>
  )
}

export default About
