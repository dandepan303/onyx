'use client'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'
import { MdArrowForwardIos } from 'react-icons/md'  // Rounded arrow icon

export default function Home() {
  const [fadeOut, setFadeOut] = useState(false)
  const [center, setCenter] = useState(false)
  const [morph, setMorph] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [dialogFadeIn, setDialogFadeIn] = useState(false)

  const handleGetStarted = () => {
    setFadeOut(true)

    setTimeout(() => {
      setCenter(true)
      setTimeout(() => {
        setMorph(true)
        setTimeout(() => {
          setDialogVisible(true)
          setTimeout(() => setDialogFadeIn(true), 250)
        }, 500)
      }, 900)
    }, 500)
  }

  return (
    <>
      <Head>
        <title>Onyx</title>
      </Head>
      <main className="container">
        <div className={`content ${center ? 'center-content' : ''}`}>
          <h1 className={`title ${fadeOut ? 'hidden-content' : ''}`}>onyx</h1>

          <div className={`mockup-container ${fadeOut ? 'hidden-content' : ''}`}>
            <Image
              src="/macbook.png"
              alt="MacBook mockup"
              width={700}
              height={525}
              className="mockup-image"
              priority
            />
          </div>

          <p className={`subtitle ${fadeOut ? 'hidden-content' : ''}`}>
            collaborative jamming made easy
          </p>

          <div
            className={`morph-container ${morph ? 'morphing' : ''}`}
            onClick={!morph ? handleGetStarted : undefined}
          >
            {!dialogVisible && <div className="btn-content">get started</div>}
            {dialogVisible && (
              <div className={`dialog-content ${dialogFadeIn ? 'fade-in' : ''}`}>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="sign-in-btn" aria-label="Sign In">
                  <MdArrowForwardIos size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
