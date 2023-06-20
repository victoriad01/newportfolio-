import Image from 'next/image'
import styles from './page.module.css'

import Image1 from '/public/svg 2.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.title}>Get Good Code for Your Digital Products!</p>
        <p className={styles.desc}>
          Looking for a quality Web Developer with extensive experience in the
          Web or Mobile App Development? You have made the right stop. Welcome!
        </p>
        <div>
          <Button
            url='/portifolio'
            text='See My Works!'
            className='button-mobile'
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.imgMobile}>
          <Image
            src={Image1}
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
