'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import { jsPDF } from 'jspdf'

export default function Home() {
  const handleDownload = () => {
    const url = '/cv22-06-23.pdf'
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', 'VICTOR_OLUWAFEMI_CV.pdf')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.title}>Get Good Code for Your Digital Products!</p>
        <p className={styles.desc}>
          Are you looking for a quality Web Developer with extensive experience
          in the Web or Mobile App Development? You have made the right stop.
          Welcome!
        </p>
        <div className={styles.buttons}>
          <Button
            url='/portifolio'
            text='See My Works!'
            // className='button-mobile'
          />
          <button
            url='/portifolio'
            text='See My Works!'
            className={styles.buttonmobile2}
            onClick={handleDownload}
          >
            Download my CV
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.imgMobile}>
          <Image
            src='/svg-2.png'
            alt='code'
            width={500}
            height={500}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}
