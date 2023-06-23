'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import styles from './page.module.css'

import Image from 'next/image'
import Bg_Image from 'public/contact us 2.png'

const Contact = () => {
  const formRef = useRef()

  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs
      .sendForm(
        'service_17mxpca',
        'template_tula7vu',
        formRef.current,
        '7l4M92kCf2ysliheE'
      )
      .then(
        (result) => {
          setSent(true)
          setTimeout(() => {
            setSent(false)
          }, 5000)
          e.target.reset()
        },
        (error) => {
          setFailed(true)
          setTimeout(() => {
            setFailed(false)
          }, 3000)
        }
      )

    setSending(false)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.connect}>Connect with me</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={Bg_Image} alt='backgorund image' className={styles.img} />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <input
              type='text'
              className={styles.input}
              placeholder='Name'
              name='user_name'
              required
            />
            <input
              type='text'
              className={styles.input}
              placeholder='Email'
              name='user_email'
              required
            />
            <textarea
              className={styles.inputArea}
              placeholder='Drop a message!'
              name='user_message'
              required
            />
            {sent && <p>Message sent, I will be in contact! 🆗👍🏿</p>}
            {failed && <p>Something went wrong! Please, try again. ❌</p>}
            <button className={styles.button} disabled={sending}>
              Send!
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
