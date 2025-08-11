'use client'
import Image from 'next/image'
import { useState, ChangeEvent } from 'react'
import Head from 'next/head'
import { MdArrowForwardIos } from 'react-icons/md'

// Types
interface User {
  email: string;
  username: string;
  password: string;
}

// Mock user database - replace with actual database logic
const mockUsers: User[] = [
  { email: 'dandepan303@gmail.com', username: 'dean', password: '123456' },
  { email: 'kevinboriboonsomsin@gmail.com', username: 'kevin', password: '123456' },
]

// Helper function to check if input is email format
const isEmail = (input: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(input)
}

// Helper function to find user by email or username
const findUser = (identifier: string): User | undefined => {
  return mockUsers.find(user => 
    user.email === identifier || user.username === identifier
  )
}

export default function Home() {
  const [fadeOut, setFadeOut] = useState(false)
  const [center, setCenter] = useState(false)
  const [morph, setMorph] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [dialogFadeIn, setDialogFadeIn] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [joinMode, setJoinMode] = useState(false)
  const [joinFadeIn, setJoinFadeIn] = useState(false)
  const [createMode, setCreateMode] = useState(false)
  const [createFadeIn, setCreateFadeIn] = useState(false)

  // Auth state
  const [authPage, setAuthPage] = useState(1) // 1 for sign in, 2 for sign up
  const [nameOrEmail, setNameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

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

  const handleSignIn = () => {
    setError('')

    if (!nameOrEmail || !password) {
      setError('please fill in all fields')
      return
    }

    // Check if user exists
    const user = findUser(nameOrEmail)
    
    if (user && user.password === password) {
      // User exists and password matches - sign in
      console.log('sign in successful:', user)
      proceedToLobby()
    } else if (user && user.password !== password) {
      // User exists but wrong password
      setError('incorrect password')
    } else {
      // User doesn't exist - go to sign up page
      setAuthPage(2)
      
      // Pre-populate fields based on input type
      if (isEmail(nameOrEmail)) {
        setEmail(nameOrEmail)
        setUsername('')
      } else {
        setUsername(nameOrEmail)
        setEmail('')
      }
    }
  }

  const handleSignUp = () => {
    setError('')

    if (!email || !username || !password) {
      setError('please fill in all fields')
      return
    }

    if (!isEmail(email)) {
      setError('please enter a valid email address')
      return
    }

    // Check if email or username already exists
    const existingUser = mockUsers.find(user => 
      user.email === email || user.username === username
    )

    if (existingUser) {
      if (existingUser.email === email) {
        setError('email already exists')
      } else {
        setError('username already taken')
      }
      return
    }

    // Create new user (in real app, this would be an API call)
    const newUser: User = { email, username, password }
    mockUsers.push(newUser)
    console.log('sign up successful:', newUser)
    
    proceedToLobby()
  }

  const proceedToLobby = () => {
    // Reset auth state
    setAuthPage(1)
    setNameOrEmail('')
    setPassword('')
    setEmail('')
    setUsername('')
    setError('')
    
    // Fade out the dialog content
    setDialogFadeIn(false)
    
    setTimeout(() => {
      // Hide dialog and show buttons
      setDialogVisible(false)
      setShowButtons(true)
      
      setTimeout(() => {
        // Fade in the buttons
        setButtonsVisible(true)
      }, 100)
    }, 300)
  }

  const handleBackToSignIn = () => {
    setAuthPage(1)
    setError('')
    setEmail('')
    setUsername('')
  }

  const handleJoin = () => {
    // Fade out everything except join button
    setButtonsVisible(false)
    
    setTimeout(() => {
      // Switch to join mode
      setJoinMode(true)
      
      setTimeout(() => {
        // Fade in the textbox
        setJoinFadeIn(true)
      }, 100)
    }, 300)
  }

  const handleCreate = () => {
    // Fade out everything except create button
    setButtonsVisible(false)
    
    setTimeout(() => {
      // Switch to create mode
      setCreateMode(true)
      
      setTimeout(() => {
        // Fade in the room code display
        setCreateFadeIn(true)
      }, 100)
    }, 300)
  }

  const handleBackToLobby = () => {
    // Fade out current content
    if (joinMode) {
      setJoinFadeIn(false)
    }
    if (createMode) {
      setCreateFadeIn(false)
    }
    
    setTimeout(() => {
      // Reset modes
      setJoinMode(false)
      setCreateMode(false)
      
      setTimeout(() => {
        // Fade in the lobby buttons
        setButtonsVisible(true)
      }, 100)
    }, 300)
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
            {!dialogVisible && !showButtons && (
              <div className="btn-content">get started</div>
            )}
            
            {dialogVisible && authPage === 1 && (
              <div className={`dialog-content ${dialogFadeIn ? 'fade-in' : ''}`}>
                <input 
                  type="text" 
                  placeholder="email or username" 
                  value={nameOrEmail}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNameOrEmail(e.target.value)}
                />
                <input 
                  type="password" 
                  placeholder="password" 
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                {error && <div className="error-message">{error}</div>}
                <button className="sign-in-btn" onClick={handleSignIn} aria-label="Sign In">
                  <MdArrowForwardIos size={12} />
                </button>
              </div>
            )}

            {dialogVisible && authPage === 2 && (
              <div className={`dialog-content ${dialogFadeIn ? 'fade-in' : ''}`}>
                <h2>sign up</h2>
                {isEmail(nameOrEmail) ? (
                  <input 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                  />
                ) : (
                  <input 
                    type="email" 
                    placeholder="email" 
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                )}
                <input 
                  type="password" 
                  placeholder="password" 
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                {error && <div className="error-message">{error}</div>}
                <div className="auth-nav-buttons">
                  <button className="nav-btn back-btn" onClick={handleBackToSignIn}>
                    <MdArrowForwardIos size={12} className="back-arrow" />
                  </button>
                  <button className="nav-btn forward-btn" onClick={handleSignUp}>
                    <MdArrowForwardIos size={12} />
                  </button>
                </div>
              </div>
            )}

            {showButtons && !joinMode && !createMode && (
              <div className={`action-buttons ${buttonsVisible ? 'fade-in' : ''}`}>
                <h3 className="lobby-title">lobby</h3>
                <button className="action-btn join-btn" onClick={handleJoin}>
                  join
                </button>
                <button className="action-btn create-btn" onClick={handleCreate}>
                  create
                </button>
              </div>
            )}

            {joinMode && (
              <div className={`join-content ${joinFadeIn ? 'fade-in' : ''}`}>
                <h3 className="join-title">join</h3>
                <input type="text" placeholder="code" className="room-code-input" />
                <div className="nav-buttons">
                  <button className="nav-btn back-btn" onClick={handleBackToLobby}>
                    <MdArrowForwardIos size={12} className="back-arrow" />
                  </button>
                  <button className="nav-btn forward-btn" onClick={() => console.log('Join room clicked')}>
                    <MdArrowForwardIos size={12} />
                  </button>
                </div>
              </div>
            )}

            {createMode && (
              <div className={`create-content ${createFadeIn ? 'fade-in' : ''}`}>
                <h3 className="create-title">create</h3>
                <div className="room-code-display">blue-apple-jazz</div>
                <div className="nav-buttons">
                  <button className="nav-btn back-btn" onClick={handleBackToLobby}>
                    <MdArrowForwardIos size={12} className="back-arrow" />
                  </button>
                  <button className="nav-btn forward-btn" onClick={() => console.log('Create room clicked')}>
                    <MdArrowForwardIos size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}