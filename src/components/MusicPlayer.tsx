'use client';
import { useState, useRef, useEffect } from 'react';
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious, MdVolumeUp, MdShuffle, MdRepeat } from 'react-icons/md';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  src: string;
}

interface MusicPlayerProps {
  tracks?: Track[];
}

const defaultTracks: Track[] = [
  { id: 1, title: 'midnight sessions', artist: 'onyx collective', duration: 240, src: '/audio/track1.mp3' },
  { id: 2, title: 'blue notes', artist: 'dean & kevin', duration: 195, src: '/audio/track2.mp3' },
  { id: 3, title: 'collaborative jam #1', artist: 'room: blue-apple-jazz', duration: 312, src: '/audio/track3.mp3' },
];

export default function MusicPlayer({ tracks = defaultTracks }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      if (repeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNext();
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, repeat]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Audio play error:', error);
    }
  };

  const handleNext = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrack(randomIndex);
    } else {
      setCurrentTrack(prev => (prev + 1) % tracks.length);
    }
    setCurrentTime(0);
  };

  const handlePrevious = () => {
    if (currentTime > 3) {
      setCurrentTime(0);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } else {
      setCurrentTrack(prev => (prev - 1 + tracks.length) % tracks.length);
      setCurrentTime(0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const newTime = percentage * tracks[currentTrack].duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!volumeSliderRef.current) return;

    const rect = volumeSliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.max(0, Math.min(1, clickX / width));
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTrackData = tracks[currentTrack];
  const progress = currentTrackData ? (currentTime / currentTrackData.duration) * 100 : 0;

  return (
    <div className={`music-player ${isVisible ? 'fade-in' : ''}`}>
      <audio ref={audioRef} src={currentTrackData?.src} preload="metadata" />

      <div className="player-content">
        <div className="track-info">
          <h4 className="track-title">{currentTrackData?.title}</h4>
          <p className="track-artist">{currentTrackData?.artist}</p>
        </div>

        <div className="controls-section">
          <div className="primary-controls">
            <button className="control-btn secondary" onClick={handlePrevious} aria-label="Previous track">
              <MdSkipPrevious size={18} />
            </button>

            <button className="control-btn primary play-pause" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
            </button>

            <button className="control-btn secondary" onClick={handleNext} aria-label="Next track">
              <MdSkipNext size={18} />
            </button>
          </div>

          <div className="progress-section">
            <span className="time-display">{formatTime(currentTime)}</span>
            <div className="progress-bar-container" ref={progressRef} onClick={handleProgressClick}>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <span className="time-display">{currentTrackData ? formatTime(currentTrackData.duration) : '0:00'}</span>
          </div>

          <div className="secondary-controls">
            <button className={`control-btn tertiary ${shuffle ? 'active' : ''}`} onClick={() => setShuffle(!shuffle)} aria-label="Shuffle">
              <MdShuffle size={16} />
            </button>

            <button className={`control-btn tertiary ${repeat ? 'active' : ''}`} onClick={() => setRepeat(!repeat)} aria-label="Repeat">
              <MdRepeat size={16} />
            </button>

            <div className="volume-control">
              <button className="control-btn tertiary" onClick={() => setShowVolumeSlider(!showVolumeSlider)} aria-label="Volume">
                <MdVolumeUp size={16} />
              </button>

              {showVolumeSlider && (
                <div className="volume-slider-container">
                  <div className="volume-slider" ref={volumeSliderRef} onClick={handleVolumeChange}>
                    <div className="volume-fill" style={{ width: `${volume * 100}%` }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
