'use client'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'

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
        // Wait for morph animation to finish before showing dialog inputs
        setTimeout(() => {
          setDialogVisible(true)
          // Delay fade-in of dialog content by 500ms
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

          {/* Morph container triggers morph on click */}
          <div
            className={`morph-container ${morph ? 'morphing' : ''}`}
            onClick={!morph ? handleGetStarted : undefined}
          >
            {!dialogVisible && <div className="btn-content">get started</div>}
            {dialogVisible && (
              <div className={`dialog-content ${dialogFadeIn ? 'fade-in' : ''}`}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="sign-in-btn">Sign In</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
