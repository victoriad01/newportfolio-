import React from 'react'

import styles from './page.module.css'
import Image from 'next/image'
import Bg_Image from 'public/hd3.png'
import Button from '@/components/Button/Button'
import Link from 'next/link'

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
            I am Victor Iyanu Oluwafemi. A Graduate and MSC holder from the
            prestigious Federal University of Technology Akure. I have over
            three years of experience with web applications.
            <br />
            <br />I have experience coding React, React Native, NextJS, HTML,
            CSS etc. Also, I am vast in Node and ExpressJS. In the past I have
            built CRM and ERP solutions for companies to improve their business
            processes. Samples of this can be found
            <Link href='/portifolio' className={styles.here}>
              here
            </Link>
            .
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>What I do?</p>
          <p className={styles.desc}>
            I build and deliver exceptional user experiences and high-quality
            software solutions, as a Frontend Heavy Full Stack Engineer with a
            background in Graphics Design and UI/UX. I have expertise in React,
            React Native, NextJS Node.js, and Express.js, and I am adept at
            crafting intuitive and responsive user interfaces that engage and
            delight users.
            <br />
            <br />
            Having transitioned from Graphics Design and UI/UX, I bring a unique
            perspective to web and mobile development. I combine my design
            sensibilities with technical skills to create visually appealing and
            user-friendly applications that seamlessly blend aesthetics and
            functionality.
            <br />
            <br />
            My technical skills include: Frontend Development: Proficient in
            React and React Native, I leverage these frameworks to bring designs
            to life and create visually stunning and interactive user interfaces
            for web applications and mobile applications.
            <br />
            <br />
            Backend Development: Experienced in building robust and scalable
            server-side applications using Node.js and Express.js, I ensure
            smooth data flow and efficient communication between the frontend
            and backend.
            <br />
            <br />
            Testing: Skilled in End-to-End Testing and Unit Testing, I
            prioritize code quality and maintainability, implementing
            comprehensive test suites to ensure software reliability and
            minimize bugs.
            <br />
            <br />
            Continuous Integration and Continuous Deployment (CI/CD): Proficient
            in setting up CI/CD pipelines, I automate the build, test, and
            deployment processes to facilitate efficient and seamless software
            delivery. Throughout my career, I have successfully delivered
            complex projects, collaborating closely with cross-functional teams
            to meet project requirements and deliverables. I am adept at
            translating design concepts into functional code and implementing
            innovative solutions to overcome challenges.
            <br />
            <br />
            As a lifelong learner, I constantly seek to expand my knowledge and
            stay updated with the latest technologies and industry best
            practices. I thrive in fast-paced environments that foster
            creativity, collaboration, and continuous improvement.
            <br />
            <br />
            If you are looking for a dedicated and results-driven Full Stack
            Engineer with a frontend focus and proficiency in React, React
            Native, NextJS Node.js, Express.js, End-to-End Testing, Unit
            Testing, and CI/CD. Kindly use the contact me session to send an
            email.
          </p>
          <Button url='/contact' text='Contact me!' />
        </div>
      </div>
    </div>
  )
}

export default About
