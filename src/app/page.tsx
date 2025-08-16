'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { MdArrowForwardIos } from 'react-icons/md';
import { useAuth } from '@/components/auth/AuthProvider';
import AuthFlow from '@/components/auth/AuthFlow';

export default function Home() {
  const { user, session } = useAuth();
  
  // Landing page animation states
  const [fadeOut, setFadeOut] = useState(false);
  const [center, setCenter] = useState(false);
  const [morph, setMorph] = useState(false);
  
  // Auth states
  const [showAuth, setShowAuth] = useState(false);
  const [authFadeIn, setAuthFadeIn] = useState(false);
  
  // Lobby states
  const [showButtons, setShowButtons] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [joinMode, setJoinMode] = useState(false);
  const [joinFadeIn, setJoinFadeIn] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [createFadeIn, setCreateFadeIn] = useState(false);
  const [roomCode, setRoomCode] = useState('');

  // Auto-proceed to lobby if user is authenticated
  useEffect(() => {
    if (user.data && session.data && !user.loading && !session.loading) {
      // User is authenticated, proceed to lobby
      proceedToLobby();
    }
  }, [user, session]);

  const handleGetStarted = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCenter(true);
      setTimeout(() => {
        setMorph(true);
        setTimeout(() => {
          setShowAuth(true);
          setTimeout(() => setAuthFadeIn(true), 250);
        }, 500);
      }, 900);
    }, 500);
  };

  const proceedToLobby = () => {
    // Fade out auth content
    setAuthFadeIn(false);
    
    setTimeout(() => {
      // Hide auth and show buttons
      setShowAuth(false);
      setShowButtons(true);
      
      setTimeout(() => {
        // Fade in the buttons
        setButtonsVisible(true);
      }, 100);
    }, 300);
  };

  const handleJoin = () => {
    setButtonsVisible(false);
    
    setTimeout(() => {
      setJoinMode(true);
      setTimeout(() => {
        setJoinFadeIn(true);
      }, 100);
    }, 300);
  };

  const handleCreate = () => {
    setButtonsVisible(false);
    
    setTimeout(() => {
      setCreateMode(true);
      // Generate random room code
      const adjectives = ['blue', 'red', 'green', 'purple', 'orange', 'yellow'];
      const nouns = ['apple', 'banana', 'cherry', 'grape', 'orange', 'peach'];
      const styles = ['jazz', 'rock', 'pop', 'blues', 'funk', 'soul'];
      
      const randomCode = `${adjectives[Math.floor(Math.random() * adjectives.length)]}-${nouns[Math.floor(Math.random() * nouns.length)]}-${styles[Math.floor(Math.random() * styles.length)]}`;
      setRoomCode(randomCode);
      
      setTimeout(() => {
        setCreateFadeIn(true);
      }, 100);
    }, 300);
  };

  const handleBackToLobby = () => {
    if (joinMode) {
      setJoinFadeIn(false);
    }
    if (createMode) {
      setCreateFadeIn(false);
    }

    setTimeout(() => {
      setJoinMode(false);
      setCreateMode(false);
      
      setTimeout(() => {
        setButtonsVisible(true);
      }, 100);
    }, 300);
  };

  const handleJoinRoom = () => {
    // TODO: Implement room joining logic
    console.log('Join room clicked with code:', roomCode);
  };

  const handleCreateRoom = () => {
    // TODO: Implement room creation logic
    console.log('Create room clicked with code:', roomCode);
  };

  return (
    <>
      <Head>
        <title>Onyx</title>
      </Head>
      <main className="container">
        <div className={`content ${center ? 'center-content' : ''}`}>
          
          {/* Landing Content */}
          <h1 className={`title ${fadeOut ? 'hidden-content' : ''}`}>
            onyx
          </h1>
          
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

          {/* Morphing Container */}
          <div className={`morph-container ${morph ? 'morphing' : ''}`} onClick={!morph ? handleGetStarted : undefined}>
            
            {/* Get Started Button */}
            {!showAuth && !showButtons && (
              <div className="btn-content">get started</div>
            )}

            {/* Auth Flow */}
            {showAuth && (
              <div className={`dialog-content ${authFadeIn ? 'fade-in' : ''}`}>
                <div className="dialog-inner">
                  <AuthFlow />
                </div>
              </div>
            )}

            {/* Lobby Buttons */}
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

            {/* Join Mode */}
            {joinMode && (
              <div className={`join-content ${joinFadeIn ? 'fade-in' : ''}`}>
                <h3 className="join-title">join</h3>
                
                <input
                  type="text"
                  placeholder="code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  className="room-code-input"
                />
                
                <div className="nav-buttons">
                  <button className="nav-btn back-btn" onClick={handleBackToLobby}>
                    <MdArrowForwardIos size={12} className="back-arrow" />
                  </button>
                  
                  <button className="nav-btn forward-btn join-forward" onClick={handleJoinRoom}>
                    <MdArrowForwardIos size={12} />
                  </button>
                </div>
              </div>
            )}

            {/* Create Mode */}
            {createMode && (
              <div className={`create-content ${createFadeIn ? 'fade-in' : ''}`}>
                <h3 className="create-title">create</h3>
                
                <div className="room-code-display">
                  {roomCode}
                </div>
                
                <div className="nav-buttons">
                  <button className="nav-btn back-btn" onClick={handleBackToLobby}>
                    <MdArrowForwardIos size={12} className="back-arrow" />
                  </button>
                  
                  <button className="nav-btn forward-btn create-forward" onClick={handleCreateRoom}>
                    <MdArrowForwardIos size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}