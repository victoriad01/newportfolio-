import React from 'react'
import styles from '../page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

import Image1 from 'public/pc.jpeg'

const CatergoryName = ({ params }) => {
  console.log(params)
  return (
    <div>
      <h1 className={styles.catTitle}>
        {String(params.catergory).toUpperCase()}
      </h1>
      <div>
        <div className={styles.itemCat}>
          <div className={styles.itemContent}>
            <h1>Test</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sequi reprehenderit odit mollitia neque, aliquam ut voluptate
              laboriosam natus numquam quam adipisci unde provident libero
              consequatur ab suscipit, reiciendis at, cum autem inventore
              corporis? Quisquam aliquam expedita maiores assumenda, quos quasi
              at, excepturi fugit reiciendis accusamus dolorum corporis
              molestiae tenetur totam! Sit voluptatum doloribus cupiditate
              architecto impedit. Consequatur animi nobis, quae, fugit
              aspernatur maxime nam impedit, consequuntur voluptatum repudiandae
              quasi!
            </p>
            <Button text='See more' url='#' />
          </div>
          <div className={styles.imgContainer}>
            <Image src={Image1} alt='side image' className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatergoryName
